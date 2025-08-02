"use strict";

alert(" Welcome to the Codebreaker Challenge!\n\n" +
"The Evil AI has locked the digital core of the planet with a secret shutdown code.\n\n" +
"Your mission is to guess the secret code before the AI takes over the world.\n\n" +
"You have 10 attempts to guess the correct number between 1 and 100.\n\n" +
"Fail and the AI takes over the world!\n\nLet the mind games begin!");

function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function getPlayerGuess(attempt) {
    while (true) {
        const input = prompt(`Attempt ${attempt}/10: Enter a number between 1 and 100:`);
        if (input === null) {
            const giveUp = confirm("Are you sure you want to give up? The AI will take over the world if you do.");
            if (giveUp) return null;
            else continue;
        }
        const guess = parseInt(input.trim());
        if (!isNaN(guess) && guess >= 1 && guess <= 100) {
            return guess;
        } else {
            alert("Invalid input. Please enter a number between 1 and 100.");
        }
    }
}

function checkGuess(guess, correctNumber) {
    if (guess < correctNumber) return "Too low! The AI laughs at your feeble attempt.";
    if (guess > correctNumber) return "Too high! The AI smirks at your misguided guess.";
    return "Correct! You have cracked the code!";
}

function calculateScore(attemptsUsed) {
    return Math.max(0, (11 - attemptsUsed) * 10);
}

function game() {
    const secretNumber = generateRandomNumber();
    let attempts = 0;
    const maxAttempts = 10;

    while (attempts < maxAttempts) {
        attempts++;
        const guess = getPlayerGuess(attempts);

        if (guess === null) {
            alert("You have given up! The AI reigns supreme!");
            return;
        }

        const feedback = checkGuess(guess, secretNumber);
        alert(`Attempt ${attempts}: You guessed ${guess}. ${feedback}`);

        if (feedback.startsWith("Correct!")) {
            const score = calculateScore(attempts);
            alert("ACCESS GRANTED! Code matched. AI core neutralized.\n" +
                  `Final Score: ${score} points\n` +
                  `You used ${attempts} attempt(s) to crack the code.\nYou win!");
            return;
        }
    }

    alert(`Mission Failed. The correct code was ${secretNumber}.\n` +
          "You used all 10 attempts.\nThe AI takes over the world. You lose!");
}

game();