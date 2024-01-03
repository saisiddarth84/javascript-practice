
// - map() is used to transform elements in an array based on a provided function.
const myNumbers = [1, 2, 3, 4, 5, 7, 8, 9, 10];

// Using map() to add 10 to each element
const newNums = myNumbers.map((num) => num + 10);

console.log("Result of map:", newNums);//  [11, 12, 13, 14, 15, 17, 18, 19, 20]


// - Chaining allows you to use multiple array methods in a sequence.
const arrNums = myNumbers
    .map((num) => num * 10) // Multiply each element by 10
    .map((num) => num + 1)  // Add 1 to each element
    .filter((num) => num >= 40); // Filter elements greater than or equal to 40

console.log("Result of chaining:", arrNums);// [41, 51, 71, 81, 91, 101]

// Important Note:
// - Each method in the chain operates on the result of the previous method.
// - In chaining, the data flows through each operation one at a time.
// - The order of methods matters, and each method affects the data for the next one.
