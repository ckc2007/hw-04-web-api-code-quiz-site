var startButton = document.getElementById("start-btn");
var timeEl = document.getElementById("time");
var secondsLeft;
var highScore = 0;
var timeInt;
var buttonContainerEl = document.querySelector("#button-container");
var questionsAnswered = 0;
var introEl = document.getElementById("intro");
var quizEl = document.getElementById("quiz-container");
var questionEl = document.getElementById("quiz-question");

function setTime() {
  // lollllllll
  secondsLeft = 101;
  timeInt = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if (secondsLeft === 0) {
      // if time runs out - go to the score page
      quizTimeOut();
    }
  }, 1000);
}

// event handler for start button click
startButton.addEventListener("click", function () {
  // hide the intro div
  introEl.classList.add("hide");
  quizEl.classList.remove("hide");
  setNextQuestion();
  setTime();
});

// event handler for answer button clicks
buttonContainerEl.addEventListener("click", function (event) {
  var element = event.target;
  if (element.matches(".btn")) {
    questionsAnswered++;
    //set the value of the button to true or false at time of creating the button element
    if (!element.value) {
      secondsLeft -= 10;
      // this needs to be defined
    }
    if (questionsAnswered === questions.length || secondsLeft <= 0) {
      quizTimeOut();
    } else {
      setNextQuestion();
    }
  }
});

// this handles stopping the time at 0,answered all questions given, or - time negative, going to score page,
function quizTimeOut() {
  clearInterval(timeInt);
}

var index = 0;
var question = questions[index];

function setNextQuestion(question) {
  // add text to the h2 quiz element
  questionEl.innerText = question.question;
  question.answers.forEach((answer) => {
    var button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    // button.addEventListener("click", clickAnswerBtn);
    buttonContainerEl.appendChild(button);
  });
}

// what happens upon the click on the button?
// need to display a message : correct! or wrong!
// need to go to the next question...
function clickAnswerBtn() {}

// lets make a randomizer!!!

// create the questions
const questions = [
  {
    question: "Which is NOT a primitive data type?",
    answers: [
      { text: "string", correct: false },
      { text: "boolean", correct: false },
      { text: "number", correct: false },
      { text: "object", correct: true },
    ],
  },
  {
    question: "Which is NOT a way to declare a variable?",
    answers: [
      { text: "var", correct: false },
      { text: "let", correct: false },
      { text: "const", correct: false },
      { text: "mkdir", correct: true },
    ],
  },
  {
    question:
      "Which array method does NOT modify the original array in JavaScript?",
    answers: [
      { text: "slice()", correct: true },
      { text: "reverse()", correct: false },
      { text: "unshift()", correct: false },
      { text: "splice()", correct: false },
    ],
  },
  {
    question: 'What is returned by console.log(22 + "2")?',
    answers: [
      { text: "24", correct: false },
      { text: "the string 222", correct: true },
      { text: "the number 222", correct: false },
      { text: '22 + "22"', correct: false },
    ],
  },
];
