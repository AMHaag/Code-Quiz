function testFunction(){
    console.log("Test Function Success");
    console.log(timeRemaining);
    setInterval(timerCountdown,1000)
    
}

var highScoreButton = document.querySelector("#highScoreViewer");

highScoreButton.addEventListener("click",testFunction);

var timeRemaining = 120;

function timerCountdown(){
    timeRemaining--
    document.getElementById("timerDisplay").innerText=timeRemaining;
}

// document.getElementById("timerDisplay").textContent = timeRemaining