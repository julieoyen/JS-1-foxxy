

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// //looping or iteration

// // i is now 1
// // will + 1 each round

// for (let i = 1; i <= 5; i++ ){  // will stop when reaching 5
//     console.log("it is now " + i);

// }




// LOOP IS FOR REPEATING!!!

// for(initialization ; condition ; increment)

// for(let i = 0; i < 5; i++){
//     console.log(i)
// }

// i = 0
// i = 0 + 0 = 0 true
// i = 0 + 1 = 1 true
// i = 1 + 1 = 2 true
// i = 2 + 1 = 3 true
// i = 3 + 1 = 4 true
// i = 4 + 1 = 5 false

// Task 1: Print numbers

// Write a for loop that prints numbers 1-10

// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }

            //   0       1       2         3 
const cars = ["Tesla", "BMW", "Volvo", "Toyota"]

console.log(cars[0]) // How to find a certain car
 
console.log(cars.length) // to find out how many items are inn the [array]

const totalNumberOfCars = cars.length;

for(let i = 0; i < totalNumberOfCars; i++){
    console.log(cars[i]) 
}

/* Given an array of fruits,
write a for loop to print
each fruit in the array */

const fruits = ["Apple", "Banana", "Cherry"];

console.log(fruits.length)

const totalNumberOfFruits = fruits.length;

for(let i = 0; i < totalNumberOfFruits; i++){
console.log(fruits[i])
}

// How  to get the last item in an array
console.log("Total number of array", fruits.length);
console.log("last number in the array", fruits.length - 1);
console.log(fruits[fruits.length -1 ])
