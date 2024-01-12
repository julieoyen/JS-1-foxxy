// variables

var myName = "Julie";
console.log(myName); // Output line

let age = 31;
console.log(age); // Output: 31

const BRAND = "Nike";
console.log(BRAND);

// Data Types

let greeting = "Hello, World!";
console.log(typeof greeting); // If  you want to know the type of the data e.g. string, boolean or number

// let and const is mostly used today, not var 


let isHappy = true;
console.log(isHappy);
console.log(typeof isHappy); // outputs: boolean

let someVar;
console.log(typeof someVar); // outputs: undefined

let emptyValue = null;
console.log(typeof emptyValue); // outputs: null

// Object

let person = {
    firstName: "Julie",
    lastName: "Øyen",
    age: 31
};

console.log(person);

console.log(person.firstName); // if you want to access just first name

console.log(person.age);


// Create an object for a car and the car 
// details are, my car is made by volvo and it
// is a year of 1992
// condition of my car is used
// price of my car is 10k



let car = {
    make: "Volvo",    //make = key   value=Volvo    Key value
    year: "1992",
    condition: "used",
    price: 10000
};
 
console.log(car.make);
console.log(car["make"]);

console.log("I have a " + car.make + " and it is from " + car.year + " and it is " + car.condition + " and it costs " + car.price );

console.log(`i have a ${car.make} and it is ${car.year} and it is ${car.condition} and it cost ${car.price}`);




// ARRAY



let colors = ["Red", "Green", "Blue", "Pink"] 

let random = [ //[] = array
    5555,        // 0 - first item in the array
    "Green",     // 1
    { name: "Julie", age: 31},    // 2
    ["boy", "girl", "whatever"]   // 3
];

console.log( random [3])   // access different array (number 3 in this case) (index=position in the array)
console.log (random [0])



// 3. Type Conversion

let year = "1992"; // string

// change from string to number

let convertedYear = parseInt(year);

console.log(convertedYear)


// How to convert from number to string

let num = 123;

console.log(num.toString()); 

let convertedNumber = num.toString();

console.log(convertedNumber);



// number entejer ??




//Task 1 JS 

let city = "Dallas";
let myAge = 31;
const birthYear= 1992;

console.log(city, age, birthYear);

// task 2 data types

let greetings = "Hello yall";
let quantity = 23;
let isJavascriptFun = true;
let thisIsUndefined;
let emptyyValue = null;

console.log(typeof greeting);

console.log(typeof quantity);

console.log(typeof isJavascriptFun);

console.log(typeof thisIsUndefined);

console.log(typeof emptyyValue);

//task 3 Type conversion

let numString = "25";
let num1 = parseInt(numString);

console.log(num1);

let num2 = 50;
let numString2 = num2.toString();

console.log(num2);
console.log(numString2);

console.log(num2 + numString2);
