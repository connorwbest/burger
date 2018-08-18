var express = require('express');
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 8080;
var app = express();
var exphbs = require('express-handlebars');
var routes = require("./controllers/movies_controller.js");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.engine("handlebars", exphbs({defaultLayout: 'main'}));
app.set("view engine", "handlebars");

app.use(routes);


app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  

