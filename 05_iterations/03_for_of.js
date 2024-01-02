// High Order Array Loops (Array-specific loop) - for...of

// ["", "", ""]
// [{}, {}, {}]

// Example 1: Looping through an array of numbers
const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    console.log(num);
}
// Output: 1, 2, 3, 4, 5
// The 'for...of' loop is used to iterate over the values of an array.

// Looping through characters in a string
const greetings = "Hello world!";
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}
// Output: Each char is H, Each char is e, Each char is l, ...


// Maps - Map objects are collections of key-value pairs.
// A key in the Map may only occur once; it is unique in the Map's collection.

const map = new Map();
map.set('IN', 'India');
map.set('USA', 'United States of America');
map.set('Fr', 'France');

console.log(map);
/*
Map(3) {
    'IN' => 'India',
    'USA' => 'United States of America',
    'Fr' => 'France'
  }
*/
// Maps allow you to associate values with keys.

// Example: Looping through key-value pairs in a Map
for (const [key, value] of map) {
    console.log(`${key} :- ${value}`);
}
/*
IN :- India
USA :- United States of America
Fr :- France
*/

//  'for...of' can be used to iterate over entries in a Map, providing both key and value.


// NOTE: Objects are NOT ITERABLE using 'for...of' or 'for' loop.
//  Unlike arrays and maps, regular objects do not have built-in iteration support using 'for...of'.
