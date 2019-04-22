const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

// Create the model class
const ModelClass = mongoose.model('user', userSchema);

// Export the model
module.exports = ModelClass;