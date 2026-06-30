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

// // callback functions
// let cbl = (user) => {
//     console.log(`callback is called`);
//     console.log(`Callback called with user: ${user}`);

// };

// function hof(username, callback) {
//     console.log(`HOF is called`);
//     return callback(username);
// }

// hof("Hulk", cbl); // calling the higher-order function with a callback function

// // Higher-order functions (HOFs) are functions that can take other functions as arguments or return functions as their result. In the example above, `hof` is a higher-order function that takes a username and a callback function as parameters. It calls the callback function with the provided username.


// hof is a function that takes a parameter and returns another function (callback function). The returned function can be called later, allowing for more flexible and reusable code. In this example, `hof` is a higher-order function that returns the `cbl` function, which can be called later to execute its logic.
function hof(params){
    console.log(`From HOF`);
    function cbl(params){
        // console.log(`From callback`);
        return `From callback`;
    }
    return cbl;
}

let resHOF = hof();
console.log(resHOF()); // calling the returned callback function