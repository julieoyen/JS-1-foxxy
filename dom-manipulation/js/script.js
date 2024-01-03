// 1. Select the heading h2

// querySelector
// querySelectorAll - will select all e.g. h2 in the page
// getElementById

// hey document, i would like to query select from you h2 (document.querySelector("h2");)
// i will put you in a box called heading2 (const heading2 )
const heading2 =document.querySelector("h2");
console.log(heading2);

// 2. select element with class.heading2

const headingByClass = document.querySelector(".heading2");
console.log(headingByClass);

// 3. select element with an id #list using querySelector

const list = document.querySelector("#list");
console.log(list);

// 4. Select element with id #list using getElementId

const list2 = document.getElementById("list");
console.log(list2);

// 5. select one of the listed items

const listItem = document.querySelector("li");
console.log(listItem)

// 6. Select multiple listed items

const listItems = document.querySelectorAll("li");
console.log(listItems);

// 7. select the h1 and change the color to be red
// console.dir to see everything you can select

const heading1 = document.querySelector ("h1");
console.log("before i do change");
//console.dir(heading1);
console.log("first heading: ",heading1);
heading1.style.color="red";
heading1.style.border = "5px solid green";
heading1.style.padding = "1rem";

// Task please change the background color of the heading1 variable

heading1.style.backgroundColor= "pink";

// Select the div and add a class called .container to it

const myDiv = document.querySelector("div");
console.log("myDiv: ",myDiv);

myDiv.classList.add("container");

// change the heading text
heading1.innerText = "Hei Ingrid Og Hei Line";
heading1.innerHTML = `<span class="green">Hei Ingrid and Hei Line</span>`;
  
                     // 0          1       2        3
const myArrayOfNames= ["hesh", "johnny", "kjetil", "jonas", "marius"];

//console.log(myArrayOfNames[0]);
//console.log(myArrayOfNames[2]);

//i++= add one more i = 0 - start counting at 0

for(let i = 0; i < myArrayOfNames.length; i++){
    console.log(myArrayOfNames[i]);
}

// i = 0
// 0 < 4
// i = 0 + 1 = 1


// for(let i=1; i <=100;)     it will count till 100

//Arithmetic Operators

// = + ++

// Addition

// 10 + 5 = 15

let sum = 10 + 5;    // store everything on the left side, in the box on the right side
console.log(sum);

// Subtraction

// 10 - 5 = 5

let difference = 10 - 5;
console.log("difference: ", difference);

// Multiplication *

// 10 * 5 = 50

let product = 10 * 5;
console.log(product);

// division / 5 = 2

let result = 10 / 5;
console.log(result);

// modulus 

let remainder = 10 % 4; // remainder is 2, (is 2,5 but forget about the 0.5)
console.log(remainder)

// SIMPLE OPERATORS

// Simple assignment

let a = 5; // a is 5

// Addition assignment (+=)

let b = 10; 

b += 5;                  // b is now 15
// this means b = b + 5 = 15

// Subtraction assignment 

let c = 15;

c -= 5;                 // c = c - 5 = 10

// COMPARISON OPERATORS 

// equal to (==)

let isEqual = (5 == "5");  // =true
console.log("isEqual:", isEqual);

// strict equal (===)

let isStrictEqual = (5 === "5"); // =false
console.log(isStrictEqual);

// Not equal (!=)

// 5 != 6 = true 

let isNotEqual = (5 != "6") // = true
console.log(isNotEqual);

// Greater than ( > )

// 10 > 5 = true 

let isGreaterThan = (10 > 5);
console.log("is greater than ", isGreaterThan);

// <  = less than
// >= = greater than or equal
// <= = less than or equal

// AND // OR 
// && //  || 

              // true      true
let andResult = (5 > 4 && 10 > 5); // true
console.log(andResult);

//false    true    = true
let orResult = (5 > 10 || 10 > 5);
console.log(orResult);


//NOT

!(5 > 10) // false because of the ! infront 


//TASK 2

heading1.innerHTML = "Welcome to JavaScript Class";
heading1.style.color="red";
console.log(heading1);

const myBtn = document.querySelector ("button");

function getRandomInt (max) {
    return Math.floor(Math.random() * max);
}
myBtn.addEventListener("click", function () {
    let someRandomNumber = getRandomInt(220);
    list.innerHTML += `<li>New Item ${someRandomNumber}</>`
});

console.log(myBtn);