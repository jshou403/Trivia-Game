var game = [
    // question 1 
    {
        q: "Where was Dale Cooper born and raised?",
        o: ["Missouri", "Oregon", "Indiana", "Pennsylvania"],
        a: "Pennsylvania",
        ff: "He was a member of the Boy Scouts and lived in Philadelphia."
    },
    //

    // question 2 
    {
        q: "What is the population of Twin Peaks?",
        o: ["5,021", "5,201", "51,201", "51,101"],
        a: "51,201",
        ff: "ABC executives were allegedly worried that TV shows in rural settings didn't attract viewers, so they added another digit onto the end so the population swelled to 51,201."
    },
    // https://www.vulture.com/2017/05/surprising-twin-peaks-trivia.html

    // question 3 
    {
        q: "What is the name of the hotel Dale stay's at in Twin Peaks?",
        o: ["the Great Falls Lodge", "the Grand Northern Lodge", "the Great Northern Hotel", "Salish Lodge"],
        a: "the Great Northern Hotel",
        ff: ""
    },

    // question 4 
    {
        q: "Who does Dale speak to everyday but we never see?",
        o: ["Laura", "Donna", "Diane", "Bob", "Diane"],
        a: ["Diane"],
        ff: "It's the first word spoken by Dale in the pilot episode."
    },

    // question 5 
    {
        q: "Who invites Icelandic business men to the Great Northern in an attempt to close a deal?",
        o: ["Leo and Bobby", "Jacques and Bernard", "Catherine and Ben", "Ben and Jerry"],
        a: "Ben and Jerry",
        ff: ""
    },

    // question 6
    {
        q: "Who tells Dale that 'the owls are not what they seem'?",
        o: ["Leland", "the Giant", "the Old Man", "the Log Lady"],
        a: "the Giant",
        ff: ""
    },

    // question 7
    {
        q: "What is the popular TV drama everyone watches?",
        o: ["Invitation to Love", "All Tied Up", "Lover's Lane", "Forbidden"],
        a: "Invitation to Love",
        ff: ""
    },

    // question 8
    {
        q: "What kind of bird was present at the murder of Laura Palmer?",
        o: ["Owl", "Bewick's Wren", "Myna", "Parrot"],
        a: "Myna",
        ff: "Bewick's Wren (boo-icks) is the bird in the opening credits of the show. "
    },

    // question 9
    {
        q: "Where did Dr. Jacoby keep the other half of the heart necklace?",
        o: ["In his spice cabinet", "In a coconut", "Under his pillow", "In his wallet"],
        a: "In a coconut",
        ff: ""
    },

    // question 10
    {
        q: "Finish the quote: 'Through the darkness, future past. The magician longs to see. One chants out between two worlds. ____ ____ ____ ____.'",
        o: ["Answer, come to me", "Owls, help me see", "Please, help me see", "Fire, walk with me"],
        a: "Fire, walk with me",
        ff: ""
    },
]

// when page loads - timer div is hidden
$("#timer").hide();

var qIndex = 0;
var winCount = 0;
var lossCount = 0;
var skipCount = 0;

var intervalID;

var clockRunning = false;
var timeLeft = 10;
var lap = 1;

function reset() {
    timeLeft = 10;
    lap = 1;

    // DONE: Change the "display" div to "00:00."
    $("#timer").show();
    $("#timer").append("<div><h4>" + timeLeft + " seconds</h4></div>");
}

function start() {
    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
        intervalId = setInterval(counter, 1000);
        clockRunning = true;
    }
}

function stop() {
    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
}

function counter() {
    console.log(--timeLeft);
    $("#timer").html("<div><h4>" + timeLeft + " seconds</h4></div>");

    if (timeLeft == 0) {
        stop();
        skipCount++;
        resultsPage();
    } 
}

// nextQuestion will reset the timer then start timer
// nextQuestion will replace the question and options
function nextQuestion() {

    $("#subject").empty();
    $("#results").empty();

    // reset timer
    reset();

    // start timer countdown
    start();

    // Display next question
    var question = document.createElement("h2");
    question.innerHTML = game[qIndex].q;
    document.getElementById("subject").appendChild(question);

    // Display options 
    var option1 = document.createElement("button");
    option1.setAttribute("class", "answer-buttons");
    option1.innerHTML = game[qIndex].o[0];
    document.getElementById("results").appendChild(option1);

    var option2 = document.createElement("button");
    option2.setAttribute("class", "answer-buttons");
    option2.innerHTML = game[qIndex].o[1];
    document.getElementById("results").appendChild(option2);

    var option3 = document.createElement("button");
    option3.setAttribute("class", "answer-buttons");
    option3.innerHTML = game[qIndex].o[2];
    document.getElementById("results").appendChild(option3);

    var option4 = document.createElement("button");
    option4.setAttribute("class", "answer-buttons");
    option4.innerHTML = game[qIndex].o[3];
    document.getElementById("results").appendChild(option4);
};

function resultsPage() {

    // test and debug
    console.log("Results page loaded!");

    $("#timer").show();

    // Empty #subject div (question) and #results (answer) div
    $("#subject").empty();
    $("#results").empty();

    // Display correct answer in #subject div
    var answer = document.createElement("h2");
    answer.innerHTML = "The answer is <strong>" + game[qIndex].a + "!</strong>";
    document.getElementById("subject").appendChild(answer);

    // Display fun fact in #results div
    var funfact = document.createElement("p");
    funfact.innerHTML = game[qIndex].ff;
    document.getElementById("results").appendChild(funfact);

    if (qIndex < 0){
        console.log("Game over!"); 

    } else {
        qIndex++;

        setTimeout(nextQuestion, 3000);
    }

    // $("#timer").empty();
}

// when the player starts the game... run the following
// hide rules 
// run nextQuestion()
$("#start-btn").on("click", function () {

    // hide A screen - class=rules
    $(".rules").hide();

    // run nextQuestion which will 
    // display B screen: 
    // id=subject -> questions
    // id=results -> option
    nextQuestion();

    // test and debug
    // console.log("start button pressed");

});

$(document).on("click", ".answer-buttons", function() {

    var userAnswer = $(this).text();
    console.log(userAnswer);

    if (userAnswer == game[qIndex].a) {
        console.log(game[qIndex].a);
    };

    stop();
    resultsPage();

    // test and debug
    console.log("USER CHOSE ANSWER: " + userAnswer);
    console.log("Correct Answer: " + game[qIndex].a);

});