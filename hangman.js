var Words = require("./word.js");
var inquirer = require("inquirer");

var tries;

var WORDS_ARRAY = ["Whale", "dolphin", "squid", "octopus"];

inquirer.prompt ([
  {
    type: "input",
    message: "Press any key to start!",
    name: "start"
  }
]).then(function(response) {
	var word = WORDS_ARRAY[Math.floor(Math.random() * WORDS_ARRAY.length)];
	console.log(word);
	// Words(theWord);
    Words(word);
});
