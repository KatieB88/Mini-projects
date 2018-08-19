var scores, roundscore, activePlayer;

scores = [0,0];
roundScore = [0,0];
activePlayer = 0;

var diceImg = document.querySelector('.dice');

diceImg.style.display = 'none';
document.querySelector('#score-0').textContent = '0';
document.querySelector('#score-1').textContent = '0';
document.querySelector('#current-0').textContent = '0';
document.querySelector('#current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function(){
	var dice = Math.floor(Math.random() * 6) + 1;
	diceImg.style.display = "block";
	diceImg.src = "dice-" + dice + ".png";
	
	if(dice != 1){
		scores[activePlayer] = scores[activePlayer] + dice;
		roundScore[activePlayer] = roundScore[activePlayer] + dice;
	}
	else if (dice == 1){
		scores[activePlayer] = scores[activePlayer] - roundScore[activePlayer];
		
	}
	
	document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
	document.querySelector('#current-' + activePlayer).textContent = roundScore[activePlayer];
	 if (dice == 1){
	 	reset();
	 }

});

document.querySelector('.btn-hold').addEventListener('click', function(){
	reset();
});

function reset(){
	roundScore[activePlayer] = 0;
	document.querySelector('#current-' + activePlayer).textContent = roundScore[activePlayer];
	activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
	count = 0;
}