function check() {
  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var correct = 0;
  var timeleft = 30;

  if (question1 == "Darth Vader") {
    correct++;
  }
  if (question2 == "Purple") {
    correct++;
  }
  if (question3 == "All Terrain Armored Transport") {
    correct++;
  }

  document.getElementById("number_correct").innerHTML =
    "you got " + correct + " correct.";
}

var i = 30;

function startTimer() {
  var countdownTimer = setInterval(function() {
    console.log(i);
    i = i - 1;

    if (i <= 0) {
      clearInterval(countdownTimer);
    }
  }, 1000);
}

startTimer();
