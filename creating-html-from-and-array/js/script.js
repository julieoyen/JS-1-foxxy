// const pets = [
//     {
//         type: null,
//         colour: "brown",
//         age: 10,
//         friendly: true,
//     },
//     {
//         colour: "orange",
//         age: 7,
//         friendly: false,
//     },
//     {
//         type: "duck",
//         colour: "#00ff00",
//         age: 20,
//         friendly: false,
//     },
// ];

// // Select the pet-container class

// // Create a html variable to hold our html in it when we use the loop
// // Loop over the array
// // change the innerHTML of the petContainer

// const petContainer = document.querySelector(".pet-container");
// console.log("Petcontainer = ", petContainer)

// let html = "";

// const totalItemsOfPets = pets.length;
// console.log(totalItemsOfPets)

// for( i = 0; i < totalItemsOfPets; i++){
//     console.log(pets[i].colour)  // .color if you want to select color in the object

//     html += `
//     <div>
//     <p>Colour: ${pets[i].colour}</p>
//     <h2> Age: ${pets[i].age}</h2>
//     <p> Friendly: ${[i].friendly ? "Yes, its friendly" : "No, its not friendly"}</p>
//     </div>
//      `;
//      console.log(html)
// }

// petContainer.innerHTML = html;


const books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        available: true
    },
    {
        title: "1984",
        author: "George Orwell",
        available: false
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        available: true
    }
];


const bookContainer = document.querySelector(".book-container");
console.log(bookContainer);

let html = "";

const totalOfBooks = books.length;
console.log(totalOfBooks);


for( i = 0; i < totalOfBooks; i++){
 console.log(books[i]);

 html += `
     <div>
     <h2> Title: ${books[i].author}</h2>
     <h3> Author: ${books[i].title }</h3>
     <p> Available: ${books[i].available ? "Available" : "Not Available"}</p>
     </div>`
}
   bookContainer.innerHTML= html;

   