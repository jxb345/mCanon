const { Entry } = require('./connectDb.js');
const mongoose = require('mongoose');

const model = mongoose.model('Page', Entry);

const addEntry = (entry) => {

  entry.band = capitalize(entry.band);
  entry.album = capitalize(entry.album);

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
    create.save((err, create) => {
      if (err) return console.error(err);
      resolve()
    })
  });
}

const deleteEntry = (entry) => {
  return new Promise((resolve, reject) => {
    model.findOneAndDelete({ album: entry.album }, (err) => {
      if (err) { throw err }
      console.log('deleted in deleteEntry')
      resolve();
    })
  })
}

const editEntry = (entry) => {
  return new Promise((resolve, reject) => {
    model.findByIdAndUpdate( { entry }, update  , (err) => {
      if (err) { throw err; }
      resolve();
    })
  })
}

const capitalize = (name) => {
  let capital = name[0].toUpperCase();
  for (let i = 1; i < name.length; i += 1) {
    if (name[i] === ' ') {
      capital += ' ';
      capital += name[i + 1].toUpperCase();
      i += 1
    } else {
      capital += name[i];
    }
  }
  return capital;
}

const query = (filters) => {
  console.log('filters', filters)
  for (let key in filters) {
    if (filters[key] === 'clear') {
      delete filters[key]
    }
  }
  return new Promise((resolve, reject) => {
    model.find(filters, (err, docs) => {
      if (err) { throw err }
      resolve(docs);
    })
  })
}

const findFilter = (filter) => {
  let selectedFilter = '';
  const allFilters = {
    bookOptions: ['research', 'canon'],
    moodOptions: ['chill', 'upbeat', 'daytime'],
    instrumentalOptions: ['yes', 'no'],
    genreOptions: ['rock', 'rap', 'jazz', 'blues', 'funk', 'rhythm and blues', 'electronic', 'country'],
    ratingOptions: [1, 2, 3]
  }

  for (const oneFilter in allFilters) {
    if (allFilters[oneFilter].includes(filter)) {
      selectedFilter = oneFilter;
      break;
    }
  }

  switch (selectedFilter) {
    case 'bookOptions':
      return { book: filter };
    case 'moodOptions':
      return { mood: filter };
    case 'instrumentalOptions':
      return { instrumental: filter };
    case 'genreOptions':
      return { genre: filter };
    default:
      return {};
  }
}

module.exports = { addEntry, query, deleteEntry }

