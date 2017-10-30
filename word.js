var Word = function(word){
	this.letters = [];

	for (var i = 0; i < word.length; i++){
		this.letters.push(new Letter(word.charAt(i)));
	};

	this.guessChar = [];
};

Word.prototype.addGuessChar = function(char){
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

Word.prototype.guessArr = function(){
	var guessArr = [];

	for (var i = 0; i < this.letters.length; i++){
		guessArr.push(this.letters[i].stringy())
	}
	return guessArr.join(" ");
};

Word.prototype.hasGuessChar = function(char){
	if (this.guessChar.indexOf(char) === -1){
		return false
	} else {
		return true
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