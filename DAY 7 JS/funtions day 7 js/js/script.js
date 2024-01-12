// /* I want to create a function in my calculaer app to sum three numbers 
// please write this function for me */

// // function addThreeNumbers(num1, num2, num3){
// //     return num1 + num3 + num3;
// // }

// // addThreeNumbers(10, 2, 30);

// // let result = addThreeNumbers(10, 20, 50)

// // console.log("result: ", result)

// // 


// /* Function creation:
// Write a function called multiplyThreeNumbers. 
// It should take three parameters: num1, num2, num3.

// Function Logic: Inside the function, return the product of the three numbers.

// Testing the function: 
// Call the functuon with three numbers of your choice and store the product result in a variable

// Output the product result:
// use console.log to print the result
// */

// // function multiplyThreeNumbers(num1, num2, num3){
// //     return num1 * num2 * num3;
// // }

// // multiplyThreeNumbers(23, 11, 13);

// // let result = multiplyThreeNumbers(23, 11, 13)

// // console.log("Result: ", result)


// //

// /*

// 1. Please select the heading h1 and when I click on the btn "change heading",
// change it to be "its a good day"

// 2. When I click on the btn "change colours" I would like to change the background
// color of the body to be blue
// and the heading h1 to be green

// */

let heading = document.querySelector("h1")

let button = document.querySelector("button")

let buttonColours = document.querySelector(".colours")

let body = document.querySelector("body")


function changeHeading(){
    heading.innerHTML = "It's a good day"
}                                        // only hit return if e.g. multiplication

button.onclick = changeHeading;


function changeColours(){
    body.style.backgroundColor = "lightBlue"
    heading.style.color = "blue"
}

buttonColours.onclick = changeColours;




// 

function logWord(){
    console.log("im julie");
}

logWord(); // i called the function right away


// //

// // FUNCTIONS INSIDE OBJECTS

const pet = {
    type: "cat",
    name: "Chessy",
    age: 1,
    isFriendly: true,
    meowMeow: function(){ 
        console.log("The sound of the cat");
    }
};

console.log("type: ", pet.type)


let buttonMeow = document.querySelector(".meow-meow")
    

function changeButton(){
    button.innerHTML = pet.meowMeow
}

buttonMeow.onclick = pet.meowMeow


//

