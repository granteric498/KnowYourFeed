// Dependencies
// =============================================================
var path = require("path");

var Twitter = require('twitter');
var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

var array = [];

// function getTweets(celebrity) {

// }

// Routes
// =============================================================
module.exports = function (app) {

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.1.html"));
    });

    // app.post("/api/tweets", function (req, res) {
    //     console.log(getTweets("JCrossover"));
    //     array.push(getTweets("JCrossover"));
    // });

    app.get("/api/tweets", function (req, res) {
        // return res.json(array);
        var params = {
            screen_name: "KDTrey5",
            // name: "Kevin Durant",
            count: 10,
        };
    
        client.get('statuses/user_timeline', params, function (error, tweets, response) {
            if (!error) {
                for (var i in tweets) {
                    // This line includes making sure the celebrity is verified.
                    // if (tweets[i].favorite_count > 1000 && tweets[i].text.length > 100 && tweets[i].user.verified === true) {
                    if (tweets[i].favorite_count > 1000 && tweets[i].text.length > 100) {
                        // console.log(tweets[i].text);
                        // console.log(tweets[i].user.name);
                        array.push(tweets[i].user.name, tweets[i].text);

                    } else {
                        // Either the celebrity did not have over 1000 favorites or the tweet wasn't long enough.
                        // console.log(`Favorites/tweets/verified issue`)
                    }
                };
                console.log(array);
                return res.json(array);
            } else {
                console.log(error);
            }
        });
    })
};