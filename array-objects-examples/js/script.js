// *Blockscope - you can change outside the box with VAR
// {
//     var name = "hesham";
// }

// var name = "julie";


// *Lockscope - you can not come outside the box and change with LET

// {
//     let nameSecond = "monica";
// }

// nameSecond = 

// *Globalscope if let is outside box first or not in a curly brackets or inside a function


// // Const is constant - you can not change it later
// // const CURRENCY = "NOK";

// // CURRENCY = "USD"

// // with let you can reassign another value to it

//----------------

// let name = "Kenneth";
// let teacherName = "Hesh";
// let teacherFriendName = "Monde";

// name = "Erica"

// console.log(name)

// name = "Julie"
// console.log(name)    // since it's global scope, you can change it any time





const API_URL = "https://api.example.com/data" 
const PORT = 8080; 
const MAX_CONNECTIONS = 4;

// they are saying to other developers - "this should not changeable"
// readability 








/* ARRAYS */ 

// VAR = one starbucks cup
//ARRAY is the tray you put the coffee in to-go

const fruits = ["apple", "blueberry", "mango", "oranges"]

console.log(fruits.length) // how many items in the array

fruits.push("strawberry");  // ADD another item in the END
console.log(fruits)

fruits.unshift("banana");  // ADD item in the BEGINNING
console.log(fruits)

fruits.pop();// Remove the LAST item in the array
console.log(fruits)

fruits.shift(); // Remove the FIRST item in the array
console.log(fruits)



const number = [3, 4, 99, 88, 54, 5]
number.sort();
console.log(number)

            //0 1 2
let animal = "dog"; // javascript sees dog as 3 numbers
console.log(animal.length)


// find the position of volkswagen

const cars = ["bmw", "volkswagen", "toyota"];  // [] this is a string
console.log("the index of volkswagen: ", cars.indexOf("volkswagen"));


// .find

const user = {
    name : "Monde",
    age : 30,
    job : "Software Engineer",
    wealth : 12343234234234234
}
console.log(user)

console.log(user.name)
console.log(user.age)
console.log(user.wealth)

/* Hello, my name is Monde, and i am 30 years old, i own 1231231231312 in dollar
and i work as a software engineer */

const someText = "Hello, my name is " + user.name;
console.log("someText: ", someText)

const someTextTwo = `Hello my name is ${user.name} I am ${user.age} years old, I own ${user.wealth} in dollar and I work as a ${user.job}`; 

console.log(someTextTwo)

const books = [
    {
        title: "The hobbit",
        author: "Hesham El Masry",
        pages: 300
    },
    {
        title: "Drive with me in my car",
        author: "Kevin Heart",
        pages: 1000
    },
    {
        title: "One Thousand and One Night",
        author: "Some guy",
        pages: 3000
    },
]

console.log("my first book", books[0]) // log the book number 0

                 // or use books.filter to filter it 
const searchBook = books.find(function (book){
    //TASK - please find the book which has more than 300 pages
    return book.pages > 300;
//    return book.title.toLowerCase() === ("The hobbit").toLowerCase(); 
}) //  anonymous function - make every letter small 

console.log("Search Book: ", searchBook)

// a function is e.g. when someone come an ring your doorbell. When somebody rings the doorbell, it means you have to open it. 


// a function is a set of actions or code run when we call this function name

function doorRing(withCamera){
    console.log("I will go open the door: " + withCamera);
}

doorRing("Monde is outside");

function logWord(theWord){
    console.log(theWord)
}

logWord("Julie");
logWord("Henny")

function addTwoNumbers (num1, num2){
    return num1 + num2;
}

const sum = addTwoNumbers(10, 20);
console.log(sum)

