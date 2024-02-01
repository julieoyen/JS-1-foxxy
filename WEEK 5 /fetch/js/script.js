// // data

// let todo1Name = "Learn JS functions"
// let todo1Done = true
// let todo1Date = "Tuesday"
// let todo2Name = "Learn JS arrays"
// let todo2Done = false
// let todo2Date = "wednesday"


// //this is more intuitive
// let todo1 ={
//     name: "Learn JS functions",
//     done: true,
//     date: "Tuesday"
// }

// console.log(todo1.name)

// let todos = []

// let todo = fetch(
//     'https://jsonplaceholder.typicode.com/users')
//     .then(function(httpResponse){
//         console.log(httpResponse)
//         // How do i extract the data
//         return httpResponse.json()
//     })
//     .then(todoResult => {      // instead of writing functions like function(todoResult), write todoResult =>
//         todos = todoResult
//     });

//     console.log("other stuff") //loads faster than the above code


    // show it to the users


let joke = []

let jokes = fetch ('https://official-joke-api.appspot.com/random_joke')
.then(function(httpResponse){
    console.log(httpResponse)
    return httpResponse.json()
})
.then(jokeResult => {
    joke = jokeResult
});
