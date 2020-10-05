const { Entry, GenresMoods, Users } = require("./connectDb.js");
const mongoose = require("mongoose");
const model = mongoose.model("Page", Entry);
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const { getUserId } = require("./server.js");
const { UserId } = require("./userId.js");
const { genres, moods } = require("./genresMoods.js");
const { query } = require("express");
let user = "";
let currentUserId = "";

const addEntry = (entry) => {
  // currentUserId

  // what if band / album is purposefully NOT
  //   supposed to be capitalized (edit I guess?)

  if (entry.band !== "") {
    entry.band = capitalize(entry.band);
  }

  if (entry.album !== "") {
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

  if (entry.rating === 'rating' || '') {
    entry.rating = 0;
  }

  const create = new model({
    band: entry.band,
    album: entry.album,
    genre: entry.genre,
    mood: entry.mood,
    instrumental: entry.instrumental,
    year: entry.year || null,
    rating: entry.rating || 0,
    musicCollection: entry.musicCollection,
    uId: currentUserId,
  });

  return new Promise((resolve, reject) => {
    create.save((err, create) => {
      if (err) return console.error(err);
      resolve();
      reject(new Error("error in addEntry"));
    });
  });
};

const addGenreMood = (filter, addition) => {
  let query = {};
  query[filter] = addition;
  return new Promise((resolve, reject) => {
    GenresMoods.findOneAndUpdate(
      { uId: "genresMoods" },
      { $push: query },
      (err) => {
        if (err) throw err;
        resolve();
        reject(new Error("error in addGenreMood"));
      }
    );
  });
};

const createUser = (user, ps) => {
  const saveUser = new Users({
    username: user,
    password: ps,
    uId: uuidv4(),
  });

  return new Promise((resolve, reject) => {
    saveUser.save((err) => {
      if (err) return console.error(err);
      user = new UserId(saveUser.uId);
      currentUserId = user.get();
      resolve();
      reject(new Error("error in createUser"));
    });
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
  });
};

const deleteEntry = (entry) => {
  return new Promise((resolve, reject) => {
    model.findOneAndDelete({ _id: entry._id }, (err) => {
      if (err) {
        throw err;
      }
      model.find({}, (err, docs) => {
        if (err) {
          throw err;
        }
        resolve(docs);
        reject(new Error("error in deleteEntry"));
      });
    });
  });
};

const findUpdate = (entry) => {
  let id = entry._id;
  return new Promise((resolve, reject) => {
    findOne(id).then((result) => {
      resolve(compareTwoEntries(result, entry));
      reject(new Error("error in findUpdate"));
    });
  });
};

// const generateHash = () => {
//   bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(plainText, salt, (err, hash) => {

//     })
//   })
// }

const editEntry = (entry) => {
  return new Promise((resolve, reject) => {
    console.log("entry in editEntry", entry);
    model.findByIdAndUpdate({ _id: entry[0] }, entry[1], (err) => {
      if (err) {
        throw err;
      }
      resolve();
      reject(new Error("error in editEntry"));
    });
  });
};

const compareTwoEntries = (original, edited) => {
  let updateQuery = [];
  let difference = {};
  let categories = [
    "band",
    "album",
    "year",
    "genre",
    "mood",
    "rating",
    "collection",
    "instrumental",
  ];

  for (category in original) {
    if (categories.includes(category)) {
      if (original[category] !== edited[category]) {
        difference[category] = edited[category];
      }
    }
  }
  updateQuery.push(original._id, difference);
  return updateQuery;
};

const capitalize = (name) => {
  let capital = name[0].toUpperCase();
  for (let i = 1; i < name.length; i += 1) {
    if (name[i] === " ") {
      capital += " ";
      capital += name[i + 1].toUpperCase();
      i += 1;
    } else {
      capital += name[i];
    }
  }
  return capital || name;
};

const filter = (filters, query = "") => {
  const searchFilter = (query) => {
    const wildcard = query + ".*";
    const regex = new RegExp(wildcard, "i");
    return regex;
  };
  for (let key in filters) {
    if (key === "collection") {
      if (filters[key] !== "clear") {
        filters.musicCollection = filters[key];
      }
      delete filters.collection;
    }
    if (filters[key] === "clear") {
      delete filters[key];
    }
  }
  filters.uId = currentUserId;
  return new Promise((resolve, reject) => {
    // NOTE: this search / filter function ALMOST WORKS except for this edge case:
    // - after the user enter a search query and then deletes it but adjusts a
    // filter, then that subsequent search will still use the previous search
    // query. NEED a way to findOneAndUpdate AFTER a user deletes the search
    // query and then adjusts a filter
    console.log("filters", filters);
    if (query !== "") {
      GenresMoods.findOneAndUpdate( { uId: "genresMoods" }, { search: query})
      .then(() => {
        let regexSearch = searchFilter(query);
        console.log("regexSearch with query", regexSearch);
        let filterQuery = model.find(filters);
        filterQuery
        .find({ $or: [{ band: regexSearch }, { album: regexSearch }] })
        .then((queryResults) => {
          resolve(queryResults);
        });
      })
    } else {
      GenresMoods.findOne({ uId: "genresMoods" })
        .then((results) => {
          return results.search;
        })
        .then((search) => {
          regexSearch = searchFilter(search);
          filterQuery = model.find(filters);
          console.log("regexSearch without query", regexSearch);
          filterQuery
            .find({ $or: [{ band: regexSearch }, { album: regexSearch }] })
            .sort({ band: 1 })
            .exec((err, filterResults) => {
              if (err) {
                throw err;
              }
              resolve(filterResults);
              reject(new Error("error in withOUT search filter"));
            });
        });
    }
  });
};

const findOne = (query) => {
  return new Promise((resolve, reject) => {
    model.findOne({ _id: query }, (err, docs) => {
      if (err) {
        throw err;
      }
      resolve(docs);
      reject(new Error("error in findOne"));
    });
  });
};

const queryGenresMoods = () => {
  return new Promise((resolve, reject) => {
    GenresMoods.findOne({ uId: "genresMoods" }, (err, docs) => {
      if (err) {
        throw err;
      }
      resolve(docs);
      reject(new Error("error in queryGenresMoods"));
    });
  });
};

const search = (query) => {
  return new Promise((resolve, reject) => {
    const wildcard = capitalize(query) + ".*";
    const regex = new RegExp(wildcard);
    model
      .find({ $or: [{ band: regex }, { album: regex }] })
      .exec(function (err, docs) {
        if (err) {
          console.log("err: ", err);
        }
        resolve(docs);
        reject(new Error("error in search"));
      });
  });
};

module.exports = {
  addEntry,
  addGenreMood,
  createUser,
  editEntry,
  filter,
  findOne,
  findUpdate,
  deleteEntry,
  model,
  queryGenresMoods,
  search,
};
