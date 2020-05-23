const mongoose = require('mongoose');
await mongoose.connect('mongodb://localhost/canon');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Entry = new Schema({
  band: String,
  album: String,
  genre: String,
  mood: String,
  instrumental: Boolean,
  year: Number,
  Rating: Number,
  book: String,
})

module.exports = { Entry }