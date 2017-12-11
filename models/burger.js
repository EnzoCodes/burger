var orm = require("../config/orm");

var burger = {

    selectAll: function(callback){
        orm.selectAll("burgers", function(res){
            callback(res);
        });
    },

    insertOne: function(burger_name, values, callback){
        orm.insertOne("burgers", "burger_name", burger_name, function(res){
            callback(res);
        });
    },

    updateOne: function(id, condition, callback){
        orm.updateOne("burgers", id, function(res){
            callback(res);
        });
    }

};
// Also inside burger.js, create the code that will call the ORM functions
// using burger specific input for the ORM.


module.exports = burger;
