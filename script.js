const gridItems= document.querySelectorAll('.grid-item');
const active = document.querySelector('.active');
var modal = document.querySelector('.modal');
const removeModal = document.querySelector('.fa-solid');
const scoreDisplay = document.getElementById('score')


// don't need load function 
// get score for current card after it has been answered
// get total score at the end of game
// black out question after it has been answered 
// All I need to do is get the value of the submited answer and whether
// the value was correct or not then add that value to the score 
// keep score by keeping track of the correct answers and the values 
// card company - upload voice to sound like a chipmonk / really slow to 
// sound like trace adkins
// put your face into an emoji
// put your video into a book or tv  -- my little shi** emojis
// I think I I can keep function like it is except I just need it to run
// once on each card and move down through the column

 

const jeopardyCategories = [
    {
        genre: 'SPORTS',
        questions: [
            {
                question: 'Who wrote the Harry Potter books?',
                answers: ['JK Rowling', 'JRR Tolkien'],
                correct: 'JK Rowling',
                level: 'easy',
            },
            {
                question: 'Who was born on Krypton',
                answers: ['Aquaman', 'Superman'],
                correct: 'Superman',
                level: 'medium',
            },
            {
                question: 'Who designed the first car?',
                answers: ['Karl Benz', 'Henry Ford'],
                correct: 'Karl Benz',
                level: 'hard',
            },
        ],
    },
    {
        genre: 'SCIENCE',
        questions: [
            {
                question: 'Where is Buckingham Palace?',
                answers: ['Richmond', 'London'],
                correct: 'London',
                level: 'easy',
            },
            {
                question: 'Where is the Colosseum',
                answers: ['Rome', 'Milan'],
                correct: 'Rome',
                level: 'medium',
            },
            {
                question: 'Where is Mount Kilimanjaro',
                answers: ['Zimbabwe', 'Tanzania'],
                correct: 'Tanzania',
                level: 'hard', 
            }, 
        ],    
    },
    {
        genre: 'HISTORY',
        questions: [
            {
                question: 'When is Christmas?',
                answers: ['30th Dec', '24th/25th Dec'],
                correct: '24th/25th Dec',
                level: 'easy',
            },
            {
                question: 'When was JFK Shot?',
                answers: ['1963', '1961'],
                correct: '1963',
                level: 'hard',
            },
            {
                question: 'When was WW2?',
                answers: ['1932', '1941'],
                correct: '1941',
                level: 'medium',
            },
        ],
    },
    {
        genre: 'FOOD',
        questions: [
            {
                question: 'What is the capital of Saudi Arabia?',
                answers: ['Jeddah', 'Riyadh'],
                correct: 'Riyadh',
                level: 'hard',
            },
            {
                question: 'What do Koalas eat?',
                answers: ['Straw', 'Eucalyptus'],
                correct: 'Eucalyptus',
                level: 'medium',
            },
            {
                question: 'What is a kg short for',
                answers: ['Kilojoule', 'Kilogram'],
                correct: 'Kilogram',
                level: 'easy',
            },
        ],
    },
    {
        genre: 'MUSIC',
        questions: [
            {
                question: 'How many players in a football team?',
                answers: ['15', '11'],
                correct: '11',
                level: 'easy',
            },
            {
                question: 'How many seconds in an hour?',
                answers: ['36000', '3600'],
                correct: '3600',
                level: 'medium',
            },
            {
                question: 'How many people in China?',
                answers: ['1.1 bil', '1.4 bil'],
                correct: '1.4 bil',
                level: 'hard',
            },
        ],
    },
      {
            genre: 'ART',
            questions: [
                {
                    question: 'What is the capital of Saudi Arabia?',
                    answers: ['Jeddah', 'Riyadh'],
                    correct: 'Riyadh',
                    level: 'hard',
                },
                {
                    question: 'What do Koalas eat?',
                    answers: ['Straw', 'Eucalyptus'],
                    correct: 'Eucalyptus',
                    level: 'medium',
                },
                {
                    question: 'What is a kg short for',
                    answers: ['Kilojoule', 'Kilogram'],
                    correct: 'Kilogram',
                    level: 'easy',
                },
            ],
        },
] 



gridItems.forEach(gridItem => {
    gridItem.addEventListener('click', () => {
        removeActiveClasses()
        addQuest()
    })
})


function removeActiveClasses() {
    gridItems.forEach(gridItem => {
        gridItem.classList.remove('active')
    })
}


removeModal.addEventListener('click', () => {
    modal.classList.remove('active');
})  


  function addQuest() {
      questions.forEach(question => {
        modal.setAttribute('data-question', question.question)
        modal.setAttribute('data-answer-1', question.answers[0])
        modal.setAttribute('data-answer-2', question.answers[1])
        modal.setAttribute('data-correct', question.correct)
        modal.setAttribute('data-value', modal.getInnerHTML())
      })
    }

/*jeopardyCategories.forEach(modal.innerHTML = questions.question); */
/*
let score = 0

function addCategory(category) {
    // Adds the title column
    const column = document.createElement('div')
    column.classList.add('genre-column')

    const genreTitle = document.createElement('div')
    genreTitle.classList.add('genre-title')
    genreTitle.innerHTML = category.genre

    column.appendChild(genreTitle)
    game.append(column)

    // Adds the question cards
    category.questions.forEach(question => {
        const card = document.createElement('div')
        card.classList.add('card')
        column.append(card)

        // displays points on cards
        if (question.level === 'easy') {
            card.innerHTML = 100
        }
        if (question.level === 'medium') {
            card.innerHTML = 200
        }
        if (question.level === 'hard') {
            card.innerHTML = 300
        }

        // gets all card information
        card.setAttribute('data-question', question.question)
        card.setAttribute('data-answer-1', question.answers[0])
        card.setAttribute('data-answer-2', question.answers[1])
        card.setAttribute('data-correct', question.correct)
        card.setAttribute('data-value', card.getInnerHTML())

        card.addEventListener('click', flipCard)
    })
}

// Loops through the jeopardyCategories array & addCategories function
jeopardyCategories.forEach(category => addCategory(category))

function flipCard() {
    this.innerHTML = ''
    this.style.fontSize = '15px'
    this.style.lineHeight = '30px'
    // creates the backside of the card
    const textDisplay = document.createElement('div')
    textDisplay.classList.add('card-text') 
    textDisplay.innerHTML = this.getAttribute('data-question')
    const firstButton = document.createElement('button')
    const secondButton = document.createElement('button')

    // creates the answer buttons
    firstButton.classList.add('first-button')
    secondButton.classList.add('second-button')
    firstButton.innerHTML = this.getAttribute("data-answer-1")
    secondButton.innerHTML = this.getAttribute("data-answer-2")
    firstButton.addEventListener('click', getResult)
    secondButton.addEventListener('click', getResult)
    this.append(textDisplay, firstButton, secondButton)

    // disables the option to click multiple cards at once
    const allCards = Array.from(document.querySelectorAll('.card'))
    allCards.forEach(card => card.removeEventListener('click', flipCard))
}
*/

/*
let score = 0

function addCategory(category) {
    // Adds the title column
    const column = document.createElement('div')
    column.classList.add('genre-column')

    const genreTitle = document.createElement('div')
    genreTitle.classList.add('genre-title')
    genreTitle.innerHTML = category.genre

    column.appendChild(genreTitle)
    game.append(column)

    
    category.questions.forEach(question => {
        const card = document.createElement('div')
        card.classList.add('card')
        column.append(card)

       
        if (question.level === 'easy') {
            card.innerHTML = 100
        }
        if (question.level === 'medium') {
            card.innerHTML = 200
        }
        if (question.level === 'hard') {
            card.innerHTML = 300
        }

        // gets all card information
        modal.setAttribute('data-question', question.question)
        modal.setAttribute('data-answer-1', question.answers[0])
        modal.setAttribute('data-answer-2', question.answers[1])
        modal.setAttribute('data-correct', question.correct)
        modal.setAttribute('data-value', modal.getInnerHTML())

        modal.addEventListener('click', flipCard)
    })
}

// Loops through the jeopardyCategories array & addCategories function
jeopardyCategories.forEach(category => addCategory(category))

function flipCard() {
    this.innerHTML = ''
    this.style.fontSize = '15px'
    this.style.lineHeight = '30px'
    // creates the backside of the card
    const textDisplay = document.createElement('div')
    textDisplay.classList.add('card-text') 
    textDisplay.innerHTML = this.getAttribute('data-question')
    const firstButton = document.createElement('button')
    const secondButton = document.createElement('button')

    // creates the answer buttons
    firstButton.classList.add('first-button')
    secondButton.classList.add('second-button')
    firstButton.innerHTML = this.getAttribute("data-answer-1")
    secondButton.innerHTML = this.getAttribute("data-answer-2")
    firstButton.addEventListener('click', getResult)
    secondButton.addEventListener('click', getResult)
    this.append(textDisplay, firstButton, secondButton)

    // disables the option to click multiple cards at once
    const allCards = Array.from(document.querySelectorAll('.modal'))
    allCards.forEach(modal => modal.removeEventListener('click', flipCard))
}

function getResult() {
    const allCards = Array.from(document.querySelectorAll('.modal'))
    allCards.forEach((modal) => modal.addEventListener('click', flipCard))

    const cardOfButton = this.parentElement

    // adds correct response value to score
    if (cardOfButton.getAttribute('data-correct') == this.innerHTML) {
        score = score + parseInt(cardOfButton.getAttribute('data-value'))
        scoreDisplay.innerHTML = score
        cardOfButton.classList.add('correct-answer')

        // removes children (all info on card) last to first
        setTimeout(() => {
            while (cardOfButton.firstChild) {
                cardOfButton.removeChild(cardOfButton.lastChild)
            }
            cardOfButton.innerHTML = cardOfButton.getAttribute('data-value')
        }, 100)
    } else {
        cardOfButton.classList.add('wrong-answer')
        setTimeout(() => {
            while (cardOfButton.firstChild) {
                cardOfButton.removeChild(cardOfButton.lastChild)
            }
            cardOfButton.innerHTML = 0
        }, 100)
    }
    // allows to select the next card
    cardOfButton.removeEventListener('click', flipCard)
} */

/*
function getQuestions() {
    let output = '';
    questions.forEach((question, index) => {

    });
} */



// Solutions

/*   logQuestions: function(){
            this.question.forEach(question => {
                console.log(question);
            })
        }  */
