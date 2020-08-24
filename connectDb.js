const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/canon', { useNewUrlParser: true });
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Entry = new Schema({
  // userId = Number,
  // // username: String,
  // password: String,
  band: String,
  album: String,
  genre: String,
  mood: String,
  instrumental: String,
  year: Number,
  rating: Number,
  musicCollection: String,
  uId: String
})

const User = new Schema({
  uId: String,
  username: String,
  password: String,
})

const Users = mongoose.model('users', User)

module.exports = { Entry, Users }