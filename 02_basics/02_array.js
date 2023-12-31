const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros); // array is added to last as single element 

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); 

// const allHeros = marvel_heros.concat(dc_heros); // merge all the two array elements 
// console.log(allHeros); 

// spread operator - mostly used to merge the array as we can add more than 2 arrays
const all_new_heros = [...marvel_heros, ...dc_heros]

console.log(all_new_heros);



const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// flat() - returns a new array where all subarrays are spread out 
const real_another_array = another_array.flat(Infinity); 
console.log(real_another_array);



//To check data and convert the data into array

console.log(Array.isArray("siddarth")) // false
console.log(Array.from("siddarth")); // return array of character

console.log(Array.from({name:"siddarth"})); // [] - empty array bcz we have not specified whether keys of arrays or value of arrays should be done


let score1 = 100
let score2 = 100
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [100, 100, 300]