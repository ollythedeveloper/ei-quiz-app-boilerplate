/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      image: "images/capheus2.jpg",
      question: 'Where does Capheus "Van Damn" Onyango live?',
      answers: [
        'Nairobi, Kenya',
        'New York, New York',
        'Lagos, Nigeria',
        'Detroit Michigan'
      ],
      correctAnswer: 'Nairobi, Kenya'
    },
    {
      image: "images/sun.jpg",
      question: 'Sun Bak goes to prison to protect her ______?',
      answers: [
        'mother',
        'father',
        'brother',
        'boyfriend'
      ],
      correctAnswer: 'brother'
    },
    {
      image: "images/wolfgang2.png",
      question: 'Who does Wolfgang Bogdanow fall in love with?',
      answers: [
        'Sun Bak',
        'Nomi Marks',
        'Will Gorski',
        'Kala Dandekar'
      ],
      correctAnswer: 'Kala Dandekar'
    },
    {
      image: "images/kala.jpg",
      question: "What is Kala Dandekar's profession?",
      answers: [
        'teacher',
        'pharmacist',
        'chemist',
        'chef'
      ],
      correctAnswer: 'pharmacist'
    },
    {
      image: "images/lito.jpg",
      question: 'What is Lito Rodriguez hiding from his fans/the public?',
      answers: [
        'a criminal past',
        'his sexual orientation',
        'a secret family',
        'his hobbies'
      ],
      correctAnswer: 'his sexual orientation'
    },
    {
      image: "images/nomi1.jpg",
      question: "Which of her family members does Nomi Marks have the most conflict with?",
      answers: [
        'her mother',
        'her sister',
        'her father',
        'her cousin'
      ],
      correctAnswer: 'her mother'
    },
    {
      image: "images/will.jpg",
      question: "Who does Will Gorski have the deepest connection with in his cluster?",
      answers: [
        'Lito Rodriguez',
        'Kala Dandekar',
        'Riley Gunnarsdotir',
        'Wolfgang Bogdanow'
      ],
      correctAnswer: 'Riley Gunnarsdotir'
    },
    {
      image: "images/riley.jpg",
      question: "Where is Riley Gunnarsdotir from?",
      answers: [
        'London',
        'Iceland',
        'Chicago',
        'San Fransico'
      ],
      correctAnswer: 'Iceland'
    },
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};


/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

var startPage = `
<div class="noBorder">
<img src="images/Sense8.jpg">
<div class="container">
<h2>See how well you know the characters from sense8.<h2>
<button class="push-start"><span class="button-label">Start Quiz</span>
</button></div></div>
`

function questionPage(){
  return  `
<img src=${store.questions[store.questionNumber].image}><div class="group">
 <div class="item"> <p>Question ${store.questionNumber + 1} of 8</p>
 </div>
 <div class="item"><p>Score: ${store.score}</p>
 </div>
 </div>
 <div class="container">
 <form id="js-questions-form">
 <h3>${store.questions[store.questionNumber].question}</h3>
 <input type="radio" name="option" value="${store.questions[store.questionNumber].answers[0]}">
 <label for="ansOpt">${store.questions[store.questionNumber].answers[0]}</label></br>
 <input type="radio" name="option" value="${store.questions[store.questionNumber].answers[1]}">
 <label for="ansOpt">${store.questions[store.questionNumber].answers[1]}</label></br>
 <input type="radio" name="option" value="${store.questions[store.questionNumber].answers[2]}">
 <label for="ansOpt">${store.questions[store.questionNumber].answers[2]}</label></br>
 <input type="radio" name="option" value="${store.questions[store.questionNumber].answers[3]}">
 <label for="ansOpt">${store.questions[store.questionNumber].answers[3]}</label></br>
 <button class="enter-answer"><span class="button-label">Submit</span></button>
 </form></div>
`
}

function correctAnswerPage(){ 
  return `
   <div class="noBorder">
   <div class="group">
   <div class="item"><p>Question ${store.questionNumber + 1} of 8</p> </div>
   <div class="item"><p>Score: ${store.score}</p>
   </div></div>
   <div class="container">
   <h2>That is correct!</h2>
   <button class="next-question"><span class="button-label">Next</span></button>
   </div></div>
`
}

function incorrectAnswerPage(){ 
  return `
   <div class="noBorder">
   <div class="group">
   <div class="item"><p>Question ${store.questionNumber + 1} of 8</p> </div>
   <div class="item"><p>Score: ${store.score}</p>
   </div></div>
   <div class="container">
   <h3>That is incorrect.</h3>
   <h4>The correct answer is: ${store.questions[store.questionNumber].correctAnswer}</h4>
   <button class="next-question"><span class="button-label">Next</span></button>
   </div></div>
`
}

function finalPage(){
  return `
  <div class="noBorder">
  <div class="container">
  <h2>You scored: ${store.score}/8<h2>
  <button class="reset-quiz">Restart Quiz</button>
  </div></div>
  `
}

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store
//This function adds the startPage template to the DOM
function renderStartPage(){
  $("main").append(startPage);
}

//This function clears the noBorder div(emptys the page for the next template)
function clearPage(){
  $(".noBorder").empty();
}

function generateQuestionPage(){
  clearPage();
  $('.noBorder').append(questionPage())
}

function renderCorrectAnswerPage(){
  clearPage();
  $(".noBorder").append(correctAnswerPage())
}

function renderIncorrectAnswerPage(){
  clearPage();
  $(".noBorder").append(incorrectAnswerPage())
}

function renderFinalPage(){
  clearPage();
  $(".noBorder").append(finalPage());
}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

function handleStartQuiz(){
  $('.container').on('click', `.push-start`, event =>{
    clearPage();
    generateQuestionPage();
  })
}

function checkAnswer(ansOpt){
  if (store.questions[store.questionNumber].correctAnswer === ansOpt){
    store.score++;
    console.log('correct')
    renderCorrectAnswerPage();
  }else{
    console.log('incorrect')
    renderIncorrectAnswerPage();
  }
  if (store.questionNumber<7){

  }else{
    renderFinalPage();
  }
}

function handleSubmitAnswer(){
  $('body').on('click', `.enter-answer`, event => {
    event.preventDefault();
    let ansOpt= $("input:checked").val();
    checkAnswer(ansOpt);
  })
}

function handleNextQuestion(){
  $('body').on('click', `.next-question`, event =>{
    event.preventDefault();
    store.questionNumber++;
    generateQuestionPage();
  })
}

function handleRestartQuiz(){
  $('body').on('click', `.reset-quiz`, event=>{
    store.questionNumber=0
    location.reload();
  })
}

function handleQuizApp(){
  renderStartPage();
  handleStartQuiz();
  handleNextQuestion();
  handleSubmitAnswer();
  handleRestartQuiz();
}

$(handleQuizApp)
