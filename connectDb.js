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
  moods: Array,
  search: String
})

const Users = mongoose.model('users', User)
const GenresMoods = mongoose.model('genresmoods', GenreMood)

const initialDbSetup = {
  uId: 'genresMoods',
  genres: genres,
  moods: moods,
  // a db query for 'search' may no longer be needed
  // search: '',
}

GenresMoods.find({ uId: "genresMoods" },
 (err, docs) => {
    if (err) console.log('error', err)
    console.log('docs.l', docs.length)
    if (docs.length === 0) {
      GenresMoods.create(initialDbSetup, (err, results) => {
        if (err) console.log('error', err)
        console.log('results', results)
      })
    }
  })




module.exports = { Entry, GenresMoods, Users }