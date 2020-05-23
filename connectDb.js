const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/canon', { useNewUrlParser: true });
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Entry = new Schema({
  band: String,
  album: String,
  genre: String,
  mood: String,
  instrumental: Boolean,
  year: Number,
  rating: Number,
  book: String,
})

module.exports = { Entry }