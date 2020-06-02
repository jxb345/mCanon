const path = require('path');
const express = require('express')
const app = express();
const PORT = 3000;
const { addEntry, deleteEntry, query } = require('./models.js');
var bodyParser = require('body-parser');

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.urlencoded( { extended: true }));
app.use(bodyParser.json());

app.post('/query-entries', (req, res) => {
  let filters = req.body;
  if (Array.isArray(filters) && filters.length === 0) {
    filters = {};
  }
  query(filters)
    .then((entries) => {
      res.status(200).send(entries)
    })
})

app.post('/new-entry', (req, res) => {
  console.log('req.body', req.body);
  const entry = req.body;
  addEntry(entry)
    .then(res.status(200).send('entry added!'));
})

app.post('/delete-entry', (req, res) => {
  const remove = req.body;
  deleteEntry(remove)
    .then(res.status(200).send('entry deleted!'))

})

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
})