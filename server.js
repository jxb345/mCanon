const path = require('path');
const express = require('express')
const app = express();
const PORT = 3000;
const { addEntry, query } = require('./models.js');

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.urlencoded( { extended: true }));

app.get('/query-entries', (req, res) => {
  console.log('query-entries');
  query()
    .then((entries) => {
      res.status(200).send(entries)
    })
})

app.post('/new-entry', (req, res) => {
  console.log('req.body', req.body);
  const entry = req.body;
  addEntry(entry)
    .then(res.status(200).send('received new entry!'));
})

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
})