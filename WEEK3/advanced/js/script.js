// Create an empty user object
// Add name property with the name Jonas
// Add a surname property with the value the The Great
// Change the calue of the name to Helene
// Remove the name property of the object.

let user = {

}

user.name = "Jonas";

user.surname = "The Great"
console.log(user)

user.name = "Helene";
console.log(user)

delete user.name; 
console.log(user)

/* -------------------------------------------------- */

// Create a function isEmpty
//that returns true if the object 
// has no properties and false if there is at least one property 



function isEmpty(obj){
    for(let key in obj){
        return false
    }
    return true;
}

const isMyObjectEmpty = isEmpty({})

console.log(isMyObjectEmpty)


/* -------------------------------------------------- */

// given an array of numbers: [1, 2, 31, 24, -67, 5, 3, 555, 79, -4, 21, 33, 89, -90]
// 1. find the maximum and minimum value and minimum value of the array.
// 2. write all postive and even numbers into another array
// 3. display the results on the screen

let numberArray = [1, 2, 31, 24, -67, 5, 3, 555, 79, -4, 21, 33, 89, -90]
numberArray.sort(function (a, b){
    return a - b
});

console.log(numberArray);
console.log(numberArray[0]);                      // finne første number
console.log(numberArray[numberArray.length -1]); // finne siste number



// // Initializing numbers array
// let numbers = [10, 23, 12, 21];
 
// // Declaring empty Even array
// let even = [];
// for(let i = 0; i < numbers.length; i++) {
//        if (numbers[i] % 2 == 0)
//        even.push(numbers[i]);
// }
 
// // Printing output
// console.log(`Even numbers in an array are: ${even}`);

let even = [];
for(let i=0; i < numberArray.length; i++){
    if (numberArray[i] % 2 == 0){
        if(numberArray[i] > 1 ){
            even.push(numberArray[i]);

        }
    }
}

console.log(even)





















