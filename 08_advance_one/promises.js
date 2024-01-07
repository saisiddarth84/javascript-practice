// 1st Promise - Basic example
const promiseOne = new Promise(function(resolve, reject){
    // Simulating an asynchronous task (e.g., network request, DB call)
    setTimeout(function(){
        console.log('Async task is complete');
        resolve(); // Resolve the promise
    }, 1000);
});

promiseOne.then(function(){
    console.log("Promise consumed");
});

// 2nd Promise - Without using variables
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(function(){
    console.log("Async 2 resolved");
});

// 3rd Promise - Passing data using resolve
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Siddarth", email: "sid@example.com"});
    }, 1000);
});

promiseThree.then(function(user){
    console.log(user);
});

// 4th Promise - Handling errors with reject
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "hitesh", password: "123"});
        } else {
            reject('ERROR: Something went wrong');
        }
    }, 1000);
});

promiseFour
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => {
        console.log(username);
    })
    .catch(function(error){
        console.log(error); // Handling errors with catch
    })
    .finally(() => console.log("The promise is either resolved or rejected"));


// Note: When using promises for server requests, a 404 error is considered a successful response by the promise. 
// The promise will be resolved even if the server returns a 404 status. 
// Actual errors (e.g., network issues, denied requests) are caught in the .catch() block.


// 5th Promise - Using async/await
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "javascript", password: "123"});
        } else {
            reject('ERROR: js went wrong');
        }
    }, 1000);
});

async function consumePromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response);
    } catch(error) {
        console.log(error);
    }
}

consumePromiseFive();

// Fetching data using async/await with fetch()
async function getAllUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        console.log(response);
        const data = await response.json(); // Parsing JSON response
        console.log(data);
    } catch(error){
        console.log("E: ",error);
    }
}

getAllUsers();  

// Fetch using then and catch
fetch('https://jsonplaceholder.typicode.com/users') 
    .then((response) => {
        return response.json()})
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error));


// Important Notes:

// -  Promises are used for handling asynchronous operations in JavaScript.
// - .then() is used to handle the resolved state of a promise.
// - .catch() is used to handle errors/rejections in promises.
// - .finally() is used for code that should be executed regardless of the promise's state.
// -  async and await provide a more synchronous-like way of handling promises.
// -  fetch() is a modern API for making HTTP requests and returns a promise.
// -  Errors in a fetch request (e.g., network errors) are caught in the .catch() block.
