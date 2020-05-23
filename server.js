const path = require('path');
const express = require('express')
const app = express();
const PORT = 3000;

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.urlencoded( { extended: true }));


app.post('/new-entry', (req, res) => {
  console.log('req.body', req.body);
  res.status(200).send('received new entry!')
})

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
})