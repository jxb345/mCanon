const path = require('path');
require('dotenv').config();
const fs = require('fs');
const csv = require('csv-parser');
const express = require('express');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
const app = express();
const { addEntry, addGenreMood, checkRow, createUser, deleteEntry, editEntry, findOne, findUpdate, filter, model, queryGenresMoods, search } = require('./models.js');
const { Users, GenresMoods } = require('./connectDb.js')
const UserIdFunc = require('./userId.js');
const bodyParser = require('body-parser');
// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
// const session = require('express-session');
let currentUser = '';
let getUserId = ''
const { UserId } = require('./userId.js');

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.urlencoded( { extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
// app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
// app.use(passport.initialize());
// app.use(passport.session());

// temporarily commenting out passport functionality
// passport.use(new LocalStrategy(
//   function(username, password, done) {
//     console.log('in passport use ---------------------------')
//     Users.findOne({"username": username}, (err, user) => {
//       if (err) return done(err);
//       console.log('user', user)

//       if (!user) {
//         return done(null, false, { message: 'Incorrect username.'});
//       }

//       if (user.password !== password) {
//         return done(null, false, { message: 'Incorrect password.'});
//       }


//       currentUser = new UserId(user.uId);
//       getId = currentUser.get();
//       console.log('getId', getId)
//       console.log('currerntUser', currentUser)
//       return done(null, user);
//     })
//     console.log('end of passport.use')
//   }
// ))

// passport.serializeUser(function(user, done) {
//   console.log('user', user);
//   done(null, user.id)
// })

// passport.deserializeUser(function(id, done) {
//   Users.findOne({"uId": id}, (err, user) => {
//     if (err) { return done(err)}
//     done(null, user)
//   })
// })

let entriesGenresMoods = {};

const filterSearch = (filters, queryString = '', entriesGenresMoods) => {

  if (Array.isArray(filters) && filters.length === 0) {
    filters = {};
  }
  return new Promise((resolve, reject) => {
    Promise.all([filter(filters, queryString), queryGenresMoods()]).then((results) => {
      let entries = results[0];
      let genres = results[1].genres;
      let moods = results[1].moods;
      entriesGenresMoods.entries = entries;
      entriesGenresMoods.genres = genres;
      entriesGenresMoods.moods = moods;
      resolve(entriesGenresMoods);
    })
    .catch(error => {
      console.error(error.message)
    })
  })

}

app.post('/get-one-entry', (req, res) => {
  let queryOne = req.body._id;
  findOne(queryOne)
    .then((data) => {
      res.status(200).send(data)
    })
    .catch(error => console.error(error));
})

// both the search query AND filters will be send to the query-entries endpoint
// app.post('/search', (req, res) => {
//   let searchQuery = req.body;
//   console.log('req.body in /search', req.body)
//   filterSearch(searchQuery.queryFilters, searchQuery.queryString, entriesGenresMoods)
//   .then((data) => {
//     res.status(200).send(data)
//   })
// })

app.post('/query-entries', (req, res) => {
  console.log('req.body - qE', req.body)
  let filters = req.body.selectedFilters;
  let query = req.body.query
  filterSearch(filters, query , entriesGenresMoods)
  .then(data => res.status(200).send(data))
})

app.post('/new-entry', (req, res) => {
  const entry = req.body;
  delete entry.collection;
  addEntry(entry)
  .then(res.status(301).redirect(HOME))
  .catch(error => console.error(error));
})

app.post('/delete-entry', (req, res) => {
  const remove = req.body;
  deleteEntry(remove)
    .then(res.status(301).redirect(HOME))
    .catch(error => {
      console.error(error.message)
    })
})

app.post('/edit-entry', (req, res) => {
  const edit = req.body;
  findUpdate(edit)
    .then((result) => {
      editEntry(result)
      .then(res.status(301).redirect(HOME));
    })
    .catch(error => console.error(error));
})

app.post('/genres-moods', (req, res) => {
  const filter = req.body.id + 's';
  const addition = req.body.add;
  console.log('addition', addition)
  addGenreMood(filter, addition)
    .then(res.status(301).redirect(HOME))
    .catch(error => console.error(error));
})

app.post('/upload-csv', upload.single('csv-file'), (req, res) => {
  const uploadedFile = req.file || 'nofile';
  const fileName = uploadedFile.originalname || 'noFileName';
  const extension = /csv$/;
  if (!extension.test(fileName)) {
    res.status(403).send('<h3>Please only upload files with a .csv extension. Thanks!')
  }
  fs.createReadStream(uploadedFile.path, 'utf-8')
    .pipe(csv())
    .on('data', (row) => {
      checkRow(row)
    })
    .on('end', () => {
      res.status(301).redirect(HOME)
    })
})

// temporarily commenting out auth endpoints
// app.post('/signup', (req, res) => {
//   const username = req.body.username;
//   const password = req.body.password;
//   createUser(username, password)
//     .then(res.status(301).redirect(HOME));
// })

// app.get('/login', (req, res) =>
// {
//   res.send('<p>error</p>')
// })

// app.post('/login',
//   passport.authenticate('local', { failureRedirect: '/login', failureFlash: true}) ,
//   function (req, res) {
//     console.log('req.body', req.body)
//     console.log('currentU', currentUser)
//     res.redirect('/home')
//   })

// app.get('/logout')

app.listen(process.env.PORT || 3000, () => {
  console.log(`listening on ${process.env.PORT}`);
})

module.exports = { currentUser, getUserId}