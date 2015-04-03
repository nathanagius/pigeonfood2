var express = require('express');
var debug = require('debug');
var router = express.Router();

/* GET home page. */
router.get('/cars', function(req, res, next) {
  //res.redirect('../../index.html', { title: 'Express' });
  //res.sendFile('../public/index.html');
  
  debug('in cars!');
});

module.exports = router;