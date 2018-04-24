var express = require("express");
var router = express.Router();
var burgers = require("../models/burger.js");

router.get('/', function(req, res) {
    res.send('hi');
})

router.get('/index', function(req, res){
	burgers.all(function(data){
		var hbsObject = {burgers: data};
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

router.post("/", function(req, res) {
    burger.create([
   "name", "devoured"
 ], [
   req.body.burger_name, req.body.devoured
 ], function() {
   res.redirect("/");
 });
})
;
router.post('/create', function(req, res){
	burgers.create(['burger_name'], [req.body.b_name], function(data){
		res.redirect('/burgers')
	});
});

module.exports = router;
