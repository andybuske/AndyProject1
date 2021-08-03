# AndyProject1

## DESCRIPTION  
This _Flashcard_ game will help someone who is studying for their Project Management Professional [exam].
  * It is based on the _[PMBOK Guide]: Fifth Edition_
  * It focuses on the Process Groups and Knowledge Areas that are essential material to know for the exam


## ORIENTATION

![Screen shot of the game layout at the start](https://github.com/andybuske/AndyProject1/blob/main/Screen_shot-Initial1.png) 

  * The two possible decks are listed, each with their own button.
  * The Category and Deck Name are displayed above the card.
  * Front of card (question) is shown with a blue card outline and is displayed large centered on the card.
  * Back of card is initially hidden.  Once clicked, the back of the card (answer) is shown with a red outline and is displayed smaller in the upper left corner of the card.
  * The number of **Cards Remaining** is displayed below the cards.
  * User can select whether they got the answer Correct or Incorrect.
  * User can skip forward or backward to cards they haven't yet gotten Correct.


## GAME PLAY
The deck automatically displays a blank card when the page is loaded.  
  You can flip the card or skip forward/back without impacting game play (UX).
You simply click one of the Deck buttons at the top to load a deck and begin playing. 
Once you answer the question, click anywhere on the card to flip it to the back side to see the answer.
  * If you got it right, click the _Correct_ button.  You will not see this card again.
  * If you got it wrong, click the _Incorrect_ button.  You will see this card again at the end.

You are able to Skip a card (forward or backward), **but only if you _haven't_ yet seen the back of the card**.  
  Once you see the back of the card, the _Skip_ buttons are disabled and you must choose either _Correct_ or _Incorrect_.

Once you have successfully answered all of the questions, you will get an alert.
![Alert that displays at the end of the game](https://github.com/andybuske/AndyProject1/blob/main/Screen_shot-DoneAlert.png)

The Alert states how many cards you got wrong.


## FEATURES
   
### Features Completed
*  Define front vs. back of card
*  Show front & hide back of card (and vice versa)
*  User clicks card to toggle between front & back
*  _Correct_ button: remove card from deck and go to next card
*  _Incorrect_ button: move card to the back of the deck and go to next card
*  Show progress of game
*  Red/Green buttons (for UX)
*  _Skip_ functionality
*  Display score at the end
*  _Reset_ button

### Future Features
*  Multiple decks pre-loaded
*  Fancy fonts
*  Background images for cards
*  Keyboard controls
*  Add your own Decks and Cards
*  Get Deck from an API
*  Animated flip
*  Show questions on the back, as well
*  Question can be an image
*  Move Incorrect card to random place in the deck


## Technologies Used
* Visual Studio Code: code with HTML, CSS & JavaScript
* FireFox Developer Tools: debug code
* GitHub Pages: deploy my page
* Command Line: manage repos and perform change control



[exam]: https://www.pmi.org/certifications/project-management-pmp 
[PMBOK Guide]: https://www.amazon.com/Guide-Project-Management-Knowledge-PMBOK®/dp/1935589679
