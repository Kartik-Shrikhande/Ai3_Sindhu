
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  age:{
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  religion: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },

  maritalStatus: {
    type: String,
    enum: ['Single', 'Divorced', 'Widowed'],
    required: true,
  },
  education: {
    type: String,
    required: true,
  },
  profession: {
    type: String,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  bio: {
    type: String,
  },
  isDeleted: {
    type: Boolean,
    default: false, 
  },
},{timestamps:true});


module.exports = mongoose.model('User', userSchema);


