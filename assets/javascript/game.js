//game start
	//choose a random starting number show 19-120
	//set player score to 0
	//choose random value for each gem value between 1-12

var wins = 0;
var losses = 0;
var goalAmount;
var score = 0;
var gemArray = ['diamond','emerald','amethyst', 'pearl'];
var gemNumber;


//generates the random numbers for the game
function randomNumGen(min, max){
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random()*(max-min)) + min;	
}

//sends the score to gameLogic() to see if player is winner or not everytime the button is pressed. Also send gemId to gemScore() to get a point value
function gemButton(){
	$('button').on('click', function(event){
		gemId = event.currentTarget.id;
		gemScore(gemId);
		gameLogic(score)
		$('#score-count').html(score)

	});
}


//receive gemId from gemButton() and and check what button was pressed. It then assigns that button a value from the gemNumber array
function gemScore(buttonId){
	for(var i=0; i<gemArray.length; i++){
		if(buttonId===gemArray[i]){
			score += gemNumber[i];
		}
	}
}


//checks to see if the amount is reached. starts new game.
function gameLogic(pScore){
	if(pScore > goalAmount){
		losses += 1;
		$('#status-message').html('You lost!');
		$('#losses-count').html(losses);
		init();
	}
	else if(pScore === goalAmount){
		wins += 1;
		$('#status-message').html('You Won!');
		$('#wins-count').html(wins);
		init();
	} 
}


//this function starts the game and should reset the score back to 0 and generates a new number 
function init(){
	score=0;
	gemNumber = [];
	goalAmount = randomNumGen(19,120)
	for(var i = 0; i<4; i++){
		gemNumber.push(randomNumGen(1,12));
	}
	$('#goal-amount').html(goalAmount);
	$('#score-count').html(score);
}


function gameStart(){
	init();
	gemButton();
}

gameStart()



