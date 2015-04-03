var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'User login page' });
  //res.sendFile('../public/index.html');
});

router.get('/home', passport.authenticate('facebook') ,function(req, res, next) {
  console.log('auth success');
  //res.sendFile('../public/index.html');
});

module.exports = router;
