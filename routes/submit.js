var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('submit', { title: 'Homework 2' });
});

//router.post('/log', function(req, res) {
//	console.log(req.body);
//});

module.exports = router;