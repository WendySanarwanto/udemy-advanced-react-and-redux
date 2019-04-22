const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

// auth middleware - session = false, means we don't want to use cookie
const requireAuth = passport.authenticate('jwt', { session: false });

module.exports = (app) => {
  app.get('/', requireAuth, (req, res) => {
    res.send({ hi: 'there' })
  });
  app.post('/signup', Authentication.signUp);
  
};