require("dotenv").config();

var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 8080;

var Twitter = require('twitter');
// var config = require('./config.js');
// var T = new Twitter(config);
var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

module.exports = client;

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

// function getTweet(celebrity) {
// function getTweet() {
//   // event.preventDefault();

//   var params = {
//     screen_name: "KDTrey5",
//     count: 10,
//   };

//   client.get('statuses/user_timeline', params, function (error, tweets, response) {
//     if (!error) {
//       for (var i in tweets) {
//         // console.log(tweets[i].text);
//         if (tweets[i].favorite_count > 1000 && tweets[i].text.length > 100 && tweets[i].user.verified ===
//           true) {
//           // console.log("True");
//           console.log(tweets[i].text);
//         } else {
//           console.log(`Favorites/tweets/verified issue`)
//         }
//         // console.log(tweets[i].favorite_count);
//       };
//     }
//   });
// }

// getTweet();

// $("#submit").on("click", getTweet($("#celebrityInput").val()));

app.listen(PORT, function () {
  // getTweet();
  console.log("App listening on PORT " + PORT);
});

// app.listen(PORT, getTweet());

