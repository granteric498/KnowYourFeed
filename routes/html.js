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

var db = require("../models");

// Array to hold the celebrities' data (Name, Twitter handle, Tweet)
var dataArray = [];
// Array with all celebrities' Twitter handles
var celebrities = [
    // "IMKristenBell",
    // "JonahHill",
    // "AnnaKendrick47",
    // "VancityReynolds",
    // "LeoDiCaprio",
    // "JLdaily",
    // "TomCruise",
    // "WillFerrel",
    // "realjstatham",
    // "TheRock"
    // "meganfox",
    // "AdamSandler",
    // "vindiesel",
    "EyeOfJackieChan",
    "aplusk",
    "lindsaylohan",
    "Cristiano",
    "KingJames",
    "neymarjr",
    "kobebryant",
    "Ellen_Authentic",
    // "KevinHart4real",
    // "JimCarrey",
    // "rickygervais",
    // "rustyrockets",
    // "billmaher",
    // "katyperry",
    // "justinbieber",
    // "rihanna",
    // "taylorswift13",
    // "ArianaGrande",
    // "jtimberlake",
    // "ddlovato",
    // "selenagomez"
];

// Routes
// =============================================================
module.exports = function (app) {

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/title.html"))
        res.sendFile(path.join(__dirname, "../public/index.1.html"));
    });

    app.get("/api/tweets", function (req, res) {
        function getTweets(celebrity) {
            var params = {
                // Celebrity's Screen Name / Twitter handle
                screen_name: celebrity,
                // Grabs the 10 latest tweets on the celebrity's timeline
                count: 10,
            };

            client.get('statuses/user_timeline', params, function (error, tweets, response) {
                if (!error) {
                    for (var i in tweets) {
                        // This line makes sure that the celebrity's tweet had more than 5000 favorites
                        // and the text is greater than 100 characters to count as a significant tweet.
                        if (tweets[i].favorite_count > 5000 && tweets[i].text.length > 100) {
                            dataArray.push({
                                "Name": tweets[i].user.name,
                                "Twitter Handle": tweets[i].user.screen_name,
                                "Tweet": tweets[i].text
                            });
                        };
                    };
                } else {
                    if (error) {
                        throw error
                    };
                };
            });
        };

        // Run for loop for the celebrities we want:
        for (var i in celebrities) {
            getTweets(celebrities[i]);
        };

        // Function takes time for the array to register the data, so we
        // need to run a setTimeout of 250 milliseconds to capture it.
        setTimeout(function () {
            res.json(dataArray);
        }, 500);
    });
};

