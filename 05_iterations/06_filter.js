const coding = ["js", "ruby", "java", "python", "cpp"];

const values = coding.forEach( (item) => {
    // console.log(item);
    return item
})

console.log(values); // undefined

// Important: forEach doesn't return anything (returns undefined)



// filter() -  Creating a new array based on a condition which will be true
const myNums = [1, 2, 3, 4, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) => num > 4 ) 
const newNums = myNums.filter( (num) => {
    return num > 4;
})

// const newNums = myNums.filter((num) => num > 4 )  // Implicit return 

console.log(newNums); // [ 6, 7, 8, 9, 10 ]


// Using forEach to achieve the same result
const arrNum = [];
myNums.forEach( (num) => {
    if(num >  4){
        arrNum.push(num)
    }
})
console.log(arrNum); // [ 6, 7, 8, 9, 10 ]



// Array of books with title, genre, publish year, and edition
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  // Using filter to get books with the genre 'History'
  let userBooks = books.filter( (bk) => bk.genre === 'History');

  // Using filter with multiple conditions
  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === 'History'  
})
  console.log(userBooks);

  // NOTE: In arrow functions, if curly braces are used, the 'return' keyword is compulsory.