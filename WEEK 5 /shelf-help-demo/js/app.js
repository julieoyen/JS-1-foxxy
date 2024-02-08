// Need the shelf help JSON server to be running on http://localhost:3000

localStorage.setItem("message", " I just stored something in localStorage");

// how do i access it the local storage
// in console.log

console.log(localStorage.getItem("message"));

// if i want to clear the local storage
localStorage.clear();

// session storage clears itself out after you close
sessionStorage.setItem("message", " I just stored something in localStorage");

const bookListDiv = document.getElementById("book-list");
const filterButton = document.getElementById("btnfilter");

filterButton.addEventListener("click", filterByAuthor);

let bookData = [];

// fetch the book data

fetch("http://localhost:3000/books")
  .then((response) => response.json())
  .then((bookResultData) => {
    bookData = bookResultData;
    for (const book of bookData) {
      displayBook(book);
    }
  });

function displayBook(book) {}

function displayBook(book) {
  const bookDiv = document.createElement("div");
  const bookTitleParagraph = document.createElement("p");
  const bookImg = document.createElement("img");
  const bookAuthor = document.createElement("author");

  bookImg.src = `http://localhost:3000/assets/images/${book.coverImg}`;
  bookImg.alt = "a picture of a book";

  bookAuthor.innerText = book.author;
  bookTitleParagraph.innerText = book.title;

  bookDiv.appendChild(bookImg);
  bookDiv.appendChild(bookTitleParagraph);
  bookDiv.appendChild(bookAuthor);
  bookListDiv.appendChild(bookDiv);
}

// //example
// let chair = {
//     color: "Grey",
//     height: 67,
//     swivel(){
//         console.log("That chair totally swivelled")
//     }
// }

// chair.swivel()

// ANOTHER EXAMPLE

// let jsonBook = // add json

// //converts JSON to a JS object
// let bookJSObject = JSON.parse(jsonBook);

// //makes it into json again

// let jsonBook = JSON.stringify(bookJSObject)

function filterByAuthor(authorToFilterBy) {
  console.log("works");
}

//filter array

let filteredResults = [];

for (const book of bookData) {
  if (book.author === authorToFilterBy) filteredResults.push(book);
}
