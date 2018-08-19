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
		if (scores[activePlayer] > 99){
		scores[activePlayer] = 'You Win!';
		document.querySelector('#score-' + activePlayer).style.fontSize = "79px";
		document.querySelector('.btn-roll').style.display = 'none';
		document.querySelector('.btn-hold').style.display = 'none';
		}
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
	document.querySelector('.player-1-panel').classList.toggle('active');
	document.querySelector('.player-0-panel').classList.toggle('active');
}



document.querySelector('.btn-new').addEventListener('click', function(){
	scores = [0,0];
	roundScore = [0,0];
	activePlayer = 0;
	document.querySelector('.player-0-panel').classList.add('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('#score-' + activePlayer).style.fontSize = "81px";
	document.querySelector('.btn-roll').style.display = 'block';
	document.querySelector('.btn-hold').style.display = 'block';
	diceImg.style.display = 'none';
	document.querySelector('#score-0').textContent = '0';
	document.querySelector('#score-1').textContent = '0';
	document.querySelector('#current-0').textContent = '0';
	document.querySelector('#current-1').textContent = '0';
});








