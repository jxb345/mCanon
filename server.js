const path = require('path');
const express = require('express')
const app = express();
const PORT = 3000;

app.use(express.static(path.resolve(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
})