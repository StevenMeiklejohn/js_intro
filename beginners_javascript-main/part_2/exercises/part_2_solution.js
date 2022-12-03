/* -------------------------------------------------------------
EXERCISE 1

Let's start off with some basic array practice. In this exercise we'd like you to create an array of three items,
stored inside a variable called myArray. The items can be anything you want — how about your favourite bands or movies?

Next, modify the first two items in the array using simple bracket notation and assignment.
Then add a new item to the beginning of the array.

Finally, 'pop off' the last item in the array and log it out.
-------------------------------------------------------------- */

const myArray = ["The Departed", "The Life of Brian", "The Irishman"];
myArray[0] = "The Godfather";
myArray[1] = "Lost in Translation";
myArray.unshift("Jurassic Park");
console.log(myArray.pop());

/* -------------------------------------------------------------
EXERCISE 2

Now let's practice removing items from an array.

Using the indexOf() and splice() methods, remove 'Visual Basic' from the programmingLanguages array.

-------------------------------------------------------------- */
const programmingLanguages = [ 'JavaScript', 'Python', 'Java', 'C', 'Visual Basic', 'Go' ];

const ind = programmingLanguages.indexOf('Visual Basic');
programmingLanguages.splice(ind, 1);
console.log(programmingLanguages);


/* -------------------------------------------------------------
EXERCISE 3

Given an array of numbers and an empty array called doubles, use a for loop to iterate through the array,
multiply each number by 2 and push the result onto the doubles array.

-------------------------------------------------------------- */
const numbers = [2, 4, 5, 7];
const doubles = [];

for(let num of numbers){
    doubles.push(num * 2);
}

console.log(doubles);


/* -------------------------------------------------------------
EXERCISE 4

In this final exercise, given a counter, use a while loop to log out
a count down from 10 to 1. HINT: remember you can decrement the value
of a variable using the '--' shorthand.

-------------------------------------------------------------- */
let counter = 10;

while( counter >= 1 ){
    console.log(counter);
    counter--;
}

// Write your code here...
