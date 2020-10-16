// declaring variables in global memory
var startButton = document.getElementById("start-btn")
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById
('question-container')

var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById("answer-buttons")

// random question placement variable stored in global memory
let shuffleQuestions, currentQuestionIndex


// adding click event listener to begin the game
startButton.addEventListener("click", startGame)

// function to begin the game and start the timer**
function startGame() {
console.log('Its working!')
startButton.classList.add("hide")
shuffleQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
questionContainerElement.classList.remove("hide")
startNextQuestion()
}

// function to advance user to next question
function startNextQuestion() {
    resetState()
displayQuestion(shuffleQuestions[currentQuestionIndex])
}

function displayQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
            button.addEventListener('click', userChoice)
        answerButtonsElement.appendChild(button)
    })
}

// function to log user choice and return 'correct or incorrect'

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)

    }
}

function userChoice (e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    nextButton.classList.remove('hide')
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
            {text: "Correct answer", correct: true},
            {text: "False #1", correct: false},
            {text: "False #2", correct: false},
            {text: "False #3", correct: false},
        ]
    }
]








// Variables to count correct answers 
// var timer = 

// document.getElementById("#button")

// setInterval(function(){ alert("Hello"); }, 3000);




// // Sample
// var correctAnswer = 0;

// // For loop to register correct guesses
// for(var i=0: i < questionList.length; i++)
//     var userChoice = window.question(questionList[i].question);
//     if(userChoice === questionList[i].answer){
//         correctAnswer++;
//         alert("You got it Right!")
//     } else {
//         alert("That is why you fail..")
//     }

//     alert("Final Score: " + correctAnswer + "out of " + questionList.length);

// // Display sticky timer that begins "on click" of start 'button'

// // var clear; function stopWatch( ) { // javascript statement here clear = setTimeout( "stopWatch( )", 1000 ); } 
// // Or function stopWatch( ) { // javascript statement here clear = setTimeout( function ( ) { // javascript statement here }, 1000 ); } 
// // Or var stopWatch = function ( ) { // javascript statement here clear = setTimeout( "stopWatch( )", 1000 ); } 

// // Create a welcome page with a clickable 'button' that will advance you to next question
// // This button will also start an internal sticky timer
// // Clear previous and start new object on page with sticky timer
// // First question with 4 clickable 'buttons'
// // If for correct statement Else for false answers and push results to variables 'correct' and 'incorrect'
// // After question 10, return 'correct' and 'incorrect' results,
//  Timer stops on last question click