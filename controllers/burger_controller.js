var express = require("express");
var router = express.Router();

// Importing burger model to use its DB functions.
var burger = require('../models/burger.js')

//Create routes / Setup logic for when required.

//Home page redirect.
router.get("/", function(req, res){
    burger.selectAll(function(data) {
        var eaten = [];
        var notEaten = [];
        for (var i = 0; i < data.length; i++) {
            if (data[i].devoured) {
                eaten.push(data[i]);
            } else {
                notEaten.push(data[i]);
            }
        }
        res.render("index", { newBurger: notEaten, devoured: eaten });
    });
});

// Create burger
router.post("/create", function(req, res) {
    burger.insertOne(req.body.burger, function(){
        res.redirect("/index");
    });
});

//Move / Devour burger
router.put("/eat/:id", function(req, res) {
    burger.updateOne(req.params.id, function(){
        res.redirect("/");
    });
});

module.exports = router;
