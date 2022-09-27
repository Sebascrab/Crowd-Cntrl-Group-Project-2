const exphbs = require('express-handlebars');
const express = require('express');
const session = require('express-session');
const sequelize = require('./config/connection');
const routes = require('./controllers');
const path = require('path');


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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(routes);


sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Server is listening on port http://localhost:${PORT}/`));
});