// let a = 9007199254740991n; // Maximum safe integer in JavaScript
// let b = 12n;
// let c = a + b;
// console.log(c);


// let name1 = Symbol('Hulk');
// let name2 = Symbol("Hulk");

// console.log(name1 === name2); // false



// Functions 
// // name functions 
// function myFunction() {
//     console.log("Hello from myFunction!");
// }

// myFunction(); // calling the function

// // anonymous functions
// const myAnonymousFunction = function() {
//     console.log("Hello from myAnonymousFunction!");
// };

// myAnonymousFunction(); // calling the anonymous function

// // arrow functions
// const myArrowFunction = () => {
//     console.log("Hello from myArrowFunction!");
// };

// fun("Hulk"); // calling the arrow function with a parameter
// let fun = user => {console.log(`Hello ${user}`)};
// myArrowFunction(); // calling the arrow function
// // all the callback functions are anonymous functions and => functions are also anonymous functions

// callback functions
let cbl = (user) => {
    console.log(`callback is called`);
    console.log(`Callback called with user: ${user}`);

};

function hof(username, callback) {
    console.log(`HOF is called`);
    return callback(username);
}

hof("Hulk", cbl); // calling the higher-order function with a callback function

