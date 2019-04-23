const Authentication = require('./controllers/authentication');
const passport = require('passport');

// auth middleware - session = false, means we don't want to use cookie
const requireAuth = passport.authenticate('jwt', { session: false });
// const requireSignin = passport.authenticate('login', { session: false }); --> does not work. Causing unable to find'local' strategy error
const requireSignin = passport.authenticate('', { session: false });

module.exports = (app) => {
  app.get('/', requireAuth, (req, res) => {
    res.send({ hi: 'there' })
  });
  app.post('/signin', requireSignin, Authentication.signIn);
  app.post('/signup', Authentication.signUp);
};