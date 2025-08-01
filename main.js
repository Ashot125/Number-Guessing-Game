 function generateRandomNumber (min,max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored-minCeiled + 1) +minCeiled);

};


function getPlayerGuess() {
    let guess;
    do{
        let input = prompt("Enter a number between 1 and 100:");
        if(input ===null){
            alert("GAME CANCELLED.");
            return null;
        }


        if (input.trim() === "") { 
        alert("Input cannot be empty. Please enter a number.");
        continue; 
       }

        guess =parseInt(input);
    } while (isNaN(guess) || guess < 1 || guess > 100)
  


  return guess;
}



  
function game() {
  let secretNumber = generateRandomNumber(1, 100);
  let attempts = 0;
  let score = 0;
   let guessedNumbers =[];

  while (attempts < 10) {
    let guess;

    do{
        guess=getPlayerGuess();
         if(guess === null){
            alert("Game cancelled by user.");
            return;
    }

    if(guessedNumbers.includes(guess)){
        alert("You already tried this number! Try a different one.");
        guess = undefined;
    }

    }while(guess === undefined);

    guessedNumbers.push(guess);
    attempts++;



   

    if (guess < secretNumber) {
      alert("Too low, try again!");
    } else if (guess > secretNumber) {
      alert("Too high, try again!");
    } else {
      alert("Congrats! You guessed the number!");
      score = 110 - (attempts * 10);
      break;
    }

    attempts++;
  }

  if (attempts === 10&& guessedNumbers[guessedNumbers.length - 1] !== secretNumber) {
    alert("Sorry! You didn't guess the number. The number was " + secretNumber);
  }

  alert("Total attempts: " + attempts);
  alert("Your score: " + score);

}



do {
  game();
} while (confirm("Do you want to play again?"));


