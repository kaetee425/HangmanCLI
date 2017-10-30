var Letter = function(char){
	this.char = char 
	this.isCorrect = false;
};

Letter.prototype.stringify = function(){
	if(this.isCorrect){
		return this.char;
	} else if (isCorrect === " ") {
		return " ";
	} else {
		return "_";
	}
};


module.exports = Letter;