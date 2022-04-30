// ---- Global Variables ---- //
var playerName = ''; //this stores the user inputted name
var timeRemaining = 120; //this holds the value of the timer
var answersCorrect = 0;

//different main screen sections
var welcomeScreen = document.getElementsByClassName('welcome-screen')[0].style;
var questionScreen = document.getElementsByClassName('question-screen')[0].style;
var endGameScreen = document.getElementsByClassName('end-game-screen')[0].style;
var highScoreScreen = document.getElementsByClassName('high-score-screen')[0].style;
//this changes the displays one screen and hides the others
function screenChanger(screenName){
    welcomeScreen.display = 'none';
    questionScreen.display = 'none';
    endGameScreen.display = 'none';
    highScoreScreen.display = 'none';

    switch (screenName){
        case "question":
            questionScreen.display = 'flex';
            break;
        case "end":
            endGameScreen.display = 'flex';
            break;
        case "scores":
            highscoreScoreScreen.display = 'flex';
            break;
        default:
        welcomeScreen.display = 'flex';
    }
}

//this is my dummy test function to throw into new code to make sure it works
function testFunction(){
    // console.log("Test Function Success");
    // console.log(timeRemaining);
    timerCountdown(10);
}


//this is the view highsore button as an object
    //it's currrent set to run a test function to test other code
var highScoreButton = document.querySelector("#highScoreViewer");
highScoreButton.addEventListener("click",testFunction);

//this starts the timer and passes the number of seconds in via argument
function timerCountdown(num){
  timeRemaining=num;
    setInterval(countDown,1000);
    function countDown(){
        timeRemaining--
        document.getElementById("timerDisplay").innerText=timeRemaining;
    }
}






//----Quiz questions and answers----//
let questionList = [{
    question:"Which of the following is not a data type in JavaScript?",
    answers: ["name","boolean","float", "integer"],
    correct:0
},
{
    question:"Everything contained between these brackets {} is known as?",
    answers: ["a script","a cluster","a code block","a pouch"],
    correct: 2
},
                {
    question:"Which of the following is the correct way to separate different properties when creating an object?",
    answers: ["; (semicolon)","! (exclamation point)","– (dash)",", (comma)"],
    correct: 3
},
                {
    question:"If a case inside of switch condition doesn’t include a break what happens?",
    answers: ["You will hit an error and the code won’t run", 
          "It will ignore that condition and return the default case", 
          "It will execute the code matching that condition and keep executing cases until it does hit a break.", 
          "The sun will explode."],
    correct:2
},
 {
    question:"If a case inside of switch condition doesn’t include a break what happens?",
    answers: ["You will hit an error and the code won’t run", 
          "It will ignore that condition and return the default case", 
          "It will execute the code matching that condition and keep executing cases until it does hit a break.", 
          "The sun will explode."],
    correct:2
}               

]	