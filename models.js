import { Entry } from './connectDb.js';
const mongoose = require('mongoose');

const model = mongoose.model('Page', Entry);

const query = () => {
  model.find({}, (err, docs) => {
    console.log('docs', docs)
  })
}

module.exports = { query }

