const article = document.querySelector("#post");
const seeMoreBTN = document.querySelector("#seemore-BTN");
const postImg = document.querySelector("img");
console.log(postImg)
// Q1. I have a btn in my HTML when I click on this button
// I want to show a alert with the author and the category



seeMoreBTN.onclick = function (){
alert(`The book author is ${article.dataset.author} and the category is ${article.dataset.category}.`);// popup melding
}

// function seeMoreBTN (author, category){
//     alert(`The book author is ${author} and the category is ${category} `);           // ?? something is missing
// }

// make image bigger when clicked on

postImg.addEventListener("click", function(){
    window.open(postImg.dataset.fullsize);
});
