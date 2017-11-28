var Words = require("./word.js");
var inquirer = require("inquirer");

var displayview = "";
var guessesLeft = 15;
var WORDS_ARRAY = ["Whale", "dolphin", "squid", "octopus"];
var word = WORDS_ARRAY[Math.floor(Math.random() * WORDS_ARRAY.length)];


var playGame = function() {

    Words(word);

  if (guessesLeft > 0) {
    console.log("Guesses left: " +  guessesLeft);

    inquirer.prompt([
        {
          message: "Guess a letter",
          name: "letter"
        }
      ]).then(function(response) {
          console.log(response.letter);
          guessesLeft--;
          playGame();  
        
      })
    } 

   else {
    console.log("No more guesses");
   }  
  };  

playGame();

