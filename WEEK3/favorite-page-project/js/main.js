import productsData from "./data/products.js";


// 1. select the products container
const productsContainer = document.querySelector(".products-container");

// I want to get the saved favorite products in the local storage

// const savedFavoriteProducts = window.localStorage.getItem("favorites"); // WE NEED TO PARSE IT
const savedFavoriteProducts = JSON.parse(window.localStorage.getItem("favorites"));
console.log("savedFavoriteProducts: ", savedFavoriteProducts) 

// I need to compare the saved array of fav products and the products data i already have
// 2. fill the container of the products with products


for (let i = 0; i < productsData.length; i++) {
    let cssClass = "";
   
   const doesObjectExist = savedFavoriteProducts.find(function(fav){
        return parseInt(fav.id) === productsData[i].id
    });
    console.log("doesObjectExist: ", doesObjectExist)

    if (doesObjectExist){
        cssClass = "active-heart"
        console.log("doesObjectExist: ", doesObjectExist)


    }



    console.log("Product: ",productsData[i]);
    productsContainer.innerHTML += `
            <div class="product">
                <img alt="random photo" src="https://picsum.photos/200" />
                <h3>${productsData[i].name}</h3>
                <h4>NOK ${productsData[i].price}</h4>
                <span class="heart-container">
                    <svg class="heart ${cssClass}"
                    data-name="${productsData[i].name}"
                    data-id="${productsData[i].id}"
                    data-price="${productsData[i].price}"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                         fill="none"
                         stroke="#000000"
                         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                </span>
            </div>
    `;
}

// 3. check if any of the FAV btns hearts clicked
const hearts = document.querySelectorAll(".heart");

console.log("hearts: ", hearts);
// loop on the dom elements I selected hearts all the elements
// with class heart

let favsToSave = []                        // why the empty array
for (let x = 0; x < hearts.length; x++) {
    console.log(hearts[x]);
    hearts[x].addEventListener("click", function () {
        console.log("hey you clicked me i am the heart with index", hearts[x]);

        console.log("this.classList: ", this.classList);
        this.classList.toggle("active-heart");

        console.log("this dataset:", this.dataset)

        let productILikeToSave = {
            id : this.dataset.id,
            name : this.dataset.name,
            price:this.dataset.price
        }
        console.log("productILikeToSave: ",productILikeToSave)

        favsToSave.push(productILikeToSave);
        saveFavs(favsToSave);
    });
}

function saveFavs(favoriteProducts){
    console.log("favs: ", favoriteProducts)
    window.localStorage.setItem("favorites", JSON.stringify(favoriteProducts));
}
