var scores, roundscore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

var diceImg = document.querySelector('.dice');

diceImg.style.display = 'none';
document.querySelector('#score-0'). textContent = '0';
document.querySelector('#score-1'). textContent = '0';
document.querySelector('#current-0').textContent = '0';
document.querySelector('#current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function(){
	var dice = Math.floor(Math.random() * 6) + 1;
	document.querySelector('#current-' + activePlayer).textContent = dice;
	diceImg.style.display = "block";
	diceImg.src = "dice-" + dice + ".png";
	
	if(dice !== 1){
		scores[activePlayer] = scores[activePlayer] + dice;
	}
	else{
		scores[activePlayer] = 0;
	}

	document.querySelector('#score-' + activePlayer). textContent = scores[activePlayer];

	if(activePlayer === 0 && dice === 1){
		activePlayer = 1;
	}
	else if(activePlayer === 1 && dice === 1){
		activePlayer = 0;
	}

});

document.querySelector('.btn-hold').addEventListener('click', function(){
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

});
