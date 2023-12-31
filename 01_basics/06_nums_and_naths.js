const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length); // converted to string
console.log(balance.toFixed(2));//precision value 

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4)); // 124 (returns a string)
console.log(otherNumber.toPrecision(4)); // 123.9

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // 10,00,000


// ++++++++++++++++++  Maths  +++++++++++++++++++++++

 console.log(Math);
 console.log(Math.abs(-4)); //4
 console.log(Math.round(4.6)) //5
 console.log(Math.ceil(4.2)) //5
 console.log(Math.floor(4.6)) //4
 console.log(Math.min(4, 3, 6, 8)); 
 console.log(Math.max(4, 3, 6, 8)); 

console.log(Math.random()) // returns b/w 0 to 1(with floating num) - 0.155,0.8548

console.log((Math.random()*10) + 1) // returns b/w 1 to 9 (1.58966,7.985) 

// if we want to round up with single number
console.log(Math.floor(Math.random()*10) + 1) // 1,9,4..

// if we want a minimum random number from 10 only
const min = 10
const max = 20

console.log(Math.floor((Math.random() * (max - min + 1))) + min)

