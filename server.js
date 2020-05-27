const path = require('path');
const express = require('express')
const app = express();
const PORT = 3000;
const { addEntry, query } = require('./models.js');
var bodyParser = require('body-parser');

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.urlencoded( { extended: true }));
app.use(bodyParser.json());

app.post('/query-entries', (req, res) => {
  console.log('query-entries: req.body', req.body);
  // query()
  //   .then((entries) => {
  //     res.status(200).send(entries)
  //   })
  res.send('back from Q-E')
})

app.post('/new-entry', (req, res) => {
  console.log('req.body', req.body);
  const entry = req.body;
  addEntry(entry)
    .then(res.status(200));
})

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
})