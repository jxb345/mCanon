const path = require('path');
const fs = require('fs');
const csv = require('csv-parser');
const express = require('express');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
const app = express();
const PORT = 3000;
const HOME = 'http://localhost:3000/';
const { addEntry, deleteEntry, editEntry, findOne, findUpdate, filter, search } = require('./models.js');
var bodyParser = require('body-parser');
const passport = require('passport');
const { deserialize, serialize, use } = require('./passport.js');

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.urlencoded( { extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

app.use(passport.initialize());
app.use(passport.session());

app.post('/get-one-entry', (req, res) => {
  let queryOne = req.body._id;
  console.log('queryOne', queryOne)
  findOne(queryOne)
    .then((data) => {
      console.log('data in get-one-entry', data)
      res.status(200).send(data)
    })
})

app.post('/search', (req, res) => {
  search(req.body)
    .then((results) => {
      res.status(200).send(results)
    })
})

app.post('/query-entries', (req, res) => {
  let filters = req.body;
  console.log('filters', filters)
  if (Array.isArray(filters) && filters.length === 0) {
    filters = {};
  }
  filter(filters)
    .then((entries) => {
      res.status(200).send(entries)
    })
    .catch(error => {
      console.error(error.message)
    })
})

app.post('/new-entry', (req, res) => {
  const entry = req.body;
  console.log('r', req.body.collection)
  // entry.musicCollection = mColl;
  delete entry.collection;
  console.log('entry', entry)
  addEntry(entry)
    .then(res.status(301).redirect(HOME));

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
      console.log('row', row)
      addEntry(row)
    })
    .on('end', () => {
      res.status(301).redirect(HOME)
    })
})

app.post('/login',
  passport.authenticate('local', { failureRedirect: '/login'},
  function(req, res) {
    res.status(301).redirect(HOME)
  }))

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
})