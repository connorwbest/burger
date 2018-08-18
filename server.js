var express = require('express');
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 8080;
var app = express();
var exphbs = require('express-handlebars');
var routes = require("./controllers/movies_controller.js");

app.use(express.static("public"));
app.use(routes);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.engine("handlebars", exphbs({defaultLayout: 'main'}));
app.set("view engine", "handlebars");
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  

