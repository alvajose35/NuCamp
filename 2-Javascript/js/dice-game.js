function rollDice() {
	let goldCoins = 0;

	for (let i = 0; i < 10; i++){
		const roll = Math.floor(Math.random() * 6) + 1;
		
		alert("Dice value: " + roll);

		if (roll === 1) {
			alert("Game Over");
			break;
		}
		if (roll === 4 && goldCoins > 0) {
			goldCoins--;
			alert("Since you rolled a " + roll + ", one (1) gold coins will be subtracted!\n\nYou have a total of " + goldCoins + " gold coins.");
		}
		if (roll < 5) {
			continue;
		}
		//alert("Congratulations, you win " + roll + " gold coins!");
		goldCoins += roll;
		alert("Congratulations, you win " + roll + " gold coins!\n\nYou have a total of " + goldCoins + " gold coins.");
	}
	alert("Total gold coins: " + goldCoins);
}