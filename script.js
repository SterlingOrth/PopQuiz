// declaring variables in global memory
var startButton = document.getElementById("start-btn")
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById
('question-container')
var timerEl = document.getElementById("timer");
var scoreCheck = document.getElementById("score-check")

var timeLeft = 120;


var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById("answer-buttons")

var timeInterval
// random question placement variable stored in global memory
let shuffleQuestions, currentQuestionIndex


// adding click event listener to begin the game
startButton.addEventListener("click", startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    startNextQuestion()
})

// timer
function setTime() {
    timeInterval = setInterval(function() {
      timerEl.textContent = timeLeft + " seconds remaining";
      timeLeft--;
  
      if (timeLeft === 0) {
        endGame();
         }
  
    }, 1000);
  }

// function to begin the game and start the timer**
function startGame() {
console.log('Its working!');
startButton.classList.add("hide");
setTime();
shuffleQuestions = questions.sort(() => Math.random() - .5);
currentQuestionIndex = 0;
questionContainerElement.classList.remove("hide");
startNextQuestion();
}

// function to advance user to next question
function startNextQuestion() {
    resetState();
displayQuestion(shuffleQuestions[currentQuestionIndex]);
}

function displayQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement('button');
        button.innerText = answer.text
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
            button.addEventListener('click', userChoice);
        answerButtonsElement.appendChild(button);
    })
}

// function to log user choice and return 'correct or incorrect'

function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function userChoice (e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    })
    if (shuffleQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } 
    else {
        clearInterval(timeInterval);
    }
    if (selectedButton.dataset !== correct) {
        timeLeft -= 5;
        scoreCheck.textContent = "Wrong! Lost 5 seconds!"
        // HOW TO CLEAR TEXT!?
            }
    }
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else { 
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('wrong')
    element.classList.remove('wrong')
}

// array of question and answers
// variable array of objects with questions and an answer array with an object for each button
var questions = [
    {
        question: "Will you Choose A, B, C or D... I wonder??",
        answers: [
            {text: "B", correct: true},
            {text: "A", correct: false},
            {text: "C", correct: false},
            {text: "D", correct: false},
        ]
    },
    {
        question: "Will you Choose A, B, C or D... I wonder??",
        answers: [
            {text: "A", correct: true},
            {text: "B", correct: false},
            {text: "C", correct: false},
            {text: "D", correct: false},
        ]
    },
    {
        question: "Will you Choose A, B, C or D... I wonder??",
        answers: [
            {text: "D", correct: true},
            {text: "C", correct: false},
            {text: "B", correct: false},
            {text: "A", correct: false},
        ]
    },
    {
        question: "Will you Choose A, B, C or D... I wonder??",
        answers: [
            {text: "A", correct: true},
            {text: "C", correct: false},
            {text: "D", correct: false},
            {text: "B", correct: false},
        ]
    },
    {
        question: "Will you Choose A, B, C or D... I wonder??",
        answers: [
            {text: "C", correct: true},
            {text: "A", correct: false},
            {text: "B", correct: false},
            {text: "D", correct: false},
        ]
    },
    {
        question: "Will you Choose A, B, C or D... I wonder??",
        answers: [
            {text: "B", correct: true},
            {text: "A", correct: false},
            {text: "D", correct: false},
            {text: "C", correct: false},
        ]
    },
    {
        question: "Will you Choose A, B, C or D... I wonder??",
        answers: [
            {text: "B", correct: true},
            {text: "A", correct: false},
            {text: "D", correct: false},
            {text: "C", correct: false},
        ]
    },
    {
        question: "Will you Choose A, B, C or D... I wonder??",
        answers: [
            {text: "A", correct: true},
            {text: "B", correct: false},
            {text: "C", correct: false},
            {text: "D", correct: false},
        ]
    },
    {
        question: "Will you Choose A, B, C or D... I wonder??",
        answers: [
            {text: "D", correct: true},
            {text: "B", correct: false},
            {text: "A", correct: false},
            {text: "C", correct: false},
        ]
    },
    {
        question: "Will you Choose A, B, C or D... I wonder??",
        answers: [
            {text: "C", correct: true},
            {text: "B", correct: false},
            {text: "D", correct: false},
            {text: "A", correct: false},
        ]
    }
   ]

   if (question.answers === false) {
        var reduceTime;
}
