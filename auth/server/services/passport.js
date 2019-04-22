const passport = require(`passport`);
const User = require('../models/user');
const jwtSecret = process.env.EXPRESS_AUTH_API_JWT_SECRET_KEY;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

// Create local strategy
const localLoginOptions = { usernameField: 'email' }; // tell passsword to lookup email field as username
const localLogin = new LocalStrategy( localLoginOptions, async ( email, password, done ) => {
  // Verify this username and password, call done with the user
  // if it is the correct username and password
  // otherwise, call done with false
  try {
    const user = await User.findOne({ email }).exec();
    if (!user) { return done(null, false); }

    // TODO: compare password - is 'password' equal to user.password ?
  } catch(err){
    console.error(err);
    done(err);
  }
});

// Setup options for JWT Strategy
const jwtOptions = {
  // Tell JWT to take the token from request's header: Authorization header
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: jwtSecret
};

// Create JWT Strategy
const jwtLogin  = new JwtStrategy(jwtOptions, async(payload, done) => {
  try {
    // See if the user ID in the payload exists in our database
    const matchedUser = await User.findById(payload.sub).exec();

    // If it does, call 'done' with the other
    if (matchedUser) {
      return done(null, matchedUser);
    } 

    // otherwise, call done without a user object
    done(null, false);
  } catch(err) {
    console.error(err);
    done(err, false);
  }
});

// Tell passport to use this strategy
passport.use(jwtLogin);
