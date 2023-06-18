const gamePattern = [];

const userClickedPattern = [];

const buttonColours = ["red", "blue", "green", "yellow"];

var simonButton = $("button");

var userChosenColour = null;

var gameRound = 0;

var roundStarted = false;

/* ---------- GAME START EVENT LISTENER ---------- */

//$(document).on("keydown", nextSequence);

function nextSequence() {
	gameRound++;
	$("#level-title").text("LEVEL " + gameRound);
	setTimeout(gameLoop, 300);
	roundStarted = true;
}


/* ---------- BUTTON CLICK EVENT ---------- */


$(document).keydown(function (event) {
	if (roundStarted === true) {
		console.log(userClickedPattern.length + gamePattern.length + ", no new sequence")
	}

	else {

		if (gameOver === true) {
		setTimeout(nextSequence, 500);
		}
		else {
			nextSequence();
		}

		console.log(userClickedPattern.length + gamePattern.length + ", yes new sequence")
	}
})

$(".btn").click(function (event) {
	if (gamePattern.length === 0) {
		userChosenColour = event.target.id;
		buttonBlink(userChosenColour);
	}

	else {
		userChosenColour = event.target.id;
		userClickedPattern.push(userChosenColour);
		buttonBlink(userChosenColour);
		checkAnswer(userClickedPattern.length-1);
		// You were referring to the ITEM in the array instead of a number, which is what got you confused. Instead of doing "length-1" (an integer) you were doing "array[array.length-1]", which doesn't give you the number of the latest item, it gives you that item

	//setTimeout(gameLoop, 300);
	}
})

/* ---------- PATTERN INITIATE FUNCTION ---------- */

function checkAnswer(currentLevel) {
	if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
		console.log(`Current level: ${currentLevel}, Current Pattern Colour: ${gamePattern[currentLevel]}, Full Game Pattern: ${gamePattern}, Last Clicked Colour: ${userClickedPattern[currentLevel]}. Program logged the click as a success.`);
		//userClickedPattern.length = 0;
		if (gamePattern.length === userClickedPattern.length) {
			userClickedPattern.length = 0;
			setTimeout(nextSequence, 300);
		}
	}

	else {
		console.log(`Current level: ${currentLevel}, Current Pattern Colour: ${gamePattern[currentLevel]}, Full Game Pattern: ${gamePattern}, Last Clicked Colour: ${userClickedPattern[currentLevel]}. Program logged the click as a failure.`)
		gameOver();
	}

}



/* ---------- PATTERN INITIATE FUNCTION ---------- */


function gameLoop() {

	$(".btn").animate({opacity: 1});

	var randomNumber = Math.floor(Math.random() * 4);

	var randomChosenColour = buttonColours[randomNumber];

	gamePattern.push(randomChosenColour);

	console.log(randomChosenColour);
	console.log(gamePattern);

	buttonBlink(randomChosenColour);

//	$("button").animate({opacity: 1});

		}

/* ---------- BASIC BUTTON BEHAVIOUR SWITCH STATEMENT ---------- */

function buttonBlink(i) { 

var crash = new Audio('sounds/crash.mp3');
var buttonDing = new Audio('sounds/' + i + '.mp3')

switch (i) {

	case "red":
		buttonDing.play();
		$("#red").toggleClass('pressed');
		setTimeout(function () {$("#red").toggleClass('pressed')}, 300);
		
/*		$("#red").fadeOut(300);
		$("#red").fadeIn(300);*/
		break;

	case "blue":
		buttonDing.play();
		$("#blue").toggleClass('pressed');
		setTimeout(function () {$("#blue").toggleClass('pressed')}, 300);
		break;

	case "green":
		buttonDing.play();
		$("#green").toggleClass('pressed');
		setTimeout(function () {$("#green").toggleClass('pressed')}, 300);
		break;

	case "yellow":
		buttonDing.play();
		$("#yellow").toggleClass('pressed');
		setTimeout(function () {$("#yellow").toggleClass('pressed')}, 300);
		break;

	default: console.log(i);
	}
}

/* ---------- GAME OVER FUNCTION ----------- */

function gameOver() {
	var wrongChoice = new Audio('sounds/wrong.mp3');
	wrongChoice.play();
	$(".btn").animate({opacity: 0.25});
	roundStarted = false;
	$("#level-title").text("GAME OVER! Press a key to play again");
	userClickedPattern.length = 0;
	gamePattern.length = 0;
	gameRound = 0;
}
