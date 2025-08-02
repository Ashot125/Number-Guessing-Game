"use strict";
/**
 * Number Guessing Game- "The Codebreaker Challenge"
 * - A simple game where the player has to guess a number between 1 and 100.
 * - The player has a limited number of attempts to guess the correct number.
 * - The game provides feedback on whether the guess is too high, too low, or correct.
 * - If the player guesses correctly, they win; otherwise, they lose after exhausting their attempts.
 * - The game can be played multiple times.
 * - The player can choose to play again after each game.
 * - The game keeps track of the number of attempts taken to guess the correct number.
 * - The game can be played in a web browser.
 */

// --- INTRO STORY ---
alert(" Welcome to the Codebreaker Challenge!\n\n" +
"The Evil AI has locked the digital core of the planet with a secret shutdown code.\n\n" +
"Your mission is to guess the secret code before the AI takes over the world.\n\n" +
"You have 10 attempts to guess the correct number between 1 and 100.\n\n" +
"Fail and the AI takes over the world!\n\nLet the mind games begin!");


// --- GENERATING RANDOM NUMBERS---
function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
}

// --- Get Valid Number from the User---
function getPlayerGuess(attempt) {
    while (true) {
        const input = prompt(`Attempt ${attempt}/10: Enter a number between 1 and 100:`);
        if (input === null) {
            const giveUp = confirm("Are you sure you want to give up? The AI will take over the world if you do.");
            if (giveUp) return null; // Player chose to give up
            else continue;
        }
        const guess = parseInt(input.trim());
        if (!isNaN(guess) && guess >= 1 && guess <= 100) {
            return guess;
        } else {
            console.log("Invalid input. Please enter a number between 1 and 100.");
        }
    }
}

// --- Check the Guess ---
function checkGuess(guess, target) {
    if (guess < target) return " Too low! The AI laughs at your feeble attempt.";
    if (guess > target) return " Too high! The AI smirks at your misguided guess.";
        return "Direct hit! You have cracked the code!";
}

// --- Main Game Function ---
function calculateScore(attemptsUsed) {
    return Math.max(0, 11 - (attemptsUsed ) * 10); // Calculates score based on attempts used
    // The fewer attempts used, the higher the score
    // Maximum score is 100, minimum is 0
}

// --- GAME LOGIC ---
function game() {
    const secretNumber = generateRandomNumber();
    let attempts = 0;
    const maxAttempts = 10;

    console.log(" Mission started! The AI is on high alert. You have 10 rounds to guess the secret code.");

    while (attempts < maxAttempts) {
        attempts++;
        const guess = getPlayerGuess(attempts);

        if (guess === null) {
            console.log("You have given up! The AI reigns supreme!");
            return;
        }

        const feedback= checkGuess(guess, secretNumber);
        console.log(`Round ${attempts}: You guessed ${guess} - ${guess} - ${feedback}`);

        if (feedback === "Target!") {
            guessedCorrectly = true;
            const score = Math.max(0, (11 - attempts)* 10); // 100 max
            console.log("ACCESS GRANTED! Code matched. AI core neutralized.");
            console.log(`Final Score; ${score} points`);
            console.log(`You used ${attempts} attempt(s) to crack the code.`);
            console.log("You win!");
            return;
        }

        // GAME RESULTS 
        if (attempts === maxAttempts) {
            console.log(`Mission Failed. The correct code was ${secretNumber}.`);
            console.log("You used all 10 attempts.");
            console.log("The AI takes over the world. You lose!");
        }
    }
}

// === Start the game ===
game();