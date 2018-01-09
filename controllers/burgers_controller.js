var express = require('express');
var router = express.Router();
var burgers = require('../models/burger.js');
//Direction when first getting into the website. Going to the route /burgers
router.get('/', function(req, res){
	res.redirect('/burgers')
});
// grabing the object to load the data from
router.get('/burgers', function(req, res){
	burgers.all(function(data){
		var hbsObject = {burgers: data};

		console.log(hbsObject);

		res.render('index', hbsObject);
	});
});
//post CALL for the burger data
router.post('/burgers/create', function(req, res){
	burgers.create(['burger_name'], [req.body.b_name], function(data){
		res.redirect('/burgers')
	});
});
// put call in order to update the burger object
router.put('/burgers/update/:id', function(req, res){
	var condition = 'id = ' + req.params.id;

	console.log('condition ', condition);

	burgers.update({'devoured': req.body.devoured}, condition, function(data){
		res.redirect('/burgers');
	});
});

module.exports = router;