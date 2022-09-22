const express = require('express');
const mysql = require('mysql');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5500;

app.use(bodyParser.urlencoded({ extended: true }));

// Parse application/json
app.use(bodyParser.json());

// Static files
app.use(express.static('public'));








// app.get('/', (req, res) => {
//    res.render('home');
// });
// app.listen(port, () => console.log(`listening on port ${port}`)); mn