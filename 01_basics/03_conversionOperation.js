let score = "siddarth"

console.log(typeof score); // String
//console.log(typeof(score));

let valueInNumber = Number(score) 
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // NaN - not a number

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = "siddarth"

let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn); // true

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
//console.log(stringNumber);
//console.log(typeof stringNumber); // string

// ********************** Operations **************************

let value = 3
let negValue = -value
//console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); // 2 power 3
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " siddarth"

let str3 = str1 + str2
// console.log(str3)

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2); //122 => "1" + 2 => "12"+2 =>"122"
// console.log(1 + 2 + "2"); // 32 => 1 + 2 => 3 + "2" => "32"

// console.log( (3 + 4) * 5 % 3);

// console.log(+true); //1
// console.log(+""); //0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);


/*
    If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

    If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.
*/