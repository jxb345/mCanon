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

module.exports = { addEntry, query }

