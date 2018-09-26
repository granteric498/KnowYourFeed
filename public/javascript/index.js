var api_avatars = [{
    avatars: ["https://avatars.io/twitter/justinbieber/medium", "https://avatars.io/twitter/VancityReynolds/medium",
        "https://avatars.io/twitter/mindykaling/medium", "https://avatars.io/twitter/kanyewest/medium", "https://avatars.io/twitter/donaldtrump/medium",
        "https://avatars.io/twitter/JCrossover/medium", "https://avatars.io/twitter/kobebryant/medium", "https://avatars.io/twitter/steviesovak/medium"],
    avname: ["Justin Bieber", "Ryan Reynolds", "Mindy Kaling", "Kanye West", "Dhruv", "Chum", "Grant", "Steven"]
},
];

var tweetArr = [{
    twID: 1,
    twTopic: "random",
    twText: "I'd walk through a fire for my daughter...",
    twImage: "https://avatars.io/twitter/VancityReynolds/medium",
    authorID: "Ryan Reynolds",
    answers: api_avatars[0],
    choices: api_avatars[1]
}, {
    twID: 2,
    twTopic: "random",
    twText: "Why is rhode island nor a road...",
    twImage: "https://avatars.io/twitter/justinbieber/medium",
    authorID: "Justin Bieber",
    answers: api_avatars[0],
    choices: api_avatars[1]
}, {
    twID: 3,
    twTopic: "random",
    twText: "My head is too heavy",
    twImage: "https://avatars.io/twitter/mindykaling/medium",
    authorID: "Mindy Kaling",
    answers: api_avatars[0],
    choices: api_avatars[1]
}, {
    twID: 4,
    twTopic: "random",
    twText: "BILL COSBY INNOCENT",
    twImage: "https://avatars.io/twitter/kanyewest/medium",
    authorID: "Kanye West",
    answers: api_avatars[0],
    choices: api_avatars[1]
}, {
    twID: 5,
    twTopic: "random",
    twText: "Lorem Dipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
    twImage: "https://avatars.io/twitter/donaldtrump/medium",
    authorID: "Dhruv",
    answers: api_avatars[0],
    choices: api_avatars[1]
}, {
    twID: 6,
    twTopic: "random",
    twText: "Lorem Cipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
    twImage: "https://avatars.io/twitter/JCrossover/medium",
    authorID: "Chum",
    answers: api_avatars[0],
    choices: api_avatars[1]
}, {
}, {
    twID: 7,
    twTopic: "random",
    twText: "Lorem Gipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
    twImage: "https://avatars.io/twitter/kobebryant/medium",
    authorID: "Grant",
    answers: api_avatars[0],
    choices: api_avatars[1]
}, {
    twID: 8,
    twTopic: "random",
    twText: "Lorem Sipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
    twImage: "https://avatars.io/twitter/steviesovak/medium",
    authorID: "Steven",
    answers: api_avatars[0],
    choices: api_avatars[1]
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
    game.qIndex = 0;
    game.correct = 0;
    game.incorrect = 0;
    game.loadQ();
})

// OBJECT CONTAINING THE GAME FUNCTIONS //
var game = {
    qIndex: 0,
    correct: 0,
    incorrect: 0,
    loadQ: function () {
        $('#subcontainer').append("<h2>" + tweetArr[game.qIndex].twText + "</h2>");
        for (var i = 0; i < tweetArr.length; i++) {
            $('#subcontainer').append('<button class="button1" id="button-' + i + '" data-name="' 
            + tweetArr[game.qIndex].choices[i] + '" height=50 width=50>' + '<img src=' 
            + tweetArr[game.qIndex].answers[i] + '>' + tweetArr[game.qIndex].choices[i] 
            + '</button>' + '\n');

        }
    },
    nextQ: function () {
        game.qIndex++;
        game.loadQ();
    },
    clicked: function (e) {
        if ($(e.target).data("name") == tweetArr[game.qIndex].authorID) {
            game.rightAns();
        } else {
            game.wrongAns();
        }
    },
    rightAns: function () {
        // console.log("right");
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
        game.incorrect++;
        $('#subcontainer').html('<h2> WRONG ANSWER!</h2>');
        if (game.qIndex == tweetArr.length - 1) {
            setTimeout(game.results, 1 * 1000);
        } else {
            setTimeout(game.nextQ, 1 * 1000);
        }
    },
    results: function () {
        $('#subcontainer').html('<h3> Game Completed! </h3>');
        $('#subcontainer').append('<h3>Correct Answers: ' + game.correct + ' Wrong Answers: ' + game.incorrect + ' </h3><br>');
        if (game.correct > game.incorrect) {
            $('#subcontainer').append('<h3>WINNER!!! </h3>');
            $('#subcontainer').append("<button class='button2' id='reset'>RESTART</button>");
            $('#subcontainer').append("<div style='width:50%;height:0;padding-bottom:25%;position:relative;'><iframe src='https://giphy.com/embed/3o7TKVH7nbfCVgzaBq' width='100%' height='100%' style='position:absolute' frameBorder='0' class='giphy-embed' allowFullScreen></iframe></div><p><a href='https://giphy.com/gifs/adultswim-3o7TKVH7nbfCVgzaBq'>via GIPHY</a></p>");
        } else {
            $('#subcontainer').append('<h3>YOU LOSE... </h3><br><h4>Try Again.</h4>');
            $('#subcontainer').append("<button class='button2' id='reset'>RESTART</button>");
        }
    }
}