// ---- Global Variables ---- //
var playerName = ''; //this stores the user inputted name
var timeRemaining = 0; //this holds the value of the timer
var playerResponse
var answersCorrect = 0;
var round = 0;
//----Quiz questions and answers----//
let questionList = [{
    question:"Which of the following is not a primative data type in JavaScript?",
    answers: ["name","boolean","float", "integer"],
    correct:'a1'
},
{
    question:"Everything contained between these brackets {} is known as?",
    answers: ["a script","a cluster","a code block","a pouch"],
    correct: 'a3'
},
                {
    question:"Which of the following is the correct way to separate different properties when creating an object?",
    answers: ["; (semicolon)","! (exclamation point)","– (dash)",", (comma)"],
    correct: 'a4'
},
                {
    question:"If a case inside of switch condition doesn’t include a break what happens?",
    answers: ["You will hit an error and the code won’t run", 
          "It will ignore that condition and return the default case", 
          "It will execute the code matching that condition and keep executing cases until it does hit a break.", 
          "The sun will explode."],
    correct:'a3'
},
 {
    question:"In dog.sleep() sleep would be considered:",
    answers: ["a method", 
          "a property", 
          "both", 
          "I'm a cat person and refuse to answer."],
    correct:'a3'
}]

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
function testFunction(event){
    console.log("Test Function Success");
    clearInterval(refreshIntervalId);
    
}


//this is the view highsore button as an object
    //it's currrent set to run a test function to test other code
var highScoreButton = document.querySelector("#highScoreViewer");
highScoreButton.addEventListener("click",testFunction);
//this is the input form on the welcome, entering your name launches the quiz
var nameSubmission = document.querySelector(".splash-page");
nameSubmission.addEventListener("submit",startGame)
//event listener for the answer buttons
var quizContentEl = document.querySelector('.question-screen')
quizContentEl.addEventListener("click",answerValidation)


//this checks the answer
function answerValidation (event) {
    var playerResponse = event.srcElement.id;
    var correctAnswer = questionList[round].correct
console.log(round);

    // check if last round = 4
    if (round === 4){
        checkAnswer();
        endGame();
    }

    //check timer > 0
    if (timeRemaining <1){endGame();}

    //check if answer is correct
    function checkAnswer(){
        //if correct
    if (playerResponse === correctAnswer){
        var buttonTurnGreen = document.getElementById(playerResponse).style.backgroundColor="green";
        setTimeout(() => {
            answersCorrect++;
            var resetButtonColor = document.getElementById(playerResponse).style.backgroundColor="";
        }, 250);
    }
        //if wrong
    else {
        var buttonTurnRed = document.getElementById(playerResponse).style.backgroundColor="red";
        setTimeout(() => {
            var resetButtonColor = document.getElementById(playerResponse).style.backgroundColor="";
        }, 300);
    }
}
    checkAnswer()
    nextQuestion()

    //ask next question
    function nextQuestion(){
        round++;
        alexTrebek();
    }
}


//this starts the timer and passes the number of seconds in via argument
var refreshIntervalId = setInterval(countDown,1000);
function countDown(){
    timeRemaining--
    document.getElementById("timerDisplay").innerText=timeRemaining;
}
//this changes question/answer text, it asks the questions
function alexTrebek(){
    var question = document.querySelector(".question-box");
    var answerOne = document.querySelector("#a1");
    var answerTwo = document.querySelector("#a2");
    var answerThree = document.querySelector("#a3");
    var answerFour = document.querySelector("#a4");

    answerOne.innerText = questionList[round].answers[0];
    answerTwo.innerText = questionList[round].answers[1];
    answerThree.innerText = questionList[round].answers[2];
    answerFour.innerText = questionList[round].answers[3];
    question.innerText = questionList[round].question;
}

//this starts the game
function startGame (event){

    event.preventDefault();
    //set player name to input value
    playerName = document.querySelector("input[name='name-entry'").value
    if (!playerName){return false};
    console.log(playerName + " has started a new quiz!")
    timeRemaining = 60; //set timer to x
    countDown(); //starts the timer

    //change to the quiz screen
    screenChanger('question');

    //ask the firstq question
    alexTrebek();
}

function endGame(){
    clearInterval(refreshIntervalId);
    var score = answersCorrect * timeRemaining;
    screenChanger('end');
    alert(playerName + " scored " + score + " points and had " + timeRemaining + "seconds remaining")
}








