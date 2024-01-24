// TRIM

// const carName = "       B         M       W         ";

// trim()
// Will remove the spaces for you
// and show you a beautiful string
// expected result = BMW

// const trimmedCarName = carName.trim().replace(/[^a-zA-Z0-9]/g, '');

// console.log(trimmedCarName)

/* Create the function find (arr, value),
which looks for the value in the array
arr and returns it's number,
if found, or -1 if not found.*/


function find(arr, value){
    for(let i = 0; i < arr.length; i++){
    if(arr[i] === value){
    return arr[i];
    }
}
return -1;
}



const myArray = [1, 2, 3, 18, 2000]
const valueToSearchFor = 18
let isNumber = find(myArray, valueToSearchFor)
// find([1, 2, 3, 18, 2000], 18)

console.log("IsNumber:", isNumber)