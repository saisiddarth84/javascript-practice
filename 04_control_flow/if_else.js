// Comparison Operators: <, >, <=, >=, ==, !=
// Strict Comparison Operators: === (checks value and type), !==

// Example of basic comparison
if (2 !== 3) {
    console.log("Executed because 2 is not equal to 3");
}

// Example of loose equality (checks value only)
console.log(2 == "2"); // true

// Example of strict equality (checks value and type)
console.log(2 === 2); // true
console.log(2 === "2"); // false

// Conditional Statements based on Temperature
const temperature = 41;

if (temperature < 50) {
    console.log("Temperature is less than 50");
} else {
    console.log("Temperature is greater than or equal to 50");
}

// Variables declared inside an 'if' block have local scope
const score = 200;

if (score > 100) {
    const power = "fly";
    console.log(`User power: ${power}`);
}

// Shorthand notation for one statement in 'if'
const balance = 1000;

if (balance > 500) console.log("Balance is greater than 500");

// Multiple conditions using 'else if'
if (balance < 500) {
    console.log("Less than 500");
} else if (balance < 750) {
    console.log("Between 500 and 750");
} else if (balance < 900) {
    console.log("Between 750 and 900");
}

// Logical Operators: && (AND), || (OR)
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// Example of combining conditions using && (AND)
if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy course");
}

// Example of combining conditions using || (OR)
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User is logged in");
}
