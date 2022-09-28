const LocalStrategy = require('passport-local');
const passport = require('passport');
const { User } = require('../../models');

passport.serializeUser((user, done) => {
    done(null, user)
});

passport.deserializeUser((user, done)=> {
    return done(null, user)
});

passport.use(new LocalStrategy(
    {usernameField: 'email_address'},
    async (username, password, done) => {
        User.findOne({where: {email_address: username}})
            .then(user => {
                if(!user) {
                    return done(null, false, {message: 'Incorrect Email Address'})
                }
                if(!user.checkPassword(password)) {
                    return done(null, false, {message: 'Incorrect Password'})
                }
                return done(null, user)
            })
            .catch(err => {
                console.log(err); 
                done(err);
            });
    }
));

