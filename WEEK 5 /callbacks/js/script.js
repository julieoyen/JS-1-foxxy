// #REGION FUNCTION TYPES

// function doSomething() {
//     console.log("I just do something -> void");
//     console.log("I just do something -> void");
//     console.log("I just do something -> void")
//     console.log("I just do something -> void")
//     console.log("I just do something -> void")
    






//     console.log("I just do something -> void")
//     console.log("I just do something -> void")
//     console.log("I just do something -> void")
//     console.log("I just do something -> void")
// }

// Void
// doSomething()


// function doSomethingWithData (someData){
//     console.log("I just do something with someData here it is " + someData)
// }
// // Void with some parameters
// doSomethingWithData("Some sweet string")

// //
// function doSomethingReturnsAString() {

//     return "this is easy"
// }

// let result = doSomethingReturnsAString() + doSomethingReturnsAString()

// console.log(result)

// //

// function doSomethingReturnsASomething(someData) {

//     return "this is easy" + someData
// }

// let result2 = doSomethingReturnsASomething("ikke sant?")
// console.log(result2)

// #ENDREGION
 

// #region HOF and Callbacks

//High order function
// function doSomething(someParam) {
//     console.log("do something -> void");
//     console.log("do something -> void");
//     console.log("do something -> void");

    

    
//     someParam()



//     console.log("I do something");
//     console.log("I do something");
//     console.log("I do something");
// }

// doSomething(function(){console.log("I am callback")})

//#endregion


// #region fetch

fetch('https://catfact.ninja/facts',(response) => {
console.log(response);
});

