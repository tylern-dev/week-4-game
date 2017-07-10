//game start
	//choose a random starting number show 19-120
	//set player score to 0
	//choose random value for each gem value between 1-12

var wins = 0;
var losses = 0;
var goalAmount;
var goalAmountDisplay;
var score = 0;
var gem;
var gemArray = ['diamond','emerald','amethyst', 'pearl'];
var gemNumber;




function randomNumGen(min, max){
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random()*(max-min)) + min;	
}


function gemButton(){
	$('button').on('click', function(event){
		gemId = event.currentTarget.id;
		gemScore(gemId);
		gameLogic(score)
		$('#score-count').html(score)
	});
		
	
}

function gemScore(buttonId){
	for(var i=0; i<gemArray.length; i++){
		if(buttonId===gemArray[i]){
			console.log('score '+score)
			console.log('gem Number '+gemNumber)
			return score += gemNumber[i];
		}
	}
}

//checks to see if the amount is reached. starts new game
function gameLogic(pScore){
	if(pScore > goalAmount){
		losses += 1;
		$('#status-message').html('You lost!');
		$('#losses-count').html(losses);
		gameStart();
	}
	else if(pScore === goalAmount){
		wins += 1;
		$('#status-message').html('You Won!');
		$('#wins-count').html(wins);
		gameStart();
	}
}

//this function starts the game and should reset the score back to 0 and generates a new number 
function gameStart(){
	// score=0;
	gemNumber = [];
	goalAmount = randomNumGen(19,120)
	
	for(var i = 0; i<4; i++){
		gemNumber.push(randomNumGen(1,12));
	}
	gemButton();

	$('#goal-amount').html(goalAmount);
	$('#score-count').html(score);
}



gameStart()




