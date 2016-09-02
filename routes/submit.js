var express = require('express');
var router = express.Router();

var firstName = "";
var lastName = "";
var favThrows = "";
var person = {
	"firstName": firstName,
	"lastName": lastName,
	"favThrows": favThrows
}


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('submit', { title: 'Homework 2' });
});

//router.post('/log', function(req, res) {
//	console.log(req.body);
//});

module.exports = router;
