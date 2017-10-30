var Word = function(word){
	this.letters = [];

	for (var i = 0; i < word.length; i++){
		this.letters.push(new Letter(word.charAt(i)));
	};

	this.guessChar = [];
};

Word.prototype.guessArr = function(char){
	this.guessChar.push(char);

	for (var i = 0; i < letters.length; i++){
		if (this.letters[i].char === char) {
			this.letters[i].isCorrect = true;
		};
	};
};

Word.prototype.hasChar = function(char){
	for (var i = 0; i < this.letters.length; i++){
		if (this.letters[i].char === char){
			return true;
		} else {
			return false;
		}
	};
};

Word.prototype.complete = function(){
	for (var i = 0; i < this.letters.length; i++){
		if (this.letters[i].char != " " && this.letters[i].isCorrect === false ){
			return false
		} else {
			return true
		}
	};
};


module.exports = Word;