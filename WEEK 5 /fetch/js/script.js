// // // data

// // let todo1Name = "Learn JS functions"
// // let todo1Done = true
// // let todo1Date = "Tuesday"
// // let todo2Name = "Learn JS arrays"
// // let todo2Done = false
// // let todo2Date = "wednesday"


// // //this is more intuitive
// // let todo1 ={
// //     name: "Learn JS functions",
// //     done: true,
// //     date: "Tuesday"
// // }

// // console.log(todo1.name)

// let todos = []


// let todo = fetch(
//     'https://jsonplaceholder.typicode.com/todos')
//     .then(function(httpResponse){
//         console.log(httpResponse)
//         // How do i extract the data
//         return httpResponse.json()
//     })
//     .then(todoResult => {      // instead of writing functions like function(todoResult), write todoResult =>
//         todos = todoResult
//     });

// console.log("this is a test")

// // POST
// fetch ('https://jsonplaceholder.typicode.com/todos',
// {
//     method: "POST",
//     body: JSON.stringify({
//         title: "foo",
//         body: "bar",
//         userId: 1,
//     }),
//     headers: {
//         "Content-type": "application/json; charset=UTF-8",
//     },
// }).then((httpResponse) => console.log(httpResponse))

//     console.log("other stuff") //loads faster than the above code

//     // show it to the users


//     // DELETE 

//     fetch ('https://jsonplaceholder.typicode.com/todos/1',
//     {
//         method: "DELETE",
//         headers: {
//             "Content-type": "application/json; charset=UTF-8",
//         },
//     }).then((httpResponse) => console.log(httpResponse))

    




// // let joke = []

// // let jokes = fetch ('https://official-joke-api.appspot.com/random_joke')
// // .then(function(httpResponse){
// //     console.log(httpResponse)
// //     return httpResponse.json()
// // })
// // .then(jokeResult => {
// //     joke = jokeResult
// // });


// // let todos = [];

// // fetch ('https://jsonplaceholder.typicode.com/todos')
// // .then (function (httpResponse){
// //     console.log(httpResponse)
// // })
// // .then((data) => console.log(data));




// // //  ----> go fetch I promise to forward to .then
// // // -----> await going to fetch on this line of code
// // // -----> i will wait until thats done and then i will forward to the next line


// // async function getTodos(){
// //     let httpResponse = await fetch ('https://jsonplaceholder.typicode.com/todos')
// //     let data = await httpResponse.json();
// //     console.log(data);
// // }

// // getTodos();