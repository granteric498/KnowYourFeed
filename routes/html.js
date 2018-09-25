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

// Routes
// =============================================================
module.exports = function (app) {

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.1.html"));
    });

    app.get("/api/tweets", function (req, res) {
        function getTweets(celebrity) {
            var params = {
                screen_name: celebrity,
                count: 10,
            };

            client.get('statuses/user_timeline', params, function (error, tweets, response) {
                if (!error) {
                    for (var i in tweets) {
                        // This line includes making sure the celebrity is verified.
                        // if (tweets[i].favorite_count > 1000 && tweets[i].text.length > 100 && tweets[i].user.verified === true) {
                        if (tweets[i].favorite_count > 5000 && tweets[i].text.length > 100) {
                            array.push({
                                "Name": tweets[i].user.name,
                                "Twitter Handle": tweets[i].user.screen_name,
                                "Tweet": tweets[i].text
                            });
                        };
                    };
                    // console.log(array);
                    // res.json(array);
                } else {
                    console.log(error);
                };
            });
        };

        // Run the function for the celebrities we want:
        // Needs to be the celebrity's twitter handle
        // getTweets("IMKristenBell");
        // getTweets("JonahHill");
        // getTweets("AnnaKendrick47");
        // getTweets("VancityReynolds");
        // getTweets("LeoDiCaprio");
        // getTweets("JLdaily");
        // getTweets("TomCruise");
        // getTweets("WillFerrel");
        // getTweets("realjstatham");
        // getTweets("TheRock");
        // getTweets("meganfox");
        // getTweets("AdamSandler");
        // getTweets("vindiesel");
        // getTweets("EyeOfJackieChan");
        // getTweets("aplusk");
        // getTweets("lindsaylohan");
        // getTweets("Cristiano");
        // getTweets("KingJames");
        // getTweets("neymarjr");
        // getTweets("kobebryant");
        // getTweets("Ellen_Authentic");
        // getTweets("KevinHart4real");
        // getTweets("JimCarrey");
        // getTweets("rickygervais");
        // getTweets("rustyrockets");
        // getTweets("billmaher");
        // getTweets("katyperry");
        // getTweets("justinbieber");
        // getTweets("rihanna");
        // getTweets("taylorswift13");
        // getTweets("ArianaGrande");
        // getTweets("jtimberlake");
        // getTweets("ddlovato");
        // getTweets("selenagomez");

        // Displays all celebrities' objects on screen.

        // function getAllTweets(callback) {
        //     getTweets("Cristiano");
        //     getTweets("KingJames");
        //     getTweets("neymarjr");
        //     callback();
        // };

        // // Run this function after the getAllTweets is complete
        // function getData() {
        //     res.send(array);
        //     console.log(array);
        // };

        // getAllTweets(getData);
    });
};

