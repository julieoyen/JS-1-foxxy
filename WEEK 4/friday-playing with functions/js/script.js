// Variable functions

const showPetName = function(name){
    console.log("the pet name is " + name);
}

showPetName("Chessy")
///
showPetNameTwo("Kasper")
function showPetNameTwo (name){
    console.log("the pet name is " + name);
}




//

// FAT ARROW FUNCTIONS

const showPetNameThree = (name) => {            // Arrow replace function word
    console.log("the pet name is " + name);
}
const showPetNameFour = (name) => console.log("the pet name is " + name);

const numbers = (sum1, sum2) => console.log(`The sum is `, sum1 + sum2);

numbers(3, 4);


