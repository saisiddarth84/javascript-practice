// ForEach Loop - A higher-order function commonly used for iterating through arrays

const coding = ["js", "ruby", "java", "python", "cpp"];

// Using forEach with an anonymous function (callback function)
coding.forEach((item) => {
    console.log(item);
});

// Using forEach with a named function reference
function printMe(item) {
    console.log(item);
}
coding.forEach(printMe); // function refernce is passed


// The callback function can also receive index and the entire array as parameters
coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
});

// Iterating over objects inside an array (commonly used for database values)
const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
];

myCoding.forEach((item) => {
    console.log(item.languageName);
});

// Important Notes:
// - forEach is a high-order function, making it easy to iterate through arrays.
// - It takes a callback function as an argument, which is applied to each element.
// - The callback function can take parameters (item, index, array).
// - Useful for cleaner and concise array iteration compared to traditional for loops.
// - Suitable for executing a function on each element, like printing or processing data.
// - Ideal for iterating through objects within an array, common in database queries.