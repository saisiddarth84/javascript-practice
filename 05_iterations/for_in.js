// for in loop (can iterate object also)

//for...in loop is intended for iterating over the properties (keys) of an object.
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`); 
}


// In Array

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
    console.log(programming[key])
}

//NOTE: In the for in loop , for arrays value is not taken but the keys(0,1,2...) , so we access like programming[key] 
//BUT in for of loop in the array value  is diretly taken


//When used with a Map, it iterates over its prototype chain and includes additional properties/methods inherited from Map's prototype.
// This behavior is often not desired when working with Maps, as it introduces additional properties that are not part of the actual key-value pairs in the Map.





const map = new Map();
map.set('IN', 'India');
map.set('USA', 'United States of America');
map.set('Fr', 'France');