require("/connection")(app);


// In the orm.js file, create the methods that will execute the necessary MySQL
// commands in the controllers. These are the methods you will need to use in order
//  to retrieve and store data in your database.
//
// selectAll()
function selectAll(){
    app.get("/", function(req, res) {
        connection.query("SELECT * FROM burgers;", function(err, data){
            if (err) throw err;

            res.render("index", { burgers: data });
        });
    });
}
// insertOne()
function insertOne(){
        app.post("/", function(req, res) {
        connection.query("INSERT INTO burgers (burger_name) VALUES (?);",
        [req.body.burger_name], function(err, data){
            if (err) throw err;

            res.redirect("/");
        });
    });
}
// updateOne()
function updateOne(){
    app.put("/", function(req, res) {
        connection.query("UPDATE burgers SET burger_name = ? WHERE id = ?",
        [req.body.burger_name, req.params.id], function(err, results){
            if (err) {
                return res.status(500).end();
            } else if (results.changedRows == 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
    });
}


// app.listen(port);


module.exports = orm;
// Export the ORM object in module.exports.
