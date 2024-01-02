// Truthy and Falsy Values in JavaScript

// Example: Checking if a user email exists (truthy)
const userEmail = "sid@gmail.com";

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// Falsy Values:
// false, 0, -0, "", null, undefined, NaN, BigInt 0n

// Truthy Values: All other values which are not falsy are truthy values.
// Some notable truthy values
// "0", 'false', " ", [], {}, function(){}

// Example: Checking if an array is empty
const userMail = [];

if (userMail.length === 0) { 
    console.log("Array is Empty");
}

// Example: Checking if an object is empty
const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}



 // Nullish Coalescing Operator (??) - returns the first defined value (null or undefined are considered not defined)
let val1;
val1 = 5 ?? 10;           // 5 
val1 = null ?? 10;        // 10
val1 = undefined ?? 15;   // 15
val1 = null ?? 10 ?? 20;   // 10


//Ternary Operator (short syntax for if-else)
// condition ? true : false

const iceTeaPrice = 100;

iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");
