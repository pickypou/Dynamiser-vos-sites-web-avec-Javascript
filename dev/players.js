// ----------------------GAME BOARD CREATION----------------------
const gameBoard = document.createElement('div');
gameBoard.classList.add("gameBoard", "clearfix");

//-----------------------CREATION OF PLAYER 1---------------------------

let playerOne = document.createElement('div');
playerOne.classList.add("player-1-panel", "active");
gameBoard.appendChild(playerOne);
document.body.appendChild(gameBoard);

let playerName = document.createElement('div');
playerName.classList.add("player-Name-1");
playerName.id = 'name-1';
playerName.textContent = "Player-1";
playerOne.appendChild(playerName);


let playerScore = document.createElement('div');
playerScore.classList.add("player-score-1");
playerScore.id = "score-1";
playerScore.textContent = 23;
playerOne.appendChild(playerScore);

let playerCurrentBox = document.createElement('div');
playerCurrentBox.classList.add("player-current-box-1");
playerOne.appendChild(playerCurrentBox);

let playerScoreDice = document.createElement('div');
playerScoreDice.classList.add("player-score-dice-1");
playerScoreDice.textContent = "score dice";
playerCurrentBox.appendChild(playerScoreDice);

let playerScoreHold = document.createElement('div');
playerScoreHold.classList.add("player-score-hold-1");
playerScoreHold.id = 'scoreHold-1'
playerCurrentBox.appendChild(playerScoreHold);

//------------------------------CREATION OF PLAYER 2----------------------------------
let playerTwo = document.createElement('div');
playerTwo.classList.add('player-2-panel');
gameBoard.appendChild(playerTwo);

playerName = document.createElement('div');
playerName.classList.add("player-Name-2");
playerName.id = 'name-2';
playerName.textContent = "Player-2";
playerTwo.appendChild(playerName);


playerScore = document.createElement('div');
playerScore.classList.add("player-score-2");
playerScore.id = "score-2";
playerScore.textContent = 12;
playerTwo.appendChild(playerScore);

playerCurrentBox = document.createElement('div');
playerCurrentBox.classList.add("player-current-box-2");
playerTwo.appendChild(playerCurrentBox);

playerScoreDice = document.createElement('div');
playerScoreDice.classList.add("player-score-dice-2");
playerScoreDice.textContent = "score dice";
playerCurrentBox.appendChild(playerScoreDice);

playerScoreHold = document.createElement('div');
playerScoreHold.classList.add("player-score-hold-2");
playerScoreHold.id = 'scoreHold-2'
playerCurrentBox.appendChild(playerScoreHold);

//--------------------------------GAME BUTTON CREATION---------------------------------
const newParty = document.createElement('button');
newParty.classList.add('btn-new')
gameBoard.appendChild(newParty);

const newPartyText = document.createElement('i');
newPartyText.classList.add("ion-ios-add-circle-outline")
newPartyText.textContent = 'New game';
newParty.appendChild(newPartyText);

const roll = document.createElement('button');
roll.classList.add("btn-roll");
gameBoard.appendChild(roll);

const rollText = document.createElement('i');
rollText.classList.add("ion-ios-refresh");
rollText.textContent = 'Roll dice';
roll.appendChild(rollText);

const hold = document.createElement('button');
hold.classList.add("btn-hold");
gameBoard.appendChild(hold);

const holdText = document.createElement('i');
holdText.classList.add("ion-ios-arrow-up");
holdText.textContent = 'Hold';
hold.appendChild(holdText);

//-------------------------------------DICE FACE IMAGES----------------------------
let images = document.createElement('img');
images.classList.add("face-dice");
images.src = "images/dice-5.png";
gameBoard.appendChild(images);