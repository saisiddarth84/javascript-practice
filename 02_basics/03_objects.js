// singleton - created only when decalare the obj using constructor 
// Object.create

const mySym = Symbol("key1"); 

// object literals (key-value pair)
const JsUser = {
    name: "Siddarth",
    "full name": "Sai Siddarth A J",
    [mySym]: "myKey1",
    age: 18,
    location: "Jaipur",
    email: "siddarth@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// If have to insert a Symbol type variable as a key inside a object , then inside sqaure bracket [] variable name is wriiten => [mySym]: "myKey1"

// key name is treated as string by the system

//Accessing the value using property/key
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]); // cannot be accesed using dot(.)
console.log(JsUser[mySym]); // accessing a Symbol type value

// we have to know when to use Square brackets [] to access the value 


// changing the values
JsUser.email = "siddarth@gmail.com"

// Object.freeze(JsUser); // Now we cant change the values
JsUser.email = "siddarth@microsoft.com"; //if we try to change the value then the changes are not propogated (no error is thrown)
console.log(JsUser);

//Adding a function
JsUser.greeting = function() {
    console.log("Hello JS user")
}

JsUser.greeting2 = function() {
    console.log(`Hello JS user, ${this.name}`);// this is used to refer the current object
}

console.log(JsUser.greeting()); //"Hello JS user";
console.log(JsUser.greeting2()); //"Hello JS user, Siddarth";


console.log(JsUser.greeting); // function reference is returned