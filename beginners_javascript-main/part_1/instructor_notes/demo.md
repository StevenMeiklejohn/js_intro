# Part 1: Intro to JavaScript & Programming

## Overview
    This first part is where the students receive an introduction to programming, JavaScript and using VSCode.

    By the end of this part, students should know how to:

    - Create files in VSCode
    - Run a JS file
    - Comment and uncomment
    - Declare a variable
    - Initialise a variable
    - Update a variable
    - Use constants
    - Be aware of different types
        - Numbers and arithmetic
        - Strings (length, toUpperCase(), toLowerCase())
        - Booleans
        - Arrays
        - Objects

## I Do

```javascript
// These two forward slashes tell the JS engine to ignore this line. This is called a comment


// Declaring and initialising at the same time
let emailAddress = "me@gmail.com";
let numberOfLogins = 39;

// Declaring variables
// camelCasing
let myName;
let myAge;

// These variables currently have no value; they are empty containers.

console.log(myName); // undefined

// Try printing a a variable that doesn't exist
console.log(mickeyMouse); // not defined

// A note on error messages. They are useful! It doesn't mean you've broken your computer or anything. Think
// of them like clues for your inner Sherlock Holmes.

// Initialise a variable
myName = "Matt";
myAge = 37;


// Once a variable has been initialized with a value, you can change (or update) that value by giving it a different value.
emailAddress = "me123@gmail.com";

/* You can declare constants. These are like variables, except that:

    - You must initialize them when you declare them
    - You can't assign them a new value after you've initialized them

Rule of thumb: Use const when you can, and use let when you have to.
*/

const animal = "Cat";

animal = "Dog" // TypeError: Assignment to constant variable


// A note about var:
// var was the original way to declare variables but has been superseded in the later versions of JS. We recommend that you use let or const in your code, rather than var.

/* A note on variables names:
Generally, you should stick to just using Latin characters (0-9, a-z, A-Z) and the underscore character. Don't use numbers at the start of variable names.

The convention is to use lowerCamelCase.
*/

// Data Types
// JavaScript is a loosely typed and dynamic language. Variables can be assigned (and re-assigned) values of all types

let foo = 42;    // foo is now a number
foo     = "bar"; // foo is now a string
foo     = true;  // foo is now a boolean

// There are a few different types of data we can store in variables. The main ones are:

/*

- Number
- String
- Boolean
- Array
- Object

*/

// Number: Don't include quotes
let numberOfLikes = 100;

// Add to numberOfLikes
newNumberOfLikes = numberOfLIkes + 20;


// We can use arithmetic operators to manipulate numbers
const total = 100 / 2 * 3 + 9 - 1; // 158

// Modulus
const remainder = 10 % 2; // 0

// Incrementing
let counter = 0;
counter++;
console.log(counter); // 1

// Assignment operators
let highScore = 10;
highScore += 10;
console.log(highScore); // 20

// Or multiply by 10
let totalSavings = 10;
totalSavings *= 10;
console.log(totalSavings); // 100

// String: Single or double quotes or back ticks
const myQuote = 'Now is the summer...';
const email = "me@gmail.com";
const backTickString = `JavaScript is ace!`;

// We have to be careful with apostrophes!
// let str = 'This doesn't seem to be cool!';
str = "It's no problem now";
// Or with back ticks
str = `It's no problem now`;


// Adding Strings together
const firstName = "Lisa";
const lastName = "Simpson";
let fullName = firstName + " " + lastName;

// Template strings
fullName = `${firstName} ${lastName}`;

// String properties and methods. Strings have a collection of
// useful properties and methods
// Finding the length of a string is often very useful
console.log(firstName.length); // 4
console.log("Dogs are cute".length); // 13

// Useful methods are toUpperCase() and toLowerCase();
const albumName = "Wings Of Heaven";
const loudAlbum = albumName.toUpperCase(); // WINGS OF HEAVEN

// Boolean: Generally used as toggles or to control flow
let isLiked = true;
if(isLiked){
    console.log("Someone liked your tweet!");
}

// Array: A list enclosed in square brackets, separated by commas
let favourites = ['Back to the Future', 'China Town', 'Wizard of Oz'];
let lotteryNumbers = [4, 10, 12, 15, 27, 30];

// Object: A set of key/value pairs
let dog = {
    name: 'Archie',
    breed: 'Border Collie'
};

// To retrieve the information stored in the object
console.log(dog.name);
```

## We Do Together

```javascript
// Task 1
// Declare and initialise a variable called myPet and give it the value "Cat"; Note, we might have to to change it later
// to "Dog" so should we use let or const?


// Task 2
// Log out the value of myPet and the length of myPet using a template string


// Task 3
// Declare and initialise a constant called daysInYear with a value of 365


// Task 4
// Declare a variable called monthsInYear with a value of 12
// Declare another variable called averageDaysInMonth with a value of daysInYear divided by monthsInYear
// Log out averageDaysInMonth


// Task 5
// JavaScript has some built in modules that we can use.
// One of them is Math.
// Round averageDaysInYear using Math.round()

// Task 6
// Log out the remainder of 7 / 3

// Task 7
// Generate a random number! (we'll use this later)
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Task 8
// Declare a variable called warningMessage with a value of "danger!"
// Log out the value of warningMessage in uppercase

// Task 9
// Declare a variable called topSnacks with a value of an Array populated with strings

// Task 10
// Declare a variable called shoppingBasket with a value of an Object.
// The keys should be items and the values should be prices

```


## You Do In Pairs

Move on to the [exercises/part_1_exercises.js](../exercises/part_1_exercises.js)
