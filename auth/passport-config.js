module.exports = function() {
  var passport = require('passport');
  var passportLocal = require('passport-local');
  var userService = require('../services/user-service');
  var FacebookStrategy = require('passport-facebook').Strategy;
  
  passport.use(new passportLocal.Strategy({usernameField: 'email'}, function(email, password, next) {
    userService.findUser(email, function(err, user) {
      if (err) {
        return next(err);
      }
      if (!user || user.password !== password) {
        return next(null, null);
      }
      next(null, user);
    });
  }));
  
  passport.use(new FacebookStrategy({
    clientID: "892542157435857",
    clientSecret: "0aadb89d598fdc5413e7013426e96d6c",
    callbackURL: "https://pigeonfood2-stefletcher-2.c9.io/auth/facebook/callback"
  },
    function(accessToken, refreshToken, profile, done) {
        console.log('profile');
        return done(null, profile);
    }
  ));
  
  passport.serializeUser(function(user, next) {
    next(null, user.email);
  });
  
  passport.deserializeUser(function(email, next) {
    userService.findUser(email, function(err, user) {
      next(err, user);
    });
  });
};