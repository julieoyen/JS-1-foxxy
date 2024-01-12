// 1. Local Storage
// Session Storage

const myVariable = "Some text";

window.localStorage.setItem("variableOne", myVariable) // to show local storage in browser under "application"

window.localStorage.setItem("name", "Julie") 

// Save Objects
// Save Arrays

let car = {     // You need to convert this to a string because the window will save strings
    make: "bmw",
    model: 1992,
    price: 2000
}

// window.localStorage.setItem("myCar", JSON.stringify(car));

// const myCar = window.localStorage.setItem("fav", "bmw");

// console.log(myCar)

// // PARSE

// const myCarParsed = JSON.parse(myCar);

// console.log(myCarParsed)


/* use local storage
create threee items there 
first is a variable
second is an object
third is an array 

store the date in the local storage 
and then get the items from the local storage
please use the JSON.stringify and JSON.parse */

let puddingFlavor = "Chocolate";
let coffe = {
    origin: "South Africa",
    intensity: "medium 7"
}
let shoppingList = ["coffe", "jam", "milk"];


window.localStorage.setItem("PuddingFlavor", puddingFlavor);

window.localStorage.setItem("coffe", JSON.stringify(coffe))


let getShoppingList = window.localStorage.getItem("shoppingList");

let shoppingListParsed = JSON.parse(getShoppingList);

console.log(shoppingListParsed);



// window.localStorage.setItem("myCar", JSON.stringify(car));

// const myCar = window.localStorage.setItem("fav", "bmw");

// console.log(myCar)