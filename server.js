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

app.use(passport.initialize());
app.use(passport.session());
app.use(routes);


sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Server is listening on port http://localhost:${PORT}/`));
});