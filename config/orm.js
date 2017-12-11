var connection = require("/connection");

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

// In the orm.js file, create the methods that will execute the necessary MySQL
// commands in the controllers. These are the methods you will need to use in order
//  to retrieve and store data in your database.
//
// selectAll()
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
    insertOne: function(table, col, nBurger, callback) {
        var sqlInsertOne = "INSERT INTO ?? (??) VALUES (?)";
            connection.query(sqlInsertOne,[table, col, nBurger], function(err, data){
                                if (err) throw err;

                                console.log(nBurger + "added to table");
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
        };
// app.listen(port);


module.exports = orm;
// Export the ORM object in module.exports.
