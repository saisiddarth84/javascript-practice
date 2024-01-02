// While and Do-While Loops in JavaScript

// Example: Using a while loop
let index = 0;
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2;
}

// Example: Using a while loop to iterate through an array
let myArray = ["flash", "batman", "superman"];
let arr = 0;
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1;
}

// Example: Using a do-while loop
let score = 11;

do {
    console.log(`Score is ${score}`);
    score++;
} while (score <= 10);
