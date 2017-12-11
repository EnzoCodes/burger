var express = require("express");
var router = express.Router();

// Importing burger model to use its DB functions.
var burger = require('../models/burger.js')

//Create routes / Setup logic for when required.

//Home page redirect.
router.get("/", function(req, res) {
    res.redirect("/index");
});

router.get("/index", function(req, res){
    burger.selectAll(function(data) {
        var object = { burgers: data };
        console.log(object);
        res.render("index", object);
    });
});

// Create burger
router.post("/burger/create", function(req, res) {
    burger.insertOne(req.body.burger_name, function(){
        res.redirect("/index");
    });
});

//Move / Devour burger
router.put("/burger/eat/:id", function(req, res {
    burger.updateOne(req.params.id, function(){
        res.redirect("/index");
    });
});

// module.exports = router;
