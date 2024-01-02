
// Global scope: Variables declared outside of any function or block have global scope. They are accessible Throughout the entire program
// Global scope in node environment and windows(browser) environment is different

// Block or local scope: Variables declared with let or const within a block (inside curly braces {}) have block scope.

var c = 300 
let a = 100

if (true) {
    let a = 10
    const b = 20
    console.log(a) // 10
    c = 30 
}

console.log(a); // 100
// console.log(b); ERROR
console.log(c); // 30

//problem with var => variable declared with var is accessible throughout the entire function in which it is declared, regardless of the block within the function.


//Nested scope
function one() {
    const username = "siddarth"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); ERROR - cant access variable outside the  scope where it is declared

    two() 
}

one()

// Closure - child function can access parent function variable

if (true) {
    const username = "siddarth"
    if(username === "siddarth") {
        const website = "youtube"
        console.log(username + website); //siddarthyoutube
    }
    // console.log(website); ERROR
} 

// console.log(username);  ERROR



// Hoisting

console.log(addone(5)); // 6
function addone(num) {
    return num + 1
}

addTwo(5); // ERROR
const addTwo = function(num){
    return num + 2
}
// The function addTwo is assigned using a function expression (const with function expression).
//The line addTwo(5); is executed before addTwo is assigned, leading to an error because addTwo is not defined at that point.
