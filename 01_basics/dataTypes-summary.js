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
    age: 22
}

const myFunction = function(){
    console.log("Hello World");
}

// to check data type
//console.log(typeof myFunction); //object (function object)

// https://262.ecma-international.org/5.1/#sec-11.4.3


//  Memory in Javascript

// Stack (Primitive) - a copy of the value allocated when we declare a variable

// Heap (Non-Primitive) - the reference of memory block is allocated when we declare it


let myName = "siddarth"

let anothername = myYoutubename
anothername = "dayananda"

console.log(myName); // siddarth
console.log(anothername); // dayananda


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne // reference is assigned 

userTwo.email = "siddarth@google.com"; // userOne email is also changed

console.log(userOne.email);  // siddarth@google.com
console.log(userTwo.email);  // siddarth@google.com