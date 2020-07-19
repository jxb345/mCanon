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

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.urlencoded( { extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

app.post('/get-one-entry', (req, res) => {
  let queryOne = req.body._id;
  findOne(queryOne)
    .then((data) => {
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
  addEntry(entry)
    .then(res.status(301).redirect(HOME));

})

app.post('/delete-entry', (req, res) => {
  const remove = req.body;
  deleteEntry(remove)
    .then((entries) => {
      res.status(200).send(entries)
    })
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
  const file = req.file;
  console.log('file', file)
  fs.createReadStream(file.path, 'utf-8')
    .pipe(csv())
    .on('data', (row) => {
      console.log('row', row)
      addEntry(row)
    })
    .on('end', () => {
      res.status(301).redirect(HOME)
    })
})

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
})