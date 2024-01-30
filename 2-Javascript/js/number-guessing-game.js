function runGame() {

	//Declare variables
	const target = Math.floor(Math.random() * 100) + 1;
	let guessString = "";
	let guessNumber = 0;
	let correct = false;
	let numTries = 0;
	let guessArr = [];
	let playAgain = false;

	//Console log the random number
	console.log (target);

	//Main game loop
	do {

		//Ask user for a guess
		guessString = prompt("I'm thinking of a number in the range 1 to 100.\n\nYour previous guesses: " + guessArr.join(" || ") + "\n\nWhat is the number?");

		//Add guess to array
		console.log(guessString);
		guessArr.push(guessString);

		//Check to see if 'Cancel' was pressed
		if (guessString == null) {
			let conf = false;
			conf = confirm("Are you sure you want to exit the game?");
			if (conf) {
				return;
			}
			else {
				guessArr.pop();
				numTries--;
			}
		}

		//Update the number of tried guesses
		numTries += 1;

		//Validate and check the input function
		guessNumber = +guessString;
		correct	= checkGuess(guessNumber, target);

	} while (!correct);

	//Game won prompt
	alert("You got it!! The number was " + target + ".\n\nIt took you " + numTries + " tries to guess correctly.\n\nYour previous guesses: " + guessArr.join(" || "));

	//Ask player if he wants to play again
	playAgain = confirm("Do you want to play again?");
	playAgain ? runGame() : 0 ;
}

function checkGuess (guessNumber, target) {

	let correct = false;
	
	if (isNaN(guessNumber)) {
		alert("You have not entered a number.\n\nPlease enter a number in the 1-100 range.");
	}
	else if (guessNumber < 1 || guessNumber > 100) {
		alert("Please enter an integer in the 1-100 range.");
	}
	else if (guessNumber > target) {
		alert("Your number is too large!");
	}
	else if (guessNumber < target) {
		alert("Your number is too small!");
	}
	else {
		correct = true;
	}

	return correct;
}
