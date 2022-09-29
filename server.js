const exphbs = require('express-handlebars');
const express = require('express');
const session = require('express-session');
const sequelize = require('./config/connection');
const routes = require('./controllers');
const path = require('path');
const passport = require('passport');
const local = require('./config/strategies/local');



const sess = {
    secret: 'secret secret here',
    cookie: {},
    resave: false,
    saveUninitialized: true
}


const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3001;
app.use(session(sess));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static("public/img"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));
app.use(passport.initialize());
app.use(passport.session());



app.use(routes);


sequelize.sync({ force: false }).then(() => {
    app.listen(process.env.PORT || 5000, () => console.log(`Server is listening on port http://localhost:${PORT}/`));
});