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
  console.log('filter---', filter)
  let queryFilter = findFilter(filter);

  return new Promise((resolve, reject) => {
    model.find(queryFilter, (err, docs) => {
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
       genreOptions:['rock', 'rap', 'jazz', 'blues', 'funk', 'rhythm and blues', 'electronic', 'country'],
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
        if (filter === 'research') {
          return { book: 'research'};
        } else {
          return { book: 'canon'};
        }
      case 'moodOptions':
        if (filter === 'chill') {
          return { mood: 'chill'};
        }
        if (filter === 'upbeat') {
          return { mood: 'upbeat'};
        }
        if (filter === 'daytime') {
          return { mood: 'daytime'};
        }
        default:
          return {};
      }
}

module.exports = { addEntry, query }

