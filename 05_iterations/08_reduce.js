// Using reduce() method in JavaScript

// Example 1: Summing up an array of numbers
const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval;
// }, 0);


// Using arrow function with reduce to calculate the total
const myTotal = myNums.reduce((acc, curr) => (acc + curr), 0);

//  6
console.log("Result of reduce():", myTotal); // 6

// Example 2: Calculating the total price in a shopping cart
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
];

// Using reduce to calculate the total price in the shopping cart
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log("Result of reduce() for shopping cart:", priceToPay);// 21996


// Important Notes:
// - The reduce() method is used to accumulate a single result by applying a function to each element in the array.
// - It takes a callback function as an argument, which has an accumulator (acc) and the current value (curr).
// - The initial value of the accumulator is provided as the second argument to reduce (0 in the examples above).
// - In the first example, reduce() is used to sum up an array of numbers.
// - In the second example, reduce() is used to calculate the total price in a shopping cart.
// - The arrow function syntax is used for concise and clean code.
