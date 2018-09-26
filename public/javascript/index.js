var api_avatars = [{
    avatars: ["https://avatars.io/twitter/EyeOfJackieChan/medium", "https://avatars.io/twitter/aplusk/medium",
        "https://avatars.io/twitter/lindsaylohan/medium", "https://avatars.io/twitter/Cristiano/medium", "https://avatars.io/twitter/KingJames/medium",
        "https://avatars.io/twitter/neymarjr/medium", "https://avatars.io/twitter/kobebryant/medium", "https://avatars.io/twitter/Ellen_Authentic/medium"],
    avname: ["Jackie Chan", "Ashton Kutcher", "Lindsay Lohan", "Cristiano Ronaldo", "LeBron James", "Neymar Jr", "Kobe Bryant", "Ellen DeGeneres"]
},
];

var tweetArr = [{
    twID: 1,
    twTopic: "random",
    twText: "April 22 is Earth Day. With the combined strength from you, me, and everyone on the planet, we can make a difference in helping save the world. Lets all be Green Heroes!",
    twImage: "https://avatars.io/twitter/EyeOfJackieChan/medium",
    authorID: "Jackie Chan",
    answers: api_avatars[0].avatars,
    choices: api_avatars[0].avname
}, {
    twID: 2,
    twTopic: "random",
    twText: "Every American needs to do a gut check right now, today.  Who are you? Who are we? What do we stand for? What do we stand against?  Who represents us?",
    twImage: "https://avatars.io/twitter/aplusk/medium",
    authorID: "Ashton Kutcher",
    answers: api_avatars[0].avatars,
    choices: api_avatars[0].avname
}, {
    twID: 3,
    twTopic: "random",
    twText: "I can post from twitter only ATM because someone hacked my Instagram page. But this was a great time @Tyga",
    twImage: "https://avatars.io/twitter/lindsaylohan/medium",
    authorID: "Lindsay Lohan",
    answers: api_avatars[0].avatars,
    choices: api_avatars[0].avname
}, {
    twID: 4,
    twTopic: "random",
    twText: "Challenge the rules by making your own. #nikesportswear #nikesportpack @nikesportswear",
    twImage: "https://avatars.io/twitter/Cristiano/medium",
    authorID: "Cristiano Ronaldo",
    answers: api_avatars[0].avatars,
    choices: api_avatars[0].avname
}, {
    twID: 5,
    twTopic: "random",
    twText: "Get it to Juice man!! Some way somehow! He’s a monster",
    twImage: "https://avatars.io/twitter/KingJames/medium",
    authorID: "LeBron James",
    answers: api_avatars[0].avatars,
    choices: api_avatars[0].avname
}, {
    twID: 6,
    twTopic: "random",
    twText: "Nice to meet you .. I'm a big fan !! @KevinHart4real",
    twImage: "https://avatars.io/twitter/neymarjr/medium",
    authorID: "Neymar Jr",
    answers: api_avatars[0].avatars,
    choices: api_avatars[0].avname
}, {
    twID: 7,
    twTopic: "random",
    twText: "WE had to face the Spurs EVERY post season pretty much. Not to mention the first super team in Boston but hey, what do I know",
    twImage: "https://avatars.io/twitter/kobebryant/medium",
    authorID: "Kobe Bryant",
    answers: api_avatars[0].avatars,
    choices: api_avatars[0].avname
}, {
    twID: 8,
    twTopic: "random",
    twText: "Every time I've met Ed Sheeran, the flowers have always changed. But he hasn't.",
    twImage: "https://avatars.io/twitter/Ellen_Authentic/medium",
    authorID: "Ellen DeGeneres",
    answers: api_avatars[0].avatars,
    choices: api_avatars[0].avname
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
    var clickID = this.getAttribute("data-name");
    game.clicked(e, clickID);
    console.log(this);
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
        $('#subcontainer').html("<div class='tweet'>"+"<img src='https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png' class='avatar'>"+
        "<div class='content'>"+tweetArr[game.qIndex].twText+
        "</div>"+"<i class='time'>17m</i>"+"</div>");
        for (var i = 0; i < tweetArr.length; i++) {
            $('#subcontainer').append('<button class="button1" id="button-' + i + '" data-name="'
                + tweetArr[game.qIndex].choices[i] + '">' + '<img src='
                + tweetArr[game.qIndex].answers[i] + '>' +
                tweetArr[game.qIndex].choices[i] + '</button>' + '\n');
        }
    },

    nextQ: function () {
        game.qIndex++;
        game.loadQ();
    },

    clicked: function (e, clickID) {
        if (clickID == tweetArr[game.qIndex].authorID) {
            game.rightAns();
        } else {
            game.wrongAns();
        }
    },
    rightAns: function () {
        // console.log("right");
        game.correct++;
        $('#subcontainer').html('<h2> CORRECT!</h2>');
        if (game.qIndex == tweetArr.length - 1) {
            setTimeout(game.results, 1 * 1000);
        } else {
            setTimeout(game.nextQ, 1 * 1000);
        }
    },
    wrongAns: function () {
        // console.log("Wrong");
        game.incorrect++;
        $('#subcontainer').html('<h2> WRONG ANSWER! </h2>');
        if (game.currentTweet == tweetArr.length - 1) {
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