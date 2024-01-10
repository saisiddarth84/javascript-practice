// Object literal

// Creating an object using object literal syntax
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    // Method within the object
    getUserDetails: function(){
        console.log("Got user details from the database");
        console.log(`Username: ${this.username}`); // 'this' is used to refer to the current context 
    }
}

// Accessing properties and invoking the method
console.log(user.username);
user.getUserDetails();

// Understanding 'this' outside object context
console.log(this); // Outputs: {} - an empty object

// Constructor Function

// Defining a constructor function to create objects with similar structure
function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    // Method shared among all instances
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
}

// Creating instances of the User constructor
const userOne = new User("hitesh", 12, true);
const userTwo = new User("Siddarth", 11, false);

// Accessing the constructor property of an object
console.log(userOne.constructor); // Outputs: [Function: User]
//console.log(userOne); 


/*
Notes:
- Object literal syntax is a concise way to create objects in JavaScript.
- The `this` keyword in an object method refers to the current instance of the object.
- In the global context or a function outside an object, `this` refers to the global object (usually `window` in a browser).
- Constructor functions are used to create multiple instances of objects with a shared structure.
- The `new` keyword is used to create instances of a constructor function.
- Constructor functions often have methods shared among all instances.
- The `constructor` property of an object points back to the constructor function that created it.
*/