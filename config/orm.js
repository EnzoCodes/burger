var connection = require("./connection");

var orm = {
    selectAll: function(table, callback) {
        var sqlSelAll = "SELECT * FROM ??";
            connection.query(sqlSelAll, [table], function(err, data){
                if (err) throw err;

                callback(data);
                // res.render("index", { burgers: data });
            });
        },
    // insertOne()
    insertOne: function(table, col, newBurger, callback) {
        var sqlInsertOne = "INSERT INTO ?? (??) VALUES (?)";
            connection.query(sqlInsertOne,[table, col, newBurger], function(err, data){
                                if (err) throw err;

                                console.log(newBurger + "added to table");
                                callback(data);
                            });
    },
    // updateOne()
    updateOne: function(table, col, id, callback) {
        var sqlUpdateOne = "UPDATE ?? SET devoured = ? WHERE id = ?";
            connection.query(sqlUpdateOne, [table, col, id], function(err, results) {
                if (err) {
                    return res.status(500).end();
                } else if (results.changedRows == 0) {
                    return res.status(404).end();
                } else {
                    console.log(id + 'has been devoured!')
                    callback(results);
                    // res.status(200).end();
                }
            });
        }
};
// app.listen(port);


module.exports = orm;
// Export the ORM object in module.exports.
