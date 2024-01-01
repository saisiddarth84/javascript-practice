//const tinderUser = new Object() // singleton object
const tinderUser = {}; // Non singleton object

console.log(tinderUser); // {}-Empty object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        } 
    }
}

console.log(regularUser.fullname.userfullname.firstname);// "hitesh"


// merging the objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

// const obj3 = { obj1, obj2} obj2 will be inside the obj1( same problem like in the arrays) 

//Object.assign() - It allows you to merge objects by copying properties from one or more source objects to a target object. The method returns the modified target object.
// If we didn't pass empty object then obj1 will be the target object , then remaining source object is merged to obj1

//const obj3 = Object.assign({}, obj1, obj2, obj4) 


// spread operator(...) - mostly used to merge the objects

const obj3 = {...obj1, ...obj2}; 
console.log(obj3); // { '1': 'a', '2': 'b', '3': c, '4': 'd'}



 // When values comes from Database - array of objects

 const users = [
    {
        id: 1,
        email: "h@gamil.com" 
    },
    {
        id: 2,
        email: "s@gmail.com"
    },
    {
        id: 3,
        email: "d@gmail.com"
    }
 ]
// Accessing array of objects
 users[1].email

 
console.log(tinderUser); // { id: '123abc', name :'Sammy', isLoggedIn: false }

console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoogedIn' ]
console.log(Object.values(tinderUser)); // [ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser));// [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ] => Key-value pair array of arrays is returned

//To check if the property exists in a object
console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true
console.log(tinderUser.hasOwnProperty('isLogged')); // flase



// Object de-structuring

 const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
 }

 // course.courseInstructor

 const {courseInstructor: instructor} = course; // couresInstructor value is saved in a variable and we renamed that variable from courseInstructor to instructor 

 console.log(course.courseInstructor); // "hitesh"
 console.log(instructor); // "hitesh"


 //API - Application Programming Interface

// APIs use JSON as their data format for exchanging information between the server and client
// When you make a request to an API, the response you receive is often in JSON format

// JSON(JavaScript Object Notation) - JSON is often used to transmit data between a server and a web application, as well as to store and exchange data.

/*
Objects in JSON consist of key-value pairs. Keys must be strings enclosed in double quotes

{
    "name": "hitesh",
    "coursename": "js in hindi",
    "price": "free"
}

*/

// API can be in Array format

[
    {},
    {},
    {}
]
