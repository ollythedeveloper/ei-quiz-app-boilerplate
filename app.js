/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      image: <img src="images/capheus.jpg"></img>,
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
      image: URL(images/capheus.jpg),
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
      image: images/capheus.jpg,
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
      question: "Who does Will Gorski have the deepest connection with in his clusters?",
      answers: [
        'Lito Rodriguez',
        'Kala Dandekar',
        'Riley Gunnarsdotir',
        'Wolfgang Bogdanow'
      ],
      correctAnswer: 'Riley Gunnarsdotir'
    },
    {
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

console.log("word");

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

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)