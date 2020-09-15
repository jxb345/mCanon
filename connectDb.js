const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/canon', { useNewUrlParser: true });
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const { genres, moods} = require('./genresMoods.js');

const Entry = new Schema({
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

const GenreMood = new Schema({
  uId: String,
  genres: Array,
  moods: Array
})

const Users = mongoose.model('users', User)
const GenresMoods = mongoose.model('genresmoods', GenreMood)

const initialDbSetup = {
    uId: 'genresMoods',
    genres: genres,
    moods: moods
}

GenresMoods.findOneAndUpdate({ uId: "genresMoods" }, initialDbSetup, { upsert: true }, (err, docs) => {
  if (err) console.log('error')
  console.log('docs', docs)
})


module.exports = { Entry, GenresMoods, Users }