// Set Interval

// SetInterval method is similar to the setTimeout but
// it executes a function at a certain interval until it is cleared
// count = 0

// const intervalId = setInterval(function(){
//     console.log("Hello");
//     count++; // increment
//     if(count === 5){
//         clearInterval(intervalId);  // stops counting at 5
//     }

// }, 1000); 


// 


const container = document.querySelector(".container");

let counter = 0

const ulList = setInterval (function(){
    counter++;
    container.innerHTML += `<li> Hesh the ${counter} </li>`; 
    // i want to clear the interval if i reach counter of 5
    if(counter === 5){
        clearInterval(ulList)
    }
}, 1000);


//


