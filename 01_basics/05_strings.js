// String literal (primitive)
const name = "siddarth"
const repoCount = 50

// console.log(name + repoCount + "Value");

//String interpolation - using backtick
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


// String object created using the String() constructor
const gameName = new String('siddarth-aj-com')

console.log(gameName[0]); // s
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase()); 

console.log(gameName.charAt(2)); // d
console.log(gameName.indexOf('d')) //2

const newString = gameName.substring(0, 4); 
console.log(newString);//sidd (last index is not included)

const anotherString = gameName.slice(-8, 4);  // we can give negative indexing also
console.log(anotherString);//sidd


const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://siddarth.com/siddarth%20gowda"

console.log(url.replace('%20', '-'))

console.log(url.includes('siddarth')); //true

// based on '-' we want to split the string to array

console.log(gameName.split('-'));
