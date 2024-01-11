// 1. variables

// Ecmascript 5

// ES 5

var name = "anniken";

name = "hesh";


// ES6

let secondName = "Tom";

secondName = "alex"

const thirdName = "marius"

// thirdName = "julie" // not possible because thirdName is constant CONST

// 2. console.log -- console.dir -- console.info // yellow // console.error

// 3. >= <= = == ===

"H" == "h"
// true because we are not using strict equality

"H" === "h" 
// false because we are using strict equality

// 4. CONDITIONS

// if(){}

// switch case


// 5. OBJECTS

let car = {
//   key  :  value
    color : "red",
    model : "BMW", 
    year : "1992", 
    VIN : 234242342342 
}

console.log(car.color);
console.log(car["color"]);


// 6. FOR LOOPS

//starting point // condition // increment (add)
for(let i = 1; i < 11; i++){
    console.log(i);
}

// 7. ARRAY     camel case?

let myBigBox = ["julie", 23 , false, {name: "henny"}];
console.log(myBigBox.length) // i will get how many items are in the array

console.log(myBigBox[3].name) //find henny

// how to get the last item of the array 

const lastItemIndex = myBigBox.length -1;
console.log("last item in index:", lastItemIndex)

console.log(myBigBox[lastItemIndex]);

// 8. looping over an array

for(let i = 0; i < myBigBox.length; i++){
    console.log(myBigBox[i])
}

// 9. CONCATINATION 

let name1 = "Anniken";
let secondName1 = "Hesh";
let thirdname1 = "Patrick";

let myParagraph = "Hello " + name1 + " and hello " + secondName1 + " and hello my friend " + thirdname1;
console.log("using quotes", myParagraph)

myParagraph = `Hello ${name1} and hello ${secondName1} and hello ${thirdname1}`;
console.log("using backticks: ", myParagraph);

// 10. FUNCTIONS    

function logWord (){
    if (name){
    console.log("Hello " + name + " sir");
} else {
    console.log("sorry :(");
}}

logWord(); // you run the function one time
logWord(); // second time .... you can use it several times
logWord();
logWord();
