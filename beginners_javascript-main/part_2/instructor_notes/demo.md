# Part 2: Arrays and Loops

## Overview
   By the end of this part, students should know how to:

   - Create an array
   - Create a nested array
   - Find the length of an array
   - Access and modify array items
   - Find items in an array 
   - Add items
   - Remove items
   - Converting between strings and arrays
   - Use a for...of loop
   - Use a while loop
   
## I Do

```javascript
// Creating arrays
const shoppingList = ['Water', 'Chicken', 'Soy Sauce'];
const trees = ['Oak', 'Willow', 'Elm'];

const numbers = [2, 4, 5, 10];

const random = [2, 400, 'Cedar', [2, 4, 6, 8]];

/* ----------------------------------------------------------
   Before proceeding, students can create a few example arrays of their own
---------------------------------------------------------- */

// Find the length of an array
console.log(shoppingList.length);  // 3

// Access and modify array items
console.log(trees[0]); // Oak
console.log(numbers[1]); // 2
console.log(numbers[4]); // undefined

// How would we change 'Chicken' to 'Tofu' in the shoppingList?
shoppingList[1] = 'Tofu';

// How would we change an item in ticTacToe?
ticTacToe[0][2] = 'o';

/* ----------------------------------------------------------
   Before proceeding, students can try accessing and modifying some items
   in their own arrays and getting the length
---------------------------------------------------------- */

// Find items in an array
// If we don't know the index of an item we can use indexOf to find it

console.log(trees.indexOf('Oak')); // 0
console.log(trees.indexOf('Elm')); // 2
console.log(trees.indexOf('Maple')); // -1

const oakIndex = trees.indexOf('Oak');
console.log(trees[oakIndex]);

// We can use it to remove the item
// The first argument says where to start removing items. 
// The second argument says how many items should be removed

trees.splice(oakIndex, 1);
console.log(trees); // ["Willow", "Elm"];

// Add items
shoppingList.push("Pasta", "Milk");

// To add an item to the start of the array, use unshift():
shoppingList.unshift("Cheese", "Oats");

// Remove items
shoppingList.pop();

// Capture the item that was popped off
const lastItem = shoppingList.pop();

// To remove the first item from an array, use shift():
shoppingList.shift();

```


## We Do Together

```javascript
// Given the following array, complete the tasks.

const cities = [ 'Manchester', 'Liverpool', 'Edinburgh', 'Carlisle', 'Birmingham', 'Glasgow' ];

// Task 1
// Log out the length of the cities array
console.log(cities.length);

// Task 2
// Log out the 3rd item of the cities array (Edinburgh)
console.log(cities[2]);

// Task 3
// Update Edinburgh to be 'City of Edinburgh'
cities[2] = "City of Edinburgh";

// Task 4
// Add Dunfermline to the end of the cities array
cities.push("Dunfermline");

// Task 5
// Add Inverness to the beginning of the cities array
cities.unshift("Inverness");

// Task 6
// Remove the first item from the cities array
cities.shift();

// Task 7
// Find the index of Birmingham and save it to a variable
const birminghamIndex = cities.indexOf("Birmingham");

// Task 8
// Remove Birmingham from the cities array
cities.splice(birminghamIndex);
 
```

## I Do

```javascript
// Loops offer a quick and easy way to do something repeatedly

// Accessing every item in an array with a for...of loop
const scores = [10, 20, 30];

for (let value of scores) {
  console.log(value);
}

console.log(scores);

// Totalling up a cryptoPrices array
const cryptoPrices = [2999, 495, 5, 0];
let total = 0;

for (let value of cryptoPrices) {
  total += value; 
}

console.log("Total price:", total);


// While loop executes its statements as long as a specified condition evaluates to true 
let x = 2;

while( x <= 6  ){
  x += 2;
}
console.log(x);

// We can use the break keyword to 'break out' of a while loop

while (true) {
  // this will loop infinitely unless we break
  // useful for games!
  console.log('This will log out once');
  break; // break out of the loop 
}

```

## We Do Together

```javascript

// Task 1
// Use a for..of statement to loop through the cities array and
// log out each city in the format 'I love Carlisle'

for(let city of cities){
    console.log(`I love ${city}`);
}

// Task 3
// Use a while loop to print out the numbers 1 to 10
let count = 1;

while(count <= 10) {
   console.log(count);
   count++;
}
```

## You Do In Pairs

Move on to the [exercises/part_2_exercises.js](../exercises/part_2_exercises.js)