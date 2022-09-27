const mysql = require('mysql');

// Setting up to sql
let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  });


  // To view user accounts
exports.view = (req, res) => {
  // Query to find active users
  connection.query('SELECT * FROM user WHERE status = "active"', (err, rows) => {
    // error logging
    if (!err) {
      let removedUser = req.query.removed;
      res.render('home', { rows, removedUser });
    } else {
      console.log(err);
    }
    console.log('The data from user table: \n', rows);
  });
}

// Find User by Search
exports.find = (req, res) => {
  let searchTerm = req.body.search;
  // Query for all users that fit names like search input
  connection.query('SELECT * FROM user WHERE first_name LIKE ? OR last_name LIKE ?', ['%' + searchTerm + '%', '%' + searchTerm + '%'], (err, rows) => {
    // error logging
    if (!err) {
      res.render('home', { rows });
    } else {
      console.log(err);
    }
    console.log('The data from user table: \n', rows);
  });
}

exports.form = (req, res) => {
  res.render('new-customer');
}

// Add new user
exports.create = (req, res) => {
  const { first_name, last_name, email, phone, comments } = req.body;
  let searchTerm = req.body.search;

  // Query to insert new user to db.
  connection.query('INSERT INTO user SET first_name = ?, last_name = ?, email = ?, phone = ?, comments = ?', [first_name, last_name, email, phone, comments], (err, rows) => {
    if (!err) {
      res.render('new-customer', { alert: 'User added successfully.' });
    } else {
      console.log(err);
    }
    console.log('The data from user table: \n', rows);
  });
}


// Edit user
exports.edit = (req, res) => {
  // Query for user to be selected by id
  connection.query('SELECT * FROM user WHERE id = ?', [req.params.id], (err, rows) => {
  //  error logging
    if (!err) {
      res.render('edit-customer', { rows });
    } else {
      console.log(err);
    }
    console.log('The data from user table: \n', rows);
  });
}


// Update User
exports.update = (req, res) => {
  const { first_name, last_name, email, phone, comments } = req.body;
  // User the connection
  connection.query('UPDATE user SET first_name = ?, last_name = ?, email = ?, phone = ?, comments = ? WHERE id = ?', [first_name, last_name, email, phone, comments, req.params.id], (err, rows) => {
// error logging 
    if (!err) {
      // query to locate user by id in db
      connection.query('SELECT * FROM user WHERE id = ?', [req.params.id], (err, rows) => {
        // message confirming user was updated
        if (!err) {
          res.render('edit-customer', { rows, alert: `${first_name} has been updated.` });
        // error logging to console
        } else {
          console.log(err);
        }
        console.log('The data from user table: \n', rows);
      });
    } else {
      console.log(err);
    }
    console.log('The data from user table: \n', rows);
  });
}

// Delete User
exports.delete = (req, res) => {

  // Delete a record

  // Query to delete user based off id
  connection.query('DELETE FROM user WHERE id = ?', [req.params.id], (err, rows) => {

    // error log
    if(!err) {
      res.redirect('/');
    } else {
      console.log(err);
    }
    console.log('The data from user table: \n', rows);

  });

  // Hide a record
  // query connection for user to be hidden

  connection.query('UPDATE user SET status = ? WHERE id = ?', ['removed', req.params.id], (err, rows) => {
  //  error logging
    if (!err) {
      let removedUser = encodeURIComponent('User successeflly removed.');
      res.redirect('/?removed=' + removedUser);
    } else {
      console.log(err);
    }
    console.log('The data from user table are: \n', rows);
  });

}

// View Users
exports.viewall = (req, res) => {

  // Query to select user by id from db
  connection.query('SELECT * FROM user WHERE id = ?', [req.params.id], (err, rows) => {
    // error logging
    if (!err) {
      res.render('view-user', { rows });
    } else {
      console.log(err);
    }
    console.log('The data from user table: \n', rows);
  });

}