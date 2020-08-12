const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const { model } = require('./models.js');

const use = passport.use(new LocalStrategy(
  function(username, password, done) {
    model.findOne({username: username}), function (err, user) {
      if (err) return done(err);

      if (!user) {
        return done(null, false, { message: 'Incorrect username.'});
      }

      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.'});
      }
      return done( null, user);
    }
  }
))

module.exports = { use };