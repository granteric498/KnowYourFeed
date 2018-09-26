require("dotenv").config();

var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(express.static("public"));

require("./routes/html")(app);
require("./routes/author-api")(app);
// require("./routes/post-api")(app);
// require("./public/javascript/app.1.js")(app);

// db.sequelize.sync({
//   force: true
// }).then(function () {
//   app.listen(PORT, function () {
//     console.log("App listening on PORT " + PORT);
//   });
// });

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});