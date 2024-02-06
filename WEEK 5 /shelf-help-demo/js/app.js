const bookListDiv = document.getElementById('book-list')
let bookData = []


// fetch the book data

// fetch('http://localhost:3000/books/1') // (ADD URL)
// .then( (response) => response.json())                     
//     .then((bookResultData ) => {
//         bookData = bookResultData;

//         for(const book of bookData){   
//             displayBook(book)
//         }

//         // bookData.forEach(book => {       same as above, just different syntax
//         //     console.log(book.title)

//         });  
              

        fetch("http://localhost:3000/books")
          .then((response) => response.json())
          .then((bookResultData) => {
            bookData = bookResultData;
            for (const book of bookData) {
              displayBook(book)}})

// document.createElement()

//dowhile or while loop if you dont know the length of loop 
// for each loop is used for collections

// will make it easier to swap out everytime you use it with a function
function displayBook(book){
    const bookDiv = document.createElement('div');
    const bookTitleParagraph = document.createElement('p');
    const bookImg = document.createElement("img");
    bookImg.src = 'http://localhost:3000/assets/images/${book.coverImg}'
    bookImg.alt = "a picture of a book"
    bookDiv.appendChild(bookImg)
    bookTitleParagraph.innerText = book.title;
    bookDiv.appendChild(bookTitleParagraph);
    bookListDiv.appendChild(bookDiv);}


// function displayBook(book) {
//     const bookDiv = document.createElement("div");
//     const bookTitlePara = document.createElement("p");
//     bookTitleParagraph.innerText = book.title;
//     const bookImg = document.createElement("img");
//     bookImg.src = `http://localhost:3000/assets/images/${book.coverImg}`
//     bookImg.alt = "a picture of a book"
//     bookDiv.appendChild(bookImg)
//     bookDiv.appendChild(bookTitlePara);
//     bookListDiv.appendChild(bookDiv);
//   }