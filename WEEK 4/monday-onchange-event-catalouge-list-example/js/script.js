// 1. SELECT MY DROPDOWN

const dropdown = document.querySelector("#circles")
const circlesContainer = document.querySelector(".circles-container")

dropdown.onchange = function(event){
    circlesContainer.innerHTML = ""; // make it empty when you change to another list item ( instead  of 1234512345678910, it will be 12345678910)
    // console.log("Hello");
    // console.log("event: ", event.target)
    // console.log("event: ", event.target.value) // if you choose 5 - the outcome is 5
    for(let i = 1; i <= this.value; i++){
        circlesContainer.innerHTML += `
        <li class="circle">${i}</li>
        `
    }
}
