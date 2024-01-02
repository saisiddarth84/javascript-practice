// Immediately Invoked Function Expression (IIFE)

//An IIFE is a JavaScript design pattern that involves defining and immediately executing a function.

// Syntax: (function () { /* code */ })();

// Example:
(function databaseLogger() {
    console.log(`DB CONNECTED`);
})(); // Invoking the function immediately

// The above code defines an named IIFE 'databaseLogger' that logs "DB CONNECTED" and is invoked immediately.
// It helps to create a private scope for variables, preventing them from polluting the global scope.
// Including a semicolon before an IIFE is recommended, especially when there are multiple statements before it in the same file. 

// IIFE using Arrow function (unnamed IIFE)

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('siddarth');

