// function sum(num1, num2){
//     return num1 + num2
// }

// function sumWithThree (num1, num2, num3){
//     return num1 + num2 + num3
// }

// console.log(sumWithThree(1, 6, 6))

// // function sum(...numbers){
// //     let total = 0
// //     for (const number of numbers){
// //         total +=number
// //     }
// //     return total
// // }

// console.log(sum(1, 6, 6,));

// // SPREAD OPERATOR

// let numbers = [1,2,3,4,5,3,56,67,7]

// // ...numbers  is the same as above [1,2,3,4,5,3,56,67,7]

// function sum(...numbers){
//     let total = 0
//     for (const number of numbers){
//         total +=number
//     }
//     return total
// }

// console.log (sum(numbers[0], numbers[2]))
// console.log(sum(...numbers))

// let duck = {
//     id: 1,
//     name: "Tim",
//     habitat: "Swamp",
//     height: 25,
//     diet: "Green stuff"
// };

// let NewDuck = {
//     ...duck,
//     dangerous: false
// }

let numbers = [1, 2, 3, 4, 5, 3, 56, 67, 7];

let copyOfNumbers = [...numbers]; // spread operator

copyOfNumbers.push(1000);

console.log(numbers);

console.log(copyOfNumbers);

let duck = {
  id: 1,
  name: "Tim",
  habitat: "Swamp",
  height: 25,
  diet: "Green stuff",
};

duck = {
  ...duck,
  id: 4,
};
