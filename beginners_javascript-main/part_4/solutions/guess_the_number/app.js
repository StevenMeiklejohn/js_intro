const prompt = require("prompt-sync")();
const randomNumber = 45;
// const randomNumber = Math.floor(Math.random() * 100) + 1;
const NUMBER_OF_GUESSES = 10;

const name = prompt("What is your name? ");

console.log(`Greetings ${name}! I've chosen a number between 1 and 100. You have 10 chances to guess correctly.`);

const previousGuesses = [];

while(true){

    if (previousGuesses.length >= NUMBER_OF_GUESSES) {
        console.log('You lose!');
        break; // Exit from the while loop
    }

    let userGuess = prompt("Enter a guess: ");

    userGuess = Number(userGuess);
    previousGuesses.push(userGuess);
  
    if (userGuess === randomNumber) {
        console.log("You win!");                        
        break; // Exit from the while loop
    } else if (userGuess < randomNumber){
        console.log("Too low");
    } else if (userGuess > randomNumber){
        console.log("Too high");
    }
    console.log(`Previous guesses: ${previousGuesses}`);
    console.log("---------------------------------");
}
