 // Creates an array that lists out all options (letters which program may select).
    var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    // Randomly chooses a letter from the options array. This is the Computer's guess.
    var computerLetter = "";

    // Creating variables to hold the number of wins, losses, and guesses left (starting at 0, 0, and 9 respectively)
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var wrongLetters = [];

//RESET FUNCTION
function reset (){
    computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerLetter);
    wrongLetters = [];}

    //call RESET function... reset();
reset();
    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key;
      // This checks to make sure the user input is valid.
      if (event.key.toLowerCase().match(/[a-z]/))
       {check(userGuess);}
      };

function check(userGuess) {
  if (guessesLeft > 0) {
        var html = "";
        if (userGuess === computerLetter) {
          wins++;
          html = 
              "<p><strong>You Win!</strong></p>" +
              "<p>The computer choose: " + computerLetter + "</p>" +
              "<p>wins: " + wins + "</p>" +
              "<p>losses: " + losses + "</p>";
          reset();
        } else if (guessesLeft === 1) {
          guessesLeft--;
          losses++;
          html = 
              "<p><strong>You Lose!</strong></p>" +
              "<p>The computer chose: " + computerLetter + "</p>" +
              "<p>wins: " + wins + "</p>" +
              "<p>losses: " + losses + "</p>";
          reset();
        } else {
          guessesLeft--;
          wrongLetters.push(userGuess);
          html = 
              "<p>Guesses left: " + guessesLeft + "</p>" +
              "<p>wins: " + wins + "</p>" +
              "<p>losses: " + losses + "</p>"
              "<p>Your Guesses so far: " + wrongLetters.toString() + "</p>";
          document.getElementById
        }
        document.querySelector("#game").innerHTML = html;
      }
    }