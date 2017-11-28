var Letters = require("./letter.js");

var Words = function(word) {
	this.word = word;
	this.lettersActual = this.word.split("");
// console.log(this.lettersActual);
	this.lettersDisplay = [];

	for (var i = 0; i < this.lettersActual.length; i++) {
    this.lettersDisplay.push(" "+" _ "+" ");

	}
	console.log("The word: " + this.word);
	console.log("The word array: " +  this.lettersActual);
	console.log("\n" + this.lettersDisplay + "\n");

}

module.exports = Words;

// var pig = new Words("pig");
// console.log("pig.letters: " + pig.letters);
// console.log("new Letters(pig.letters" + new Letters(pig.letters));
