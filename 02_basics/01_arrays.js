// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros= ["batman", "superman"]

const myArr2 = new Array([1, 2, 3, 4])
// console.log(myArr[1]);


// Array methods

// myArr.push(6); // add element at last 
// myArr.push(7); // delete element at last
// myArr.pop();

// myArr.unshift(9); // add element at start
// myArr.shift(); // delete element at start

// console.log(myArr.includes(9));
// console.log(myArr.indeexOf(3));

const newArr = myArr.join()

console.log(myArr);
console.log(newArr); // converted to string (,) as seperator


// slice, splice

console.log("A ", myArr); // [0, 1, 2, 3, 4, 5]

const myn1 = myArr.slice(1,3);   // returns a copy of array selected from start to end (end not included)

console.log(myn1); // [1, 2]
console.log("B ", myArr);  // [0, 1, 2, 3, 4,5]- The original array will not be modified.


const myn2 = myArr.splice(1,3); //changes the contents of an array by removing from start to end index(end is included) 

console.log("C ", myArr); // [0, 4, 5]
console.log(myn2);// [1, 2, 3]