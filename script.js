// console.log ('script is linked');

/*  Pseudo-code
Bronze version:
- **define front content
- **define back content
- **show front of card 1 & hide back of card
- **user clicks card:  hide front of card and show back of card
- user clicks 'correct' button:
    - "remove" card from deck
    - proceed to next card
- user clicks 'incorrect button:
    - place card in the back of the deck
    - proceed to next card



*/
// Query Selectors
const cardArea = document.querySelector('.cardArea');
const cardFront = document.querySelector('#cardFront');
const cardBack = document.querySelector('#cardBack')
const corrButton = document.querySelector('#correct');
const incorrButton = document.querySelector('#incorrect');
const resetButton = document.querySelector('#reset');


// Event Listeners
cardFront.addEventListener('click', flipFB);
cardBack.addEventListener('click', flipBF);
corrButton.addEventListener('click', correct);
incorrButton.addEventListener('click', incorrect);
resetButton.addEventListener('click', reset);


/* testing get flip functionality to work
const fBButton = document.querySelector('#testFront');
const bFButton = document.querySelector('#testBack');

fBButton.addEventListener('click', flipFBTest);
bFButton.addEventListener('click', flipBFTest);

function flipFBTest () {
    cardFront.classList.toggle('visible');
}
function flipBFTest () {
    cardBack.classList.toggle('visible')
}
*/


// Initial conditions
cardBack.style.visibility = 'hidden';

// Setup
let fullDeck = [];   // all Cards initially
let badDeck = [];    // all Cards answered Incorrect


// Functions
function playPmpDeck () {     //specific to PMP Flashcards
    fullDeck = pmpDeck;
    nextCard();
}

// function buildDeck() {       //generic function that can later be used for any Deck
//     for (let i=0; i<fullDeck; i++) {
        
//     }
// }

function flipFB() {  //card flips once, but back does not display
    cardFront.style.visibility = 'hidden';
    cardBack.style.visibility = 'visible';

}
function flipBF() {
    cardFront.style.visibility = 'visible';
    cardBack.style.visibility = 'hidden';
}

function nextCard() {
    if (fullDeck.length > 0) {
        cardFront.innerHTML = fullDeck[0].question;
        cardBack.innerHTML = fullDeck[0].answer;
    }
    else if (fullDeck.length == 0) {
        cardFront.innerHTML = '';
        cardBack.innerHTML = '';
        alert('You are all done!');
    }
}

function correct() {
    fullDeck.shift();
    nextCard();
}

function incorrect() {
    fullDeck[fullDeck.length] = fullDeck[0];
    fullDeck.shift();
    nextCard();
}

function reset() {
    const pmpDeck = [card1,card2,card3,card4,card5,card6,card7,card8,card9];
    playPmpDeck();
}

class Card {
    constructor(category, deck, question, answer, state, frontPic, backPic) {
        this.category = category;
        this.deck = deck;
        this.question = question;
        this.answer = answer;
        this.state = state;
        this.frontPic = frontPic;
        this.backPic = backPic;
    }
}


// Creating Cards
const card1 = new Card('Professional', 'PMP', 'What is the OUTPUT of the Develop Project Charter Process?', 'Project Charter');
const card2 = new Card('Professional', 'PMP', 'What is the Triple Constraint?', `1. Scope <br> 2. Schedule <br> 3. Budget <br> (and Quality)`);
const card3 = new Card('Professional', 'PMP', 'What are the 5 Process Groups?', `Initiating<br>Planning<br>Executing<br>Monitoring & Controlling<br>Closing`);
const card4 = new Card('Professional', 'PMP', `TRUE or FALSE <br> Process Groups are the same as Project Phases.`, 'False');
const card5 = new Card('Professional', 'PMP', 'What are EEFs?', 'Enterprise Environmental Factors');
const card6 = new Card('Professional', 'PMP', 'What are OPAs?', 'Organizational Project Assets');
const card7 = new Card('Professional', 'PMP', 'What are the Processes in the Initiating Process Group?', `Develop Project Charter<br>Identify Stakeholders`);
const card8 = new Card('Professional', 'PMP', 'What are the INPUTS to the Collect Requirements Process?', `Scope Management Plan<br>Requirements Management Plan<br>Stakeholder Management Plan<br>Project Charter<br>Stakeholder Register`);
const card9 = new Card('Professional', 'PMP', 'Project staff assignments and Resource calendars are OUTPUTS of which Process?', 'Acquire Project Team (part of Executing Process Group');

const pmpDeck = [card1,card2,card3,card4,card5,card6,card7,card8,card9];

// cardFront.innerHTML = card8.question;
// cardBack.innerHTML = card8.answer;
playPmpDeck();

