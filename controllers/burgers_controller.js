var express = require("express");
var router = express.Router();
var burgers = require("../models/burger.js");

router.get('/', function (req, res) {
    res.send('hi');
})

router.get('/index', function (req, res) {
    burgers.all(function (data) {
        var hbsObject = { burgers: data };
        console.log(hbsObject);
        res.render('', hbsObject);
    });
});

// router.post("/burgers_update", function (req, res) {
//     burger.create([
//         "name", "devoured"
//     ], [
//             req.body.burger_name, req.body.devoured
//         ], function () {
//             res.redirect("/index");
//         });
// });

router.post('/delete', function (req, res) {
    burgers.delete(['burger_name'], [req.body.b_name], function (data) {
        res.redirect('/index')
    });
});

router.post('/create', function (req, res) {
    burgers.create(['burger_name'], [req.body.b_name], function (data) {
        res.redirect('/index')
    });
});

module.exports = router;
