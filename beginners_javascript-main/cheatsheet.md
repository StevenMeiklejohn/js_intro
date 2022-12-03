# JavaScript Cheat Sheet

The main documentation for JavaScript can be found <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">here</a>

## Part 1

#### Different types of brackets:

```js
() // These are parentheses. Also called normal brackets

[] // These are square brackets

{} // These are curly brackets

```

#### Printing to the screen:

```js
console.log("Hello world");
```  

#### Variables can be defined with either `let`, `const` or `var`.

```js
let myName = "Brendan";

const speedOfLight = 299792458; // Can't be changed

var highScore = 10; // We prefer to use let or const
```

#### Variable names:

Variable names should be lowerCamelCase. That means they start with a lower-case letter and each subsequent word is capitalised.

Variable names are case-sensitive and must begin with letters, $ or _


#### Primitive data Types

```js
  // string: an immutable string of characters:

  const message = 'Please log in';
  const twitterHandle = "@henry34234";
  const backTickString = `Back ticks rule!`;

  /*
    Note the difference between a variable name and a string.
    A string has quotes surrounding it, a variable name does not.
  */

```
```js

  // number: whole (6, -102) or floating point (3.7653):
  let year = 2022;
  const PI = 3.14;
```
```js
  // boolean: true or false:
  const castRule = true;
  const dogsAreTheBest = false;
```
```js
  // undefined: if no value is given to a variable, it will be undefined
  const thisIsUndefined;
```
```js
  // null: Represents an explicitly empty value.
  var myGreatNovel = null;
```

#### Arithmetic

```js
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

// Generate a random number between 1 and 100!
const randomNumber = Math.floor(Math.random() * 100) + 1;
```

#### String concatenation and Template Strings

```js
// Adding Strings together
const firstName = "Lisa";
const lastName = "Simpson";
let fullName = firstName + " " + lastName;

// Template strings
fullName = `${firstName} ${lastName}`;

// Finding the length of a string is often very useful
console.log(firstName.length); // 4
```
#### Arrays

```js
// Array: A list enclosed in square brackets, separated by commas
let favourites = ['Back to the Future', 'China Town', 'Wizard of Oz'];
let lotteryNumbers = [4, 10, 12, 15, 27, 30];
```

```js
// Find the length of an array
console.log(favourites.length);  // 3

// Access and modify array items
console.log(favourites[0]); // 'Back to the Future'
console.log(lotteryNumbers[1]); // 10
console.log(lotteryNumbers[4]); // 27
```

```js
// Updating elements of an array
// Change China Town to Top Gun
favourites[1] = "Top Gun";
```

```js
// Find items in an array
// If we don't know the index of an item we can use indexOf to find it
const bttfIndex = favourites.indexOf('Back to the Future'); // 0
```

#### Array methods

```js
length // not strictly a method but will return the length of the array
indexOf() // returns the index of a given value
splice() // removes an element given an index and the number of elements to remove
push() // adds an element to the end of the array
pop() // removes an element from the end of the array
unshift() // adds an element to the beginning of the array
shift() // removes an element from the beginning of an array
split() // turns a string into an array
join() // turns an array into a string
```

#### Loops

```js
// Accessing every item in an array with a for...of loop
const scores = [10, 20, 30];

for (let value of scores) {
  console.log(value);
}
```

```js
// Longer form for loop.
// Let's say we want a game character to step forward 5 times

for (let step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log('Walking one step forward');
}
```

```js
// While loop executes its statements as long as a specified condition evaluates to true
let x = 2;

while( x <= 6  ){
  x += 2;
}
console.log(x); // 8


while (true) {
  // this will loop infinitely unless we break
  // useful for games!
  console.log('This will log out once');
  break; // break out of the loop
}
```

#### if/else 

```js
let isRaining = true;
let message = "";

if (isRaining){
  message = "Take an umbrella";
} else {
  message = "No need for umbrella";
}

const fruitType = 'Apple';

if (fruitType === 'Apple'){
  console.log('Apples are £2.50 per bunch');
} else if (fruitType === 'Orange'){
  console.log('Oranges are £1.50 per kilo');
} else{
  console.log(`Sorry, we have no ${fruitType}s.`);
}
```

#### Logical operators

```js
// && Logical AND. Both values must be true
// || Logical OR. Only one value must be true

let number = 15;

if ( number % 3 === 0 && number % 5 === 0){
  console.log("The number is divisible by 3 and 5");
}

// The number needs to be divisible by 3 OR 5

if ( number % 3 === 0 || number % 5 === 0){
  console.log("The number is divisible by 3 or 5");
}

```

#### Falsy values
```js
  // The following values evaluate to false (also known as Falsy values):

- false
- undefined
- null
- 0
- NaN
- an empty string ("")
```

```js
let isLoggedIn; // undefined

if (isLoggedIn){
  console.log("Welcome back!");
} else {
  console.log("Please log in");
}
```


#### Objects

```js
// Object: A set of key/value pairs
let dog = {
    name: 'Archie',
    breed: 'Border Collie'
};

// To retrieve the information stored in the object
console.log(dog.name);

```
```js
// Nested objects

const person = {
  name: {
    first: 'Brendan',
    last: 'Eich'
  },
  age: 62
};

person.name.first  // Brendan
```

#### Functions

```js
// Defining a function
function square(number) {
  return number * number;
}

// Invoking (calling) functions
console.log(square(5)); // 25
console.log(square(3)); // 9
```

```js
// Functions on objects

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


```
