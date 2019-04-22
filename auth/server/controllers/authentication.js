const User = require('../models/user');

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

    // If a user with email does NOT exist, create and save user record
    const newUser = new User({
      email: email,
      password: password,
      isVerified: false,
      timestamp: Date.now()
    });

    await newUser.save();

    // Respond to request indicating the user was created
    res.json({ success: true });
  } catch(err) {
    console.error(err);
    return next(err);
  }
};