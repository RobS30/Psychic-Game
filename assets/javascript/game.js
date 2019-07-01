// array to hold all possible comp choices
var compChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

// variable declarations and initialization
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var playerGuesses = [];
var playerGuess
var compGuess

//functions

var generateNewCompLetter = function () {
  compGuess = compChoices[Math.floor(Math.random() * compChoices.length)];
  console.log("No cheating :)");
  console.log(compGuess);
  }

  //function to add missed letters to webpage
  var updatePlayerGuesses = function() {
    document.querySelector("#playerGuesses").innerHTML = "Your Guesses so far:" + " " + playerGuesses.join(", ");
  };

  //function to restart the game
  var restart = function() {
    guessesLeft = 10;
    playerGuesses = [];
    updatePlayerGuesses();
    generateNewCompLetter();
  }  

//generate computer letter on opening web page
generateNewCompLetter();

// run function when user presses key
document.onkeyup = function(event) {
  var playerGuess = event.key;
  console.log(event.key); //shows the key the user pressed

    if (playerGuess === compGuess) {
      alert("impressive!");
      wins ++;
      document.querySelector("#winsCounter").innerHTML = "Wins:" + " " + wins;
      restart();
    } else if (playerGuess !== compGuess) {
      guessesLeft --;
      document.querySelector("#guessesLeft").innerHTML = "Guesses Left:" + " " + guessesLeft;
      playerGuesses.push(playerGuess);
      updatePlayerGuesses();
    } if (guessesLeft === 0) {
        updatePlayerGuesses();
        losses ++;
        document.querySelector("#lossesCounter").innerHTML = "Losses:" + " " + losses;
        alert("Lets try this again!  I'm thinking of a new letter.  Press any letter to continue.");
        restart();
    }
  }
  


  // add a function for guesses left