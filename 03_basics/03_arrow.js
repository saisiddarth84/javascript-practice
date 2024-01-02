// 'this' - A special keyword that refers to the object on which a function is being invoked or the object that a method is being called on.

const user = {
    username: "siddarth",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    }
};

user.welcomeMessage();
/* Output:
{
    username: 'siddarth',
    price: 999,
    welcomeMessage: [Function: welcomeMessage]
}
*/

user.username = "sam";

user.welcomeMessage();
/* Output:
{
    username: 'sam',
    price: 999,
    welcomeMessage: [Function: welcomeMessage]
}
*/

console.log(this); // {} - Empty object

// NOTE: In a Node.js environment, 'this' refers to an empty object in the global context.
// In a browser environment, the global object is often the window object, so 'this' will refer to the window object.

/*
function test() {
    let username = "siddarth";
    console.log(this.username); // undefined
}
// 'this' cannot be used in a function like this
*/

/*
const test = function() {
    let username = "siddarth";
    console.log(this.username); // undefined
} */
// here also 'this' cannot be used in function like this

/*
const test = () => {
    let username = "siddarth";
    console.log(this.username); // undefined
}
test();
// 'this' cannot be used in an arrow function.
*/

// Arrow function

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

console.log(addTwo(3, 4));

// Implicit return - In arrow functions, if the function body consists of a single expression,
// we implicitly return without the need for the return keyword by removing curly braces.

// const addTwo = (num1, num2) => num1 + num2;

const addTwo = (num1, num2) => (num1 + num2);

// Parentheses can be used when implicitly returning a single expression.
// If curly braces are used, the 'return' keyword is compulsory.


// When returning an object, wrap it in parentheses.
const objAdd = (num1, num2) => ({ username: "siddarth" });

console.log(addTwo(3, 4));