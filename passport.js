const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const { model } = require('./models.js');

// const use = passport.use(new LocalStrategy(
//   function(username, password, done) {
//     model.findOne({username: username}), function (err, user) {
//       if (err) return done(err);

//       if (!user) {
//         return done(null, false, { message: 'Incorrect username.'});
//       }

//       if (!user.validPassword(password)) {
//         return done(null, false, { message: 'Incorrect password.'});
//       }
//       return done( null, user);
//     }
//   }
// ))


const serialize = passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

const deserialize = passport.deserializeUser(function(id, cb) {
  db.users.findById(id, function (err, user) {
    if (err) { return cb(err); }
    cb(null, user);
  });
});


module.exports = { deserialize, serialize
  // , use
 };