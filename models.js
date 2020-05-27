const { Entry } = require('./connectDb.js');
const mongoose = require('mongoose');

const model = mongoose.model('Page', Entry);

const addEntry = (entry) => {
  const create = new model({
    band: entry.band,
    album: entry.album,
    genre: entry.genre,
    mood: entry.mood,
    instrumental: entry.instrumental,
    year: entry.year,
    rating: entry.rating,
    book: entry.book,
  })

  return new Promise((resolve, reject) => {
    create.save( (err, create) => {
      if (err) return console.error(err);
      console.log('create', create)
      resolve()
    })
  });
}

const query = (filter) => {

  let queryFilter = {};

  if (filter === 'research' || 'canon') {
    queryFilter.book = filter;
  }

  return new Promise((resolve, reject) => {
    model.find(queryFilter, (err, docs) => {
      console.log('docs', docs)
      resolve(docs);
    })
  })
}

module.exports = { addEntry, query }

