// // setTimeout

// /* it is a method (function) is used to execute a function
// after a specific period of time */

// // 1. 

// setTimeout(function(){
//     console.log("Hello Julie")  // will load after 5 seconds
// }, 5000); // 5000 = 5 seconds

// setTimeout(logHello, 5000)

// function logHello (){
//     console.log("Hello Henny");
// }

// /*---------------task--------------------- */

// // 1. We select the loader element with class .loader

// const loading = document.querySelector(".loader");

// // 2. Use the setTimeout 

// setTimeout(function(){
//     //3. change the inner HTML of the loading
//     loading.innerHTML = "Finished Loading"
// }, 5000);

// /* ----------task finished--------------- */


// const counterContainer= document.querySelector(".counter")

// let timeLeft = 10;

// //if the time left >0 do this:

// // 1. every 1 second 
// //2. change innerHTML
// //3. reduce the timeLeft by 1
// //4. condition

// setTimeout(function(let ){

   
// }, 1000)


//else
// counterCointainer innerHTML to be counter finished

/* -------------- new task----------- */

//1. select the container of the ad
const offer = document.querySelector(".ad")

//2. setTimeout

setTimeout(function(){
    offer.style.display = "block";
}, 3000)



