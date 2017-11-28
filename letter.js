// Variable to take in one letter at a time and call it letter
var Letters = function(letter) {
	this.letter = letter;
	this.display = false;
// Creates the printletter method and applies it to this letter
	this.printLetter = function(guesses) {
// Condition to see if this.letter is correct
		if (guesses.includes(this.letter)) {
			return this.letter;
		}
		else {
		return "_";
		}
	}
}	

module.exports = Letters;

