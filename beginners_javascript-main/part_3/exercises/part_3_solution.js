/* ------------------------------------------------------------- 
EXERCISE 1

You've been provided with an object called myGuitar. Use a for loop to log out all the previous owners.
-------------------------------------------------------------- */
const myGuitar = {
    make: 'Gretsch',
    model: '6120W',
    year: 1962,
    previousOwners: [ 'Chuck Berry', 'Keith Richards', 'Angus Young' ]
}

for( let owner of myGuitar.previousOwners  ){
    console.log(owner);
}


/* ------------------------------------------------------------- 
EXERCISE 2

Create an object that represents your favourite band. Include any key/value pairs that you think are appropriate but the band members should be an array of objects.  
-------------------------------------------------------------- */

let strayCats = {
    name: "Stray Cats",
    established: 1977,
    members: [
        {name: "Brian Setzer", role: "Singer/guitarist"},
        {name: "Slim Jim", role: "Drummer"},
        {name: "Lee Rocker", role: "Bass"}
    ]
}


/* ------------------------------------------------------------- 
EXERCISE 3

Add a function to your favourite band object called getDetails that returns some details of the band.
Call the getDetails function and log out what it returns

-------------------------------------------------------------- */

strayCats = {
    name: "Stray Cats",
    established: 1977,
    members: [
        {name: "Brian Setzer", role: "Singer/guitarist"},
        {name: "Slim Jim", role: "Drummer"},
        {name: "Lee Rocker", role: "Bass"}
    ],
    getDetails: function() {
        return `${this.members[0].name} is the ${this.members[0].role} of ${this.name}`
    }
}

console.log(strayCats.getDetails());


/* ------------------------------------------------------------- 
EXERCISE 4: Fizzbuzz

Fizzbuzz is a classic coding problem. The task is as follows:

You've been provided with an empty array called fizzBuzz. 

Loop through the numbers 1 to 20 and push each number onto the fizzBuzz array but push “fizz” if the number
is divisible by 3, “buzz” if the number is divisible by 5, and “fizzbuzz” if the number is divisible by both 3 and 5.

Finally, log out the fizzBuzz array. (HINT: Use a while loop that counts from 1 to 20)

It should log: [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16, 17, 'fizz', 19, 'buzz']
-------------------------------------------------------------- */

const fizzBuzz = [];

let count = 1;

while( count <= 20 ){
  if( count % 3 == 0 && count % 5 == 0 ){
    fizzBuzz.push("fizzbuzz");
  }
  else if( count % 5 == 0  ){
    fizzBuzz.push("buzz");
  }
  else if( count % 3 == 0) {
    fizzBuzz.push("fizz");
  }
  else{
    fizzBuzz.push(count);
  }
  count++;
}

console.log(fizzBuzz);

