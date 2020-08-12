const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

passport.use(new LocalStrategy(
  function(username, password, done) {
    username.f
  }
))