
function sayMyName() {
    console.log("S");
    console.log("I");
    console.log("D");
    console.log("D");
    console.log("A");
    console.log("R");
    console.log("T");
    console.log("H");
}

// sayMyName - only reference
// sayMyName(); // to execute the function

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }

// addTwoNumbers(3, 4); //7
// addTwoNumbers(3, "4"); //34
// addTwoNumbers(3, null); //3

// to return value from a function
function addTwoNumbers(number1,number2){
    return number1 + number2;
}

const result = addTwoNumbers(3, 5);

console.log("Result: ",result); // Result:  8


function loginUserMessage(username){
    if(!undefined){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage("siddarth")); //siddarth just logged in

// if we dont pass any value , then parameter will be undefined
console.log(loginUserMessage()); // Please enter a username


// We can also give a default value to parameter , then the parameter cannot be a undefined , so we dont need to check also
// if we pass a value then it will be override the default vaue
function loginUserMessage2(username = "Sam"){
    
    return `${username} just logged in`;
}

console.log(loginUserMessage2()); //Sam just logged in
console.log(loginUserMessage2("siddarth")); // siddarth just logged in


// If we dont know how many values will be passed then we can use REST OPERATOR(...)
// Rest operator and spread operator have same syntax(3 dots) but used in different context

function calcaluateCartPrice(val1,val2,...num1){
    return num1    
}

console.log(calcaluateCartPrice(200, 400, 500, 2000, 1500)) // [ 500, 2000, 1500 ]
// 200 is passed to val1, 400 is passed to val2 and
//By using Rest operator in num1 it combines the rest of the values into an array


const user = {
    username: "siddarth",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);// Username is siddarth and price is 199
// Passing  objects directly
handleObject({
    username: "sam",
    price: 399
}); 

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}
console.log(returnSecondValue[myNewArray]); // 400
console.log(returnSecondValue[200, 400, 100, 600]); // 400