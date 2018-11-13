//we don't want this code to interfere with anyone else's code who may incorporate it, for example
//if they already have eg a q1 variable, so we need to use an IIFE- it doesn't affect how it functions in 
//the browser though
(function() {
//function contructor
function Question(question, answers, correct){
	this.question = question;
	this.answers = answers;
	this.correct = correct;
}

//we want all instances of Question to inherit this method (ie. to be able to display the qs and answers)
//eg. when this method is called on q1, this will point to q1 to find its question 
Question.prototype.displayQuestion = function() {
	console.log(this.question);

	for (var i = 0; i < this.answers.length; i++){
		console.log(i + ' : ' + this.answers[i]);
	}
}

//to check that the answer is correct, we're creating another method
Question.prototype.checkAnswer = function(ans, callback){
	var sc;
	if (ans === this.correct){
		console.log("correct answer!");
		//1) need to pass our keepscore function into this method here to update the score if the answer is correct
		//to do this, we're making use of first class function in JS
		//3) in here we call our function. we call ans with answer below and callback with keepScore
		// we pass in true because this code will only execute if the answer == correct- this means that within keepScore
		// it'll run if(true) { sc++ }- so it'll just add to the score
		// as it's returning something (score, in the score() function), that has to be stored somewhere, which is why we put it in sc 

		sc = callback(true);
	}
	else{
		console.log("wrong answer, try again");
		//4) here we're calling keepScore with false so that if(correct) will be skipped and the score will
		//be returned
		sc = callback(false);
	}
	//5) here we call our function that displays the score
	this.displayScore(sc);
}

//method to display the score
Question.prototype.displayScore = function(score){
	console.log('Your current score is ' + score);
	console.log('--------------');
}


//We store our answers in an array as there are multiple options!
var q1 = new Question('Is JavaScript the coolest programming language?', ['Yes', 'No'], 0);

var q2 = new Question('What is the name of this course\'s teacher?', ['Mark', 'John', 'Jonas'], 2);

var q3 = new Question('What does best describe coding?', ['Boring', 'Hard', 'Fun', 'Mad'], 3);

var qs = [q1, q2, q3];

//this is a function that deals with the score- this is to avoid using global variables
//or having mutated variables all over our code
//closures allow us to maintain access to the variables that the outer function defines so the returned function 
//can still access sc
function score(){
	var sc = 0;
	return function(correct){
		if(correct){
			sc++;
		}
		return sc;
	}
}

//now we have to call this score function and store it so that its returned function is stored in a var
var keepScore = score();

function nextQuestion(){

	
	var n = Math.floor(Math.random() * qs.length);

	qs[n].displayQuestion();

	//prompt will return a string, so we use parseInt to turn it into an int, but we can't do that here
	//as then we can't enter a string to quit the prompt (it'll try to make it an int and error)
	var answer = prompt('Please select the correct answer');

	
	//we only want to check the users answers and move onto the next question if the user hasn't tried to quit
	if(answer !== "quit"){
		//we need to parseInt the answer here to convert it to an integer while still allowing the quit to work
		//2) we not only pass the answer in here, but now also the keepscore var- the var that contains the function
		//and the closure which keeps track of the score
		qs[n].checkAnswer(parseInt(answer), keepScore);
		nextQuestion();
	}

	
}

nextQuestion();

})();





