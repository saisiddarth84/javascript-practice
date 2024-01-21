// Global scope: Variables declared outside of any function or block have global scope. They are accessible throughout the entire program.
// Global scope in Node.js environment and browser environment (like Windows) can differ.

var c = 300; 
let a = 100;

if (true) {
    let a = 10; // This is a different 'a' from the one declared in the global scope.
    const b = 20;
    console.log(a); // Outputs: 10
    c = 30; // Modifying the global variable 'c'
}

console.log(a); // Outputs: 100 (global 'a')
// console.log(b); // ERROR - 'b' is not defined in this scope
console.log(c); // Outputs: 30 (modified in the block)

// Problem with var: Variables declared with 'var' are accessible throughout the entire function in which they are declared, regardless of the block within the function.

// Nested scope
function one() {
    const username = "siddarth";

    function two() {
        const website = "youtube";
        console.log(username);
    }
    // console.log(website); // ERROR - Can't access 'website' outside the scope where it is declared

    two();
}

one();

// Closure - a child function can access a parent function's variable
if (true) {
    const username = "siddarth";
    if (username === "siddarth") {
        const website = "youtube";
        console.log(username + website); // Outputs: siddarthyoutube
    }
    // console.log(username); // ERROR - 'username' is not defined in this scope
} 

// Hoisting
console.log(addone(5)); // Outputs: 6
function addone(num) {
    return num + 1;
}

addTwo(5); // ERROR - 'addTwo' is not defined at this point
const addTwo = function(num){
    return num + 2;
}
// When we assign Variable to a Function defination, we CAN NOT call this Variable as Function BEFORE declaration as it will behave as Variable with UNDEFINED value.

//Important Notes: 
// - Scopes define the visibility and accessibility of variables.
// - Global scope encompasses the entire program, local scope refers to specific blocks or functions.
// - let and const have block scope, while var has function scope.
// - Nested functions create nested scopes.
// - Closure allows a function to access variables from its outer (enclosing) scope.
// - Hoisting means declarations are moved to the top during compilation, but assignments are not.
