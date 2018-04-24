var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars")
var mysql = require("mysql");
var PORT = process.env.PORT || 8000;

var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use('/',routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "Password",
    database: "burgers_db"
})

