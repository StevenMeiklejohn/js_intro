'use strict';
// Closure
// function foo() {

//   const a = 2;

//   function bar(){
//     console.log(`${a} is the magic number`);
//   }

//   return bar;
// }

// const baz = foo();

// baz();

// // -----------------------------------------------------------------

// numbers = [2, 5, 46, 8, 90];

// const cb = (n) => {
//   console.log(`The number is ${n}`);
// }

// cb(1);

// const words = ['one', 'two', 'three', 'four'];

// // numbers.forEach(cb);

// const stocks = [
//   {ticker: "appl", price: 100},
//   {ticker: "ms", price: 200},
//   {ticker: "alpha", price: 400}
// ]

// const total = stocks.reduce( (accumulator, stock) => {
//   return accumulator + stock.price;
// }, 0);

// console.log(`Total price: ${total}`);

// const cities = [ 'Manchester', 'Liverpool', 'Edinburgh', 'Carlisle', 'Birmingham', 'Glasgow' ];

// // Task 1
// // Log out the length of the cities array
// console.log(cities.length);

// // Task 2
// // Log out the 3rd item of the cities array (Edinburgh)
// console.log(cities[2]);

// // Task 3
// // Update Edinburgh to be 'City of Edinburgh'
// cities[2] = "City of Edinburgh";

// // Task 4
// // Add Dunfermline to the end of the cities array
// cities.push("Dunfermline");

// // Task 5
// // Add Inverness to the beginning of the cities array
// cities.unshift("Inverness");

// // Task 6
// // Remove the first item from the cities array
// cities.shift();

// // Task 7
// // Find the index of Birmingham and save it to a variable
// const birminghamIndex = cities.indexOf("Birmingham");

// // Task 8
// // Remove Birmingham from the cities array
// cities.splice(birminghamIndex);


// Object Play

const myPropSymbol = Symbol("optional, developer-friendly description");

let myObj = {
    [myPropSymbol]: "Hello, symbol!",
    todo: ["Run", "Burpees", "Press ups"]
};

let myObjShallowCopy = { ...myObj };

// Change the original object array
myObj.todo.push("Squats");

// console.log(myObj.address?.city);

console.log(Object.hasOwn(myObj, "todo"));


const shoppingBasket = {
    milk: 130,
    cheese: 260,
    monsterMunch: 100
}

console.log(shoppingBasket.milk);