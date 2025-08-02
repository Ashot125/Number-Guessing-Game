// === INTRO STORY ===
alert("Welcome to the Guessing Challenge!\n\n" +
  "The Evil AI has locked the digital core of the planet with a secret shutdown code.\n\n" +
  "Your mission is to guess the secret code before the AI takes over the world.\n\n" +
  "You have 10 attempts to guess the correct number between 1 and 100.\n\n" +
  "Fail and the AI takes over the world!\n\nLet the mind games begin!");


// === Generate a random number between 1 and 100 ===
function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

// === Get a valid number guess from the user ===
function getPlayerGuess(attempt) {
  while (true) {
    const input = prompt(`🔐 Attempt ${attempt}/10: Enter a number between 1 and 100:`);

    if (input === null) {
      const giveUp = confirm("Do you want to abandon the mission?");
      if (giveUp) return null;
      else continue;
    }

    const guess = parseInt(input.trim());

    if (!isNaN(guess) && guess >= 1 && guess <= 100) {
      return guess;
    } else {
      console.log("❌ Invalid input. You must enter a number from 1 to 100.");
    }
  }
}

// === Check the guess ===
function checkGuess(guess, correctNumber) {
  if (guess < correctNumber) return "Too low!";
  if (guess > correctNumber) return "Too high!";
  return "Correct!";
}
// === SCORING ====
function calculateScore(attemptsUsed) {
  return Math.max(0, 11 - attemptsUsed) * 10;

}

// === Main Game Function ===
function game() {
  const secretCode = generateRandomNumber();
  let attempts = 0;
  const maxAttempts = 10;

  console.log("🧠 CODEBREAKER INITIATED...");
  console.log("The Evil AI has hidden a shutdown number between 1 and 100.");
  console.log("Crack it within 10 tries to save the world!");

  while (attempts < maxAttempts) {
    attempts++;
    const guess = getPlayerGuess(attempts);

    if (guess === null) {
      console.log("💀 You gave up. The AI wins.");
      return;
    }

    const feedback = checkGuess(guess, secretCode);
    console.log(`🔎 Attempt ${attempts}: You guessed ${guess} — ${feedback}`);

    if (feedback === "Correct!") {
      const score = Math.max(0, (11 - attempts) * 10); // 100 max
      console.log("✅ ACCESS GRANTED! Code matched. AI core neutralized.");
      console.log(`🎯 Final Score: ${score} points`);
      console.log(`📊 You used ${attempts} attempt(s) to crack the code.`);
      console.log("🏆 You win!");
      return;
    }
  }

  // If we get here, player failed after 10 tries
  console.log(`💣 Mission Failed. The correct code was ${secretCode}.`);
  console.log("❌ You used all 10 attempts.");
  console.log("💀 You lost. The AI has taken control...");
}

// === Start the game ===
game();
