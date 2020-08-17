const { Entry, User} = require('./connectDb.js');
const mongoose = require('mongoose');
const model = mongoose.model('Page', Entry);
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');


const addEntry = (entry) => {

  // what if band / album is purposefully NOT
  //   supposed to be capitalized (edit I guess?)

  if (entry.band !== '') {
    entry.band = capitalize(entry.band);
  }

  if (entry.album !== '') {
    entry.album = capitalize(entry.album);
  }

  if (entry.genre === "genre") {
    entry.genre = "";
  }

  if (entry.mood === "mood") {
    entry.mood = "";
  }

  if (entry.instrumental === "instrumental") {
    entry.instrumental = "";
  }

  if (entry.musicCollection === "collection") {
    entry.musicCollection = "";
  }


  const create = new model({
    band: entry.band,
    album: entry.album,
    genre: entry.genre,
    mood: entry.mood,
    instrumental: entry.instrumental,
    year: entry.year || null,
    rating: entry.rating || null,
    musicCollection: entry.musicCollection,
  })

  return new Promise((resolve, reject) => {
    create.save((err, create) => {
      if (err) return console.error(err);
      resolve()
    })
  });
}

const createUser = (user, ps) => {
  console.log('user', user)

  // const saveUser = new User({
  //   username: user,
  //   password: ps
  // })

  return new Promise((resolve, reject) => {

    User.create({ username: user, password: ps}, (err) => {
      if (err) return console.error(err);
      console.log('user saved')
      resolve();
    })
    // below is generateHash function def, but need to
    // actually invoke it
    // const generateHash = () => {
    //   bcrypt.genSalt(10, (err, salt) => {
    //     bcrypt.hash(ps, salt, (err, hash) => {
    //       const user = new model({
    //         username: user,
    //         password: hash,
    //         userId: uuidv4()
    //       })
    //       generateHash()
    //       createUser.save((err, createUser) => {
    //         if (err) return console.error(err);
    //         console.log('createUser', createUser)
    //         resolve();
    //       })
    //     })
    //  })
    // }
  })
}

const deleteEntry = (entry) => {
  console.log('entry', entry)
  return new Promise((resolve, reject) => {
    model.findOneAndDelete({ "_id": entry._id }, (err) => {
      if (err) { throw err }
      model.find({}, (err, docs) => {
        if (err) { throw err; }
        resolve(docs)
      })
    })
  })
}

const findUpdate = (entry) => {
  let id = entry._id;
  return new Promise((resolve, reject) => {
    findOne(id)
    .then(result => {
      resolve(compareTwoEntries(result, entry))
    })
  })
}

// const generateHash = () => {
//   bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(plainText, salt, (err, hash) => {

//     })
//   })
// }

  const editEntry = (entry) => {
    return new Promise((resolve, reject) => {
      model.findByIdAndUpdate({ _id: entry[0] }, entry[1], (err) => {
        if (err) { throw err; }
        resolve();
      })
    })
  };

const compareTwoEntries = (original, edited) => {
  let updateQuery = [];
  let difference = {};
  let categories = [
    'band',
    'album',
    'year',
    'genre',
    'mood',
    'rating',
    'collection',
    'instrumental'
  ]

  for (category in original) {
    if (categories.includes(category)) {
      if (original[category] !== edited[category]) {
        difference[category] = edited[category]
      }
    }
  }
  updateQuery.push(original._id, difference);
  return updateQuery
}

const capitalize = (name) => {
  console.log('name', name)
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
  return capital || name;
}

const filter = (filters) => {
  for (let key in filters) {
    if (key === 'collection') {
      filters.musicCollection = filters[key];
      delete filters.collection;
    }
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

const findOne = (query) => {
  return new Promise((resolve, reject) => {
    model.findOne({"_id": query }, (err, docs) => {
      if (err) { throw err }
      resolve(docs);
    })
  })
}

const search = (query) => {
  return new Promise((resolve, reject) => {
    const wildcard = capitalize(query) + ".*";
    const regex = new RegExp(wildcard);
    model.find({ $or: [{ "band": regex }, { "album": regex }] }).exec(function (err, docs) {
      if (err) { console.log('err: ', err); }
      resolve(docs);
    })
  })
}

module.exports = { addEntry, createUser, editEntry, filter, findOne, findUpdate, deleteEntry, model, search }

