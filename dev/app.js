let scores, scoreDice, gamePlayer, result;

init();


document.querySelector('.btn-roll').addEventListener('click', () => {
    if (result) {
        let dice = Math.floor(Math.random() * 6) + 1;

        let faceDice = document.querySelector('.face-dice');
        faceDice.style.display = 'block';
        faceDice.src = 'images/dice-' + dice + '.png';

        if (dice !== 1) {
            scoreDice += dice;
            let texteGamePlayer = gamePlayer + 1;
            document.querySelector('#scoreHold-' + texteGamePlayer).textContent = scoreDice;
        } else {
            nextPlayer();
        }
    }

});

document.querySelector('.btn-hold').addEventListener('click', () => {
    if (result) {
        scores[gamePlayer] += scoreDice;

        let texteGamePlayer = gamePlayer + 1;
        document.querySelector('#score-' + texteGamePlayer).textContent = scores[gamePlayer];

        if (scores[gamePlayer] >= 100) {
            document.querySelector('#name-' + texteGamePlayer).textContent = 'Winner!';
            document.querySelector('.face-dice').style.display = 'none';
            document.querySelector('.player-' + texteGamePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + texteGamePlayer + '-panel').classList.remove('active');
            result = false;
        } else {
            nextPlayer();
        }
    }
});

function nextPlayer() {
    //Next player
    gamePlayer === 0 ? gamePlayer = 1 : gamePlayer = 0;
    scoreDice = 0;

    document.getElementById('scoreHold-1').textContent = '0';
    document.getElementById('scoreHold-2').textContent = '0';

    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.player-2-panel').classList.toggle('active');

    //document.querySelector('.player-1-panel').classList.remove('active');
    //document.querySelector('.player-2-panel').classList.add('active');

    document.querySelector('.face-dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    gamePlayer = 0;
    scoreDice = 0;
    result = true;

    document.querySelector('.face-dice').style.display = 'none';



    document.getElementById('score-1').textContent = '0';
    document.getElementById('score-2').textContent = '0';
    document.getElementById('scoreHold-1').textContent = '0';
    document.getElementById('scoreHold-2').textContent = '0';
    document.getElementById('name-1').textContent = 'Player 1';
    document.getElementById('name-2').textContent = 'Player 2';
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-2-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-2-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.add('active');
}