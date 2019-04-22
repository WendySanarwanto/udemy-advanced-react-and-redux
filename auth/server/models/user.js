const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

// Define our model
const userSchema = new Schema({
  email: { 
    type: String,
    unique: true,
    lowercase: true
  },
  password: String,
  isVerified: {
    type: Boolean,
    default: false
  },
  timestamp: { // In milis
    type: Number,
    default: 0
  }
});

// On Save Hook, encrypt password
userSchema.pre('save', function(next) {
  // Get access to the user model's instance
  const user = this;
  // console.log(`[debug]<UserSchema@pre> user: \n`, user);

  // Generate a salt
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      console.error(err);
      return next(err);
    }

    // Hash the password (encrypt) using the salt
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) {
        console.error(err);
        return next(err);
      }
      
      // Overwrite plain text password with encrypted password
      user.password = hash;
      next();
    });
  });
});

// Add methods
userSchema.methods.comparePassword = function(candidatePassword) {
  const password = this.password;
  return new Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, password, (err, isMatch) => {
      if (err) { return reject(err); }
      resolve(isMatch);
    });  
  });
};

// Create the model class
const ModelClass = mongoose.model('user', userSchema);

// Export the model
module.exports = ModelClass;