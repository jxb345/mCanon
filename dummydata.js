const { Entry } = require('./connectDb.js');
const mongoose = require('mongoose');
const { model } = require('./models.js');
const LoremIpsum  = require('lorem-ipsum').LoremIpsum;

const lorem = new LoremIpsum({
  wordsPerSentence: {
    max: 3,
    min: 1
  }
})

const genres = [

];

const mood = [

];



let entries = []
for (let i = 0; i < 200; i += 1) {
  let singleEntry = {};

  singleEntry.band = lorem.generateSentences(1);
  singleEntry.album =  lorem.generateSentences(1)
  singleEntry.genre =  'country',
  singleEntry.mood =  'chill',
  singleEntry.instrumental =  'no',
  singleEntry.year =  1939,
  singleEntry.rating =  1,
  singleEntry.book =  'canon',
}


model.insertMany


