import mongoose from 'mongoose'
//const mongoose = require('mongoose');
const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Name is required'
  },
  salt: String
});
//module.exports = mongoose.model('User', UserSchema);
export default mongoose.model('Category', CategorySchema);

