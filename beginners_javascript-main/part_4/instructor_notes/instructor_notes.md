# Part 4: Thinking Like a Programmer

## Overview

One of the hardest things to learn in programming is not the syntax you need to learn, but how to apply it to solve real world problems. You need to start thinking like a programmer — this generally involves: 

    - Looking at descriptions of what your program needs to do
    - Working out what code features are needed to achieve those things
    - ...and how to make them work together


## We Do Together: Guess the Number

Here's the brief our boss has given us:

    Create a simple guess the number type game. It should choose a random number between 1 and 100, then challenge the player to guess the number in 10 turns. After each turn the player should be told whether the guess was too low or too high. It should also tell the player what numbers they previously guessed. The game will end once the player guesses correctly, or once they run out of turns.


### How do we approach this?

First let's create a directory for our app and a file.

```bash
mkdir guess_the_number
cd guess_the_number
touch app.js
```

Typically we'd write down the steps we want in comments in our file. Then we might write some pseudocode before implementing the actual code.

    - Generate a random number between 1 and 100.
    - Record the turn number the player is on. Start at 1.
    - Provide the player with a way to guess what the number is.
    - Once a guess has been submitted first record it somewhere so the user can see their previous guesses.
    - Next, check whether it is the correct number.
    - If it is correct:
        - Display congratulations message.
        - Tell the player it is game over.
    - If it is wrong and the player has turns left:
        - Tell the player they are wrong and whether their guess was too high or too low.
        - Allow them to enter another guess.
        - Increment the turn number by 1.
    - If it is wrong and the player has no turns left:
        - Tell the player it is game over.

Inspired by <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/A_first_splash">A first splash into JavaScript</a> by Mozilla Contributors is licensed under <a href="https://creativecommons.org/licenses/by-sa/2.5/">CC-BY-SA 2.5.</a>

## Before we start: Command Line Prompt

`npm` is a package manager for the JavaScript programming language. Packages are bundles of code that others have written and made available to everyone else. This is called open-source software. `npm` comes bundled when you installed nodejs.

We're going to use a package that makes it easy to capture input from a user for our first game.

```bash
npm install prompt-sync
```

```javascript
// app.js

const prompt = require("prompt-sync")();

const name = prompt("What is your name? ");
console.log(`Greetings ${name}! I've chosen a number between 1 and 100. You have 10 chances to guess correctly.`);
```

Guess the Number solution is in solutions directory.

## You Do

### Task 1: Odd or Even? 

    Create a game that prompts the user to enter a number and then tell the user if the number is odd or even. 

### Task 2: Rock, Paper, Scissors

    Create a terminal based version of rock, paper, scissors. Computer should make a random choice and the user should be able to type in their choice. The winner should be displayed. 