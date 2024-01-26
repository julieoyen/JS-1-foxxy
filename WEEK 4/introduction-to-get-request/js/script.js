const API_URL = "https://catfact.ninja/facts";
const factsContainer = document.querySelector(".facts-container");

//GET
fetch(API_URL, {method: 'GET'}).then((response) => response.json())
              .then((factsData) => {
                const totalNumberOfFacts = factsData.data.length;
                for(let i = 0; i < totalNumberOfFacts; i++){
                    factsContainer.innerHTML +=` 
                    <div>
                    <span>${factsData[i].facts}</span>
                    </div>`
                }

                

              })