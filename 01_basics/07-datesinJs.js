// Dates

let myDate = new Date()
console.log(myDate.toString()); 
console.log(myDate.toDateString()); // Sun Dec 31 2023
console.log(myDate.toLocaleString()); // 12/31/2023, 11:42:20 AM
console.log(typeof myDate); // object

// let myCreatedDate = new Date(2023, 0, 23);  // month start from 0 (Jan) 
// console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023

// let myCreatedDate = new Date(2023, 0, 23, 5, 3); 
// console.log(myCreatedDate.toLocaleString());  //  1/23/2023, 5:03:00 AM


let myCreatedDate = new Date("01-14-2023"); // month start from 1 (for mm-dd-yy) format 
//console.log(myCreatedDate.toLocaleString());  


let myTimeStamp = Date.now();

console.log(myTimeStamp);  // Current timestamp in milliseconds
console.log(myCreatedDate.getTime());  // Current timestamp in milliseconds (for dateobject)
console.log(Math.floor(Date.now()/1000)); // current timestamp is seconds


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// we can define parameters to the date methods
newDate.toLocaleString('default', {
    weekday: "long"
})




