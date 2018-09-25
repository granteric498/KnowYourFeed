// ARRAY OF TWEETS
var tweetArr = [{
    twID: 1,
    twTopic: "random",
    twText: "I'd walk through a fire for my daughter...",
    twImage: "https://avatars.io/twitter/VancityReynolds/medium",
    authorID: "Ryan Reynolds"
}, {
    twID: 2,
    twTopic: "random",
    twText: "Why is rhode island nor a road...",
    twImage: "https://avatars.io/twitter/justinbieber/medium",
    authorID: "Justin Bieber"
}, {
    twID: 3,
    twTopic: "random",
    twText: "My head is too heavy",
    twImage: "https://avatars.io/twitter/mindykaling/medium",
    authorID: "Mindy Kaling"
}, {
    twID: 4,
    twTopic: "random",
    twText: "BILL COSBY INNOCENT",
    twImage: "https://avatars.io/twitter/kanyewest/medium",
    authorID: "Kanye West"
}, {
    twID: 5,
    twTopic: "random",
    twText: "random tweet comment comment comment",
    twImage: "https://avatars.io/twitter/donaldtrump/medium",
    authorID: "Dhruv"
}, {
    twID: 6,
    twTopic: "random",
    twText: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    twImage: "https://avatars.io/twitter/JCrossover/medium",
    authorID: "Chum"
}, {
    twID: 7,
    twTopic: "random",
    twText: "BEE",
    twImage: "https://avatars.io/twitter/kobebryant/medium",
    authorID: "Grant"
}, {
    twID: 8,
    twTopic: "random",
    twText: "C",
    twImage: "https://avatars.io/twitter/steviesovak/medium",
    authorID: "Steven"
}];


// MAIN PROCESS CLICK EVENTS //

$('#start').on('click', function () {
    // Removes the start button and instructions and loads the game
    $('#start').remove();
    $('#instruction').remove();
    game.loadQ();
})

$(document).on('click', '.button1', function (e) {
    // Passes the answer that the user clicks on to function
    game.clicked(e);
})

$(document).on('click', '#reset', function () {
    // Resets the game without reloading the page
    $('#subcontainer').html("<h5 id='counter'> </h5>");
    game.qIndex = 0;
    game.correct = 0;
    game.incorrect = 0;
    game.counter = 15;
    game.loadQ();
})

// OBJECT CONTAINING THE GAME FUNCTIONS //
var game = {
    qIndex: 0,
    counter: 15,
    correct: 0,
    incorrect: 0,
    countdown: function () {
        // game.counter;
        // $('#counter').html(game.counter);
        if (game.counter <= 0) {
            // console.log('Time Up!');
            // game.timesUp();
        }
    },
    loadQ: function () {
        timer = setInterval(game.countdown, 1000);
        $('#subcontainer').html("<h5 id='counter'> </h5>");
        $('#subcontainer').append("<h2>" + tweetArr[game.qIndex].twText + "</h2>");
        for (var i = 0; i < tweetArr.length; i++) {
            $('#subcontainer').append('<button class="button1" id="button-' + i + '" data-name="' + tweetArr[i].authorID + '">' + '<img src=' + tweetArr[i].twImage + '>' + tweetArr[i].authorID + '</button>' + '\n');

        }
    },
    nextQ: function () {
        // game.counter = 15;
        // $('#counter').html(game.counter);
        game.qIndex++;
        game.loadQ();
    },

    timesUp: function () {
        // clearInterval(timer);
        game.incorrect++;
        $('#subcontainer').html('<h2> OUT OF TIME! </h2>');
        if (game.qIndex == questionArr.length - 1) {
            setTimeout(game.results, 1 * 1000);
        } else {
            setTimeout(game.nextQ, 3 * 1000);
        }
    },

    clicked: function (e) {
        clearInterval(timer);
        if ($(e.target).data("name") == tweetArr[game.qIndex].authorID) {
            game.rightAns();
        } else {
            game.wrongAns();
        }
    },
    rightAns: function () {
        // console.log("right");
        clearInterval(timer);
        game.correct++;
        $('#subcontainer').html('<h2> CORRECT!</h2>');
        // $('#subcontainer').append("<img src = "+questionArr[game.qIndex].image+"><p><a href='https://giphy.com/gifs/adultswim-3o7TKVH7nbfCVgzaBq'>via GIPHY</a></p>");
        if (game.qIndex == tweetArr.length - 1) {
            setTimeout(game.results, 1 * 1000);
        } else {
            setTimeout(game.nextQ, 1 * 1000);
        }
    },
    wrongAns: function () {
        // console.log("wrong");
        clearInterval(timer);
        game.incorrect++;
        $('#subcontainer').html('<h2> WRONG ANSWER!</h2>');
        // $('#subcontainer').append('<div style="width:50%;height:0;padding-bottom:30%;position:relative;"><iframe src="https://giphy.com/embed/Lfa0tFqDoHzd6" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/rick-and-morty-sanchez-smith-Lfa0tFqDoHzd6">via GIPHY</a></p>');
        if (game.qIndex == tweetArr.length - 1) {
            setTimeout(game.results, 1 * 1000);
        } else {
            setTimeout(game.nextQ, 1 * 1000);
        }
    },
    results: function () {
        clearInterval(timer);
        $('#subcontainer').html('<h3> Game Completed! </h3>');
        $('#subcontainer').append('<h3>Correct Answers: ' + game.correct + ' Wrong Answers: ' + game.incorrect + ' </h3><br>');
        if (game.correct > game.incorrect) {
            $('#subcontainer').append('<h3>WINNER!!! </h3>');
            $('#subcontainer').append("<button class='button1' id='reset'>RESTART</button>");
            $('#subcontainer').append("<div style='width:50%;height:0;padding-bottom:25%;position:relative;'><iframe src='https://giphy.com/embed/3o7TKVH7nbfCVgzaBq' width='100%' height='100%' style='position:absolute' frameBorder='0' class='giphy-embed' allowFullScreen></iframe></div><p><a href='https://giphy.com/gifs/adultswim-3o7TKVH7nbfCVgzaBq'>via GIPHY</a></p>");
        } else {
            $('#subcontainer').append('<h3>YOU LOSE... </h3><br><h4>Try Again.</h4>');
            $('#subcontainer').append("<button class='button2' id='reset'>RESTART</button>");
            // $('#subcontainer').append("<div style='width:50%;height:0;padding-bottom:25%;position:relative;'><iframe src='https://giphy.com/embed/3o7TKVH7nbfCVgzaBq' width='100%' height='100%' style='position:absolute' frameBorder='0' class='giphy-embed' allowFullScreen></iframe></div><p><a href='https://giphy.com/gifs/adultswim-3o7TKVH7nbfCVgzaBq'>via GIPHY</a></p>");
        }
        // $('#subcontainer').append("<button class='button1' id='reset'>RESTART</button>");
    }
}

// $("#test").on("click",() => {

function getTweet(celebrity) {
    event.preventDefault();

    var params = {
        screen_name: celebrity,
        count: 10
    };

    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            for (var i in tweets) {
                // console.log(tweets[i].text);
                if (tweets[i].favorite_count > 1000 && tweets[i].text.length > 100 && tweets[i].user.verified === true) {
                    // console.log("True");
                    console.log(tweets[i].text);
                } else {
                    console.log(`Favorites/tweets/verified issue`)
                }
                // console.log(tweets[i].favorite_count);
            };
        }
    });
}

$("#submit").on("click", getTweet($("#celebrityInput").val()));

// Make sure we're able to link tweet to tweeter
// tweets[i].user.name

// pull database, push celebs into array 
// run for loop that will that will run get tweet function 

// firebase for scoring