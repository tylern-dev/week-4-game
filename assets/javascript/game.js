//game start
	//choose a random starting number show 19-120
	//set player score to 0
	//choose random value for each gem value between 1-12

var wins = 0;
var losses = 0;
var goalAmount;
var goalAmountDisplay;
var score;
var gem;
var gemArray = ['diamond','emerald','amethyst', 'pearl'];
var gemNumber = [];




function randomNumGen(min, max){
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random()*(max-min)) + min;	
}

function gemButton(){
	$('button').on('click', function(event){
		gem = event.currentTarget.id;
		for(var i=0; i<gemArray.length; i++){
			if(gem===gemArray[i]){
				score += gemNumber[i];
				console.log('score '+score)
			}
		}
		$('#score-count').html(score)
	});
		// console.log('gemButton' +score);
	
}

function gameLogic(pscore){
	if(pscore > goalAmount){
		console.log('score too high')
		$('#status-message').html('You lost!');
		losses++;
		gameStart();
	}
	else if(pscore === goalAmount){
		$('status-message').html('You Won!');
		wins++;
		gameStart()
	}
}

function gameStart(){
	score=0;
	goalAmount = randomNumGen(19,120)
	goalAmountDisplay = $('#goal-amount').html(goalAmount);
	for(var i = 0; i<4; i++){
		gemNumber.push(randomNumGen(1,12));
	}
	gemButton();

}



gameStart()

console.log('gem number'+gemNumber)


