var express = require('express');
var router = express.Router();
var passport = require('passport');
var userService = require('../services/user-service');
var debug = require('debug');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/create', function(req, res, next) {
  var vm = {
    title: 'Create an account'
  };
  res.render('users/create', vm);
});

router.post('/create', function(req, res, next) {
  userService.addUser(req.body, function(err) {
    if (err) {
      console.log("An error has occured\n\n"+err);
      var vm = {
        title: 'Create an account',
        input: req.body,
        error: err
      };
      delete vm.input.password;
      return res.render('users/create', vm);
    }
    res.render('index', {title: 'Welcome '+req.body.firstName+'!'});
  });
});

router.post('/login', passport.authenticate('local'), function(req, res, next) {
//router.post('/login', function(req, res, next) {
  console.log('User: '+req.body.email);
  //res.redirect('/orders');
    //res.render('index', {title: 'Welcome '+req.body.email+'!'});
  res.redirect('/');
});

module.exports = router;
