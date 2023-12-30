// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

//Problems occur when we compare two different data types

// console.log("2" > 1); =>"2" is converted to number
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0); // null is not converted to 0 but treated as undefined or NaN
console.log(null >= 0);

// comparisons (>,<,>=) convert null to a number, treating it as 0.


console.log(undefined == 0); // undefined is not converted to 0
console.log(undefined > 0);
console.log(undefined < 0);


// ===  - check the values strictly(data type also)

console.log("2" === 2); //false (data type is different)
