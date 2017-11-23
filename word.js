var Letters = require("./letter.js");

var Words = function(word) {
	this.lettersDisplay = [];
	this.word = word;
	this.letters = this.word.split("");
	console.log(this.letters);
	for (var i = 0; i < this.letters.length; i++) {
    this.lettersDisplay.push("_");

	}
	console.log(this.lettersDisplay);

}




	// this.print_final_string = function(){
	// 	var ret = "";
	// 	for (i=0; i < this.lettrs; i++) {
	// 		ret.append(this.letters[i].displayLetter)
	// 	}
	// 	return ret;
	// }




module.exports = Words;

// var pig = new Words("pig");
// console.log("pig.letters: " + pig.letters);
// console.log("new Letters(pig.letters" + new Letters(pig.letters));
