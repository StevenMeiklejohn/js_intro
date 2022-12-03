# Part 3: Control flow, objects & functions

## Overview
   By the end of this part, students should know how to:

   - Use conditional statements and equality operators
   - Use falsy values as conditions
   - Create objects
   - Access properties of an object
   - Add properties to an object
   - Function declarations
   - Return values from functions
   - Call functions with arguments

## I Do

```javascript
// A conditional statement is a set of commands that executes if a specified condition is true
/*

if (condition) {
  statement_1;
} else {
  statement_2;
}

*/

let isRaining = true;
let message = "";

if (isRaining){
  message = "Take an umbrella";
}

console.log(message);

// We can expand this and add an 'else' clause

if (isRaining){
  message = "Take an umbrella";
} else {
  message = "No need for an umbrella";
}

console.log(message);

// And even further with an else if! As many as we need.

const fruitType = 'Apple';

if (fruitType === 'Apple'){
  console.log('Apples are £2.50 per bunch');
} else if (fruitType === 'Orange'){
  console.log('Oranges are £1.50 per kilo');
} else{
  console.log(`Sorry, we have no ${fruitType}s.`);
}

/*

Falsy values
The following values evaluate to false (also known as Falsy values):

- false
- undefined
- null
- 0
- NaN
- an empty string ("")

*/

// Consider the following code. Which line will execute?
// HINT: Remember what the value of an un-assigned variable is?

let isLoggedIn; // undefined

if (isLoggedIn){
  console.log("Welcome back!");
} else {
  console.log("Please log in");
}

// Binary logical operators
// Logical operators are typically used with boolean (logical) values, and when they are, they return a boolean value. We have a logical OR and a logical AND.

// '&&' Logical AND

// '||' Logical OR

// Consider the following code. The number needs to be divisible by 3 AND 5.
let number = 15;

if ( number % 3 === 0 && number % 5 === 0){
  console.log("The number is divisible by 3 and 5");
}

// The number needs to be divisible by 3 OR 5

if ( number % 3 === 0 || number % 5 === 0){
  console.log("The number is divisible by 3 or 5");
}

```


## We Do Together

```javascript
// Task 1
// Given a number, log out if it is greater than or equal to 5

const number = 10;


// Task 2
// Given an array of numbers, log out only the even numbers

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];


// Task 3
// Given a student exam mark, determine whether it is a fail (less than 5), pass (between 5 and 8) or distinction (8 or above)

const mark = 6;
let grade = 'Grade not yet awarded';

```

## I Do

```javascript

// Objects are data structures used to store 'key' and 'value' pairs. We need to
// know the name of the key to find out the value. We use curly brackets to denote
// a new object. Values can be of any type.

const person = {};

// Consider the following code.

const person = {
  name: ['Brendan', 'Eich'],
  age: 62
};

// In this case there are two keys: name and age. To find out the values we use
// the 'dot' notation

person.age // 62

person.name[0] // Brendan

person.name[1] // Eich

// We could even change the name array to be an object which might make more sense

const person = {
  name: {
    first: 'Brendan',
    last: 'Eich'
  },
  age: 62
};

person.name.first // Brendan

// To update a value...

person.age = 63;

// Or we can add a new key/value pair

person.address = '7 Silicon Way';

```

## We Do Together

```javascript
// Task 1
// Create an object that represents your favourite movie. Give it a title, yearOfRelease, director and cast.
// Log out the title and year in the format "Jurassic Park was released in 1993"


// Task 2
// Loop round the cast members and log out their names


// Task 3
// Add a new key/value pair called ratings where the value is an object with 2 keys of critics and audience.


// Task 4
// Log out the audience rating


// Task 5
// A common data structure is an array of objects. Log out Silvia's score and push on a new player.

const players = [
  { name: 'Pablo', score: 10 },
  { name: 'Silvia', score: 98 },
  { name: 'Meena', score: 106 }
]

```

## I Do

```javascript

//Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is a set of statements that performs a task or calculates a value. It should take some input and return an output where there is some obvious relationship between the input and the output.

// Defining a function
function square(number) {
  return number * number;
}

// Invoking (calling) functions
console.log(square(5)); // 25
console.log(square(3)); // 9

// More than one argument

function getUserDetails(firstName, lastName, email){
  const userDetails = `Name: ${firstName} ${lastName}, Email: ${email}`
  return userDetails;
}

getUserDetails() // 'Name: undefined undefined Email: undefined'
getUserDetails("Keith", "D", "me@gmail.com") // 'Name: Keith D, Email: me@gmail.com'

```

## We Do Together

```javascript
// Task 1
// Declare a function called 'multiply' that takes an input of two numbers and returns those numbers multiplied together
function multiply( num1, num2 ){
  return num1 * num2;
}

// Task 2
// Declare a function called sumArray that takes an array as an argument and returns the total of all the values in that array
function sumArray(arr){
  let total = 0;
  for (let n of arr) {
    total += n;
  }
  return total;
}

let numbers = [2, 6, 1, 3, 9, 15];
sumArray(numbers); // 36

// Task 3
// Declare a function that takes input of a number and an array and returns true if the array contains that number and false if it doesn't

function containsValue(num, arr){
  for (let n of arr) {
    if (n === num) {
      return true;
      // the function will end here
    }
  }
  return false;
}

// Call the function
containsValue(3, [1, 2, 3]); // true
containsValue(5, [1, 2, 3]); // false

// Task 4
// Remember how an object can have anything as a value? Add a function to the person object that returns a string in the format "Brendan Eich is 62 yrs old"

const person = {
  name: {
    first: 'Brendan',
    last: 'Eich'
  },
  age: 62,
  getDetails: function() {
    return `${this.name.first} ${this.name.last} is ${this.age} yrs old`;
  }
};

person.getDetails() // 'Brendan Eich is 62 yrs old'

```

## You Do In Pairs

Move on to the [exercises/part_3_exercises.js](../exercises/part_3_exercises.js)
