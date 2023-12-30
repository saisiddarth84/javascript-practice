// Primitive Data types (call by value)

// 7 types : String, Number, boolean, null, undefined, Symbol, BigInt

//Number
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //false

const bigNumber = 3458555554485455854625n; // BigInt 



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "nagraj", "doga"]
let myObj = {
    name: "siddarth",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}
myFunction();


// to check data type
console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3