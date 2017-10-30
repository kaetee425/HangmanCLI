var fs = require ("fs")
var inquirer = require("inquirer")

var word = require('./word.js')
var letters = require("./letters.js")

function randomWord() {
	var movieTitles = ["wonder woman", "baby driver", "spiderman homecoming", "planet of the apes", "star wars the last jedi", "justice league", 'jigsaw', "the fate of the furious", "beauty and the beast", "alien convenant", "pirates of the caribbean"]

	var ranNum = Math.floor((Math.random() * movieTitles.length) + 1);
	var ranWord = movieTitles[ranNum - 1];	

	return ranWord;
}
// randomWord();

var guessCount = 10;

function startGame() {
	inquirer
	.prompt([
		{
			name: 'GameTime',
			message: "Do you want to play with me?",
			type: "confirm"
		}
	]).then(function(answer){
			if (answer.GameTime === true){
				var game = randomWord();
				var newWord = new Word (game);
				guessCount = 10;
			} else {
				console.log("You're BORINGGGGG");
			}
	});
};

startGame();

function userGuess(){
	console.log(newWord.print());
	inquirer
	.prompt([
		{
			name: "letter",
			message: 'Pick your poison and guess a letter!',
			type: 'text',
			validate: function(str){
				var alphabets = new RegExp("^[a-zA-Z]+$");
				if (str.length === 1 && str.indexOf(alphabets) !== -1) {
					return true;
				} else {
					"Pick ONE letter! Do you understand what ONE and alphabets?? Sheesh!!!"
				}
			}
		}
	]).then(function(player){
		var letter = player.letter
		newWord.guessArr(letter);

		if (letter.indexOf(guessChar)) {
			console.log("You already guessed this...don't you have another letter to try?")
			guessCount --;
			console.log ("You have " + guessCount + " counts left. Use wisely.")

				if (guessCount === 0){
					console.log("You have no more tries...goodbye")
					startGame();
				}

			userGuess();

		} else if (letter.hasChar) {
			console.log ("Good job...finally you got something right...")
				if (newWord.length === game){
					console.log("You win! Took you long enough.")
					startGame();
				}
			userGuess();
		}

	});
};




