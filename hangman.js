// let katie = ['j', ' ', 'p', 'a', 'r', 'k']

// let guessArr = [' ', ' ', 'p' ,' ', 'r', 'k']


// iterate through the array and check if katie and guessArr have matching indexes
// if match then show the letter, if not then show "_"

var inquirer = require("inquirer");

 ranWord = ["computers"]
// ranWord = random word generator 
 //guessLetterArray = [....]

missLetters = 0;


function Word(letters){
	this.correctLetters = function(){
		console.log("hi!");
		for (var i = 0; i < ranWord.length; i ++){
			if (letter === ranWord[i]){
				guessLetterArray[i] = letter;

			}
			else {
				missLetters++;
				console.log("error!");
			}
		}
	}
}

function Letters(){
    this.initialize = function(){
    	for(var i = 0; i < ranWord.length; i++){
    		guessLetterArray[i] = '_';
    	}
    }
}

Word.prototype.printInfo = function() {
	
}

inquirer.prompt ([
	{
		name: "guess",
		message: "Guess a letter!"
	},

]).then(function(guessLetter){
	var newWord = new Word(guessLetter);

});

