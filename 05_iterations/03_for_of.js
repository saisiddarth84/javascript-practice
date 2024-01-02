// High order Array loops (array specific loop)

// for of 

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);    
}

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

// Maps - Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection.

const map = new Map()
map.set('IN', "India");
map.set('USA', "Unites States of America");
map.set('Fr', "France")

console.log(map);
/*
Map(3) {
    'IN' => 'India',
    'USA' => 'Unites States of America',
    'Fr' => 'France'
  }
*/ 

for (const [key,value] of map) {
    console.log(key, ':-', value);
}
/*
IN :- India
USA :- Unites States of America
Fr :- France
*/



// NOTE: Objects are NOT ITERABLE using for of or for loop





