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

const cardArea = document.querySelector('.cardArea');
const cardFront = document.querySelector('#cardFront');
const cardBack = document.querySelector('#cardBack')
const corrButton = document.querySelector('#correct');
const incorrButton = document.querySelector('#incorrect');
const resetButton = document.querySelector('#reset');



cardFront.addEventListener('click', flipFB);
cardBack.addEventListener('click', flipBF);



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



function flipFB () {  //card flips once, but back does not display
    cardFront.style.visibility = 'hidden';
    cardBack.style.visibility = 'visible';
    
}
function flipBF () { 
    cardFront.style.visibility = 'visible';
    cardBack.style.visibility = 'hidden';
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

const card1 = new Card('Professional','PMP', 'What is the OUTPUT of the Develop Project Charter Process?', 'Project Charter');
const card2 = new Card('Professional', 'PMP', 'What is the Triple Constraint?', `1. Scope <br> 2. Schedule <br> 3. Budget <br> (and Quality)`);
const card3 = new Card('Professional', 'PMP', 'What are the 5 Process Groups?', `Initiating<br>Planning<br>Executing<br>Monitoring & Controlling<br>Closing`);
const card4 = new Card('Professional', 'PMP', `TRUE or FALSE <br> Process Groups are the same as Project Phases.`, 'False');



cardFront.innerHTML = card3.question;
cardBack.innerHTML = card3.answer;

