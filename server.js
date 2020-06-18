const path = require('path');
const express = require('express')
const app = express();
const PORT = 3000;
const { addEntry, deleteEntry, filter, search } = require('./models.js');
var bodyParser = require('body-parser');

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.urlencoded( { extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

app.post('/search', (req, res) => {
  console.log('req.body - search: ', req.body);
  search(req.body)
    .then((results) => {
      res.status(200).send(results)
    })
})

app.post('/query-entries', (req, res) => {
  console.log('req.body', req.body)
  let filters = req.body;

  // if (typeof filters === 'string') {
  //   filters = { "band": filters}
  // }

  if (Array.isArray(filters) && filters.length === 0) {
    filters = {};
  }
  filter(filters)
    .then((entries) => {
      console.log('entries', entries)
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
  console.log('req.body', req.body)
  const remove = req.body;
  deleteEntry(remove)
    .then(res.status(200).send({ entry: 'entry deleted!'}))

})

app.post('/edit-entry', (req, res) => {
  const edit = req.body;
  editEntry(edit)
    .then(res.status(200).send('entry edited!'));
})

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
})