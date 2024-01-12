// let news = [
//     {
//         headline: "Watch Hesh landing on the moon",
//         summary: "He landed with his superjet"
//     },
//     {
//         headline: "Watch minions",
//         summary: "Minions ips gelatooo uuuhhh para tú bappleees para tú tank yuuu! Gelatooo po kass. Bappleees poopayee tulaliloo pepete belloo! Wiiiii. Baboiii hana dul sae bappleees pepete hana dul sae po kass po kass baboiii. Belloo! hahaha baboiii poopayee hahaha belloo! La bodaaa bee do bee do bee do chasy. Pepete poopayee tank yuuu! Butt la bodaaa wiiiii aaaaaah ti aamoo! Poulet tikka masala. Tatata bala tu daa ti aamoo! Poulet tikka masala poopayee wiiiii bappleees hana dul sae ti aamoo! Jeje belloo!"
//     }, 
//     {
//         headline: "Watch the GRU scream",
//         summary: "Minions ipsum gelatooo uuuhhh para tú bappleees para tú tank yuuu! Gelatooo po kass. Bappleees poopayee tulaliloo pepete belloo! Wiiiii. Baboiii hana dul sae bappleees pepete hana dul sae po kass po kass baboiii. Belloo! hahaha baboiii poopayee hahaha belloo! La bodaaa bee do bee do bee do chasy. Pepete poopayee tank yuuu! Butt la bodaaa wiiiii aaaaaah ti aamoo! Poulet tikka masala. Tatata bala tu daa ti aamoo! Poulet tikka masala poopayee wiiiii bappleees hana dul sae ti aamoo! Jeje belloo!"
//     },
   
// ];

// console.log(news);


// let newsContainer = document.querySelector(".news")
// console.log(newsContainer)

// var newsLength = news.length
// console.log(newsLength)

// let generatedHTML = "";   // once u understand, put e.g. newsItems

// for(let i = 0; i < newsLength; i++ ){
//     console.log(news[i])

//     generatedHTML = generatedHTML + `
//     <div>
//          <h2> ${news[i].headline}
//          </h2>
//         <p> ${news[i].summary}
//         </p>
//     </div>`
// }

// newsContainer.innerHTML = generatedHTML;






const cats = [
    {
        name: "Kasper",
        age: 12
    },
    {
        name: "Chessy",
        age: 14
    },    {
        name: "Simba",
        age: 6
    }
];


const dogs = [
    {
        name: "Jesper",
        age: 12
    },
    {
        name: "Leika",
        age: 14
    },    {
        name: "Mikke",
        age: 6
    }
];

function getName(list){
    for(let i = 0; i < list.length; i++){
        console.log(list[i].name)
    }
}

// for(let i = 0; i < cats.length; i++){
//     console.log(cats[i].name)
// }

getName(cats);
getName(dogs)

function createShoppingList(shoppingList){
    let myShoppingListItems = "";
    for (let i =0; i < shoppingList.length; i++){
        myShoppingListItem += `
        <div>
        <h2>${shoppingList[i].price}</h2>
        <h3>${shoppingList[i].price}</h3>
        </div>
        `
    }
    return myShoppingListItems
}

let julieShoppingListContainer = [
    {
        name: "orange juice",
        price: 30
    },
    {
        name: "boccoli",
        price: 20
    },
    {
        name: "chocolate",
        price: 45
    }
]

const julieShoppingList = document.querySelector(".julie-shopping-list");

julieShoppingListContainer.innerHTML = createShoppingList


