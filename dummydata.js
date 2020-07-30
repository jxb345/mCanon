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
  'rock',
  'rap',
  'jazz',
  'blues',
  'funk',
  'punk rock',
  'rhythm and blues',
  'electronic',
  'country'
];

const mood = [
  'chill',
  'upbeat',
  'daytime',
];

const instrumental = [
  'yes',
  'no'
]

const musicCollection = [
  'canon',
  'nominee'
];

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}


const fillDatabase = (numOfEntries) => {


  let entries = []
  for (let i = 0; i < numOfEntries; i += 1) {
    let singleEntry = {};

    singleEntry.band = lorem.generateSentences(1);
    singleEntry.album =  lorem.generateSentences(1)
    singleEntry.genre =  genres[getRandom(0,8)],
    singleEntry.mood =  mood[getRandom(0,2)],
    singleEntry.instrumental =  instrumental[getRandom(0,1)],
    singleEntry.year =  getRandom(1900, 2020),
    singleEntry.rating = getRandom(1,3),
    singleEntry.musicCollection = musicCollection[getRandom(0,1)],
    entries.push(singleEntry)
  }

  model.insertMany(entries, (err) => {
    if (err) { console.log('err', err) }
  })
}

fillDatabase(200);

