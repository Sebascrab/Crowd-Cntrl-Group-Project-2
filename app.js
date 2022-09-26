require('dotenv').config();
const routes = require('./routes');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const PORT = process.env.PORT || 3000;

const app = express();
const hbs = exphbs.create({ helpers });

const sess = {
    secret: 'Super secret secret',
    cookie: {
        maxAge: 300000,
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sess));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });
  
