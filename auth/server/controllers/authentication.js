const jwt = require('jwt-simple');
const User = require('../models/user');

function tokenForUser(user, secret) {
  const timeStamp = new Date().getTime();
  // sub -> subject , iat = issued at time
  // TODO: Should set exp in the option 
  return jwt.encode({ sub: user.id, iat: timeStamp }, secret);
}

exports.signUp = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  // console.log(`[debug]<authentication@signUp> email: ${email}, password: ${password}`);

  // TODO: Add more strict validations
  if (!email || !password) {
    return res.status(422).send({ error: 'You must provide email and password' });
  }
  
  try {
    // See if a user with the given email exists
    const existingUser = await User.findOne({ email: email }).exec();
    
    // If a user with email does exist, return an error
    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use.' });
    }

    const jwtSecret = process.env.EXPRESS_AUTH_API_JWT_SECRET_KEY;
    if (!jwtSecret) {
      console.error(`JWT Secret has not been set. Create the secret and assign it to EXPRESS_AUTH_API_JWT_SECRET_KEY environment variable.`);
      res.status(500).send( { error: 'Internal error happened.' });
    }
    
    // If a user with email does NOT exist, create and save user record
    const newUser = new User({
      email: email,
      password: password,
      isVerified: false,
      timestamp: Date.now()
    });

    await newUser.save();
    // console.log(`[debug]<authentication@signUp> newUser: \n`, newUser);

    // Respond to request indicating the user was created
    res.json({ token: tokenForUser(newUser, jwtSecret) });
  } catch(err) {
    console.error(err);
    return next(err);
  }
};

exports.signIn = async (req, res, next) => {
  // User has already had their email and password auth'd
  // We just need to give them the token.
  // Local login strategy passed in the matched User data into req
  const user = req.user;
  // console.log(`[debug]<authentication@signIn> user: \n`, user);
  const jwtSecret = process.env.EXPRESS_AUTH_API_JWT_SECRET_KEY;
  res.send({ token: tokenForUser(user, jwtSecret) });
}