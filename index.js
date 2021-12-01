var readlineSync = require("readline-sync");

var score = 0;

var questions = [{
  question: "What's my favourite map ? ",
  answer: "Erangel"
},
{
  question: "What's my favourite gun ? ",
  answer: "M416"
},
{
  question: "Who is my idol (Jonathan or Scout) ?",
  answer: "Jonathan"
},
{
  question: "What's my role in team (IGL, assaulter, support) ? ",
  answer: "IGL"
},
{
  question: "What's my favourite drop ? ",
  answer: "Severny"
}];

var highScores = [
  {
    name: "Kamran",
    score: 5,
  },

  {
    name: "Akash",
    score: 3,
  },
]

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " to the BGMI quiz");
  console.log("-------------")
  console.log("The Gaming Quiz");
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
  console.log("-------------")
}

function showAnswers() {
  var showAnswers = readlineSync.question("If you want to see answers press 1");
  if (showAnswers ==1){
  questions.map(legitAnswers => console.log(legitAnswers.question, ": ", legitAnswers.answer))
  }
  else {console.log("THANK YOU")}
  console.log("-------------");
}

welcome();
game();
showScores();
showAnswers();