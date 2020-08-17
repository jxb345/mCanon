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
})

const Users = new Schema({
  uId: Number,
  username: String,
  password: String
})

const User = mongoose.model('testusers', Users)

module.exports = { Entry, User }