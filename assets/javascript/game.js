var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var wins = 0;

var losses = 0;

var guessesLeft = 10;

var userGuesses = [];

document.onkeyup = function(event) {

    var userGuess = event.key;

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
		 	

			if (options.indexOf(userGuess) > -1) {

				if (userGuess === computerGuess) {
					wins++;
					guessesLeft = 10;
					userGuesses = [];
				}

				else if (userGuess != computerGuess) {
					guessesLeft --;
                    userGuesses.push(userGuess);

                    if (guessesLeft === 0) {

                        guessesLeft = 10;
                        losses ++;
                        userGuesses = [];
                        
        
                        
                    }
                    
                }


                document.querySelector("#wins").innerHTML = wins;
                document.querySelector("#losses").innerHTML = losses;
                document.querySelector("#guessesleft").innerHTML = guessesLeft;
                document.querySelector("#lettersguessed").innerHTML = userGuesses.join(", ");

			
			}
		};









