/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let score, activePlayer,roundScore,gamePlaying,prevDice;

initial();
//console.log(dice);
//document.querySelector('#current-'+activePlayer).innerHTML = '<em>'+ dice +'</em>';

document.querySelector('.btn-roll').addEventListener('click', function(){
if(gamePlaying){
    var dice=Math.floor(Math.random()*6)+1;
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-'+dice+'.png';

    if(prevDice===dice){
        nextPlayer();
    }else if(dice !== 1){
        roundScore += dice;
        document.querySelector('#current-'+activePlayer).textContent = roundScore;
       // console.log('from roll '+activePlayer);
    }else{
        score[activePlayer] = 0;
        document.querySelector('#score-'+activePlayer).textContent = score[activePlayer];
        nextPlayer();
    }
    prevDice = dice;
}
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
    score[activePlayer] += roundScore;
    scoreDOM = document.querySelector('#score-'+activePlayer);
    scoreDOM.textContent = score[activePlayer];

    if(score[activePlayer] >= 20){
        document.querySelector('#name-'+activePlayer).textContent = "WINNER!";
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        document.querySelector('.dice').style.display = 'none';
        gamePlaying = false;
    }else{
        nextPlayer();
    }
}
});

function nextPlayer(){
    activePlayer == 0? activePlayer++ : activePlayer--;
        roundScore = 0;
        document.getElementById('current-0').textContent = 0;
        document.getElementById('current-1').textContent = 0;
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', function(){
    //console.log(activePlayer);
    document.querySelector('#name-'+activePlayer).textContent = "PLAYER "+ (activePlayer+1);
    document.querySelector('.player-'+activePlayer+'-panel').classList.remove('winner');
    document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    initial();
});

function initial(){
    score=[0,0];
    roundScore=0;
    activePlayer=0;
    gamePlaying = true;
    prevDice = 0;
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
}