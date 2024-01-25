// ONKEYUP

// function myFunction(){
//     alert("hello you released a key") // popup melding
// }

const firstNameInput = document.querySelector("#first-name")
const formSignupBTN = document.querySelector("#signup-BTN")
const errorMessage = document.querySelector("#first-name-error-message")
const passwordInput = document.querySelector("#password")
const errorPassword = document.querySelector("#password-error-message")



// 1. I want to trigger an onkeyup event when I write something
// in the input of first name


firstNameInput.onkeyup = function(event){
    let firstNameInputValue = event.target.value;
    
    

//condition = if the totalNumberOfCharsFirstName > 5
// formSignupBTN disabled will be false
// else it will be true

if(firstNameInputValue.length >= 5){
    formSignupBTN.disabled = false;
    errorMessage.innerHTML = "Your name is suitable";
    errorMessage.classList = "success"; // adding another class for CSS
    
} else{
    formSignupBTN.disabled = true; 
    errorMessage.innerHTML = "Your name is too short";
    errorMessage.classList = "error"; // adding another class for CSS

}

}

// firstNameInputValue.length >= 5 ? formSignupBTN.disabled = false : formSignupBTN.disabled = true;


passwordInput.onkeyup = function(event){
    let passwordValue = event.target.value

    //switch case
    // i check on the total number of chars

    let totalNumberOfCharsInPass = passwordValue.length;
    console.log(totalNumberOfCharsInPass)

    if((totalNumberOfCharsInPass === "123456")){
        errorPassword.innerHTML =  "💩 you need to think about your life decisions";
    } else if (totalNumberOfCharsInPass <= 3) {
        errorMessage.innerHTML = "🙁 your password is weak";
    } else if(totalNumberOfCharsInPass <= 5) {
        errorMessage.innerHTML = "😃 ah your password is average"
    } else if (totalNumberOfCharsInPass <= 8 ){
        errorMessage.innerHTML = "😍 your password is damn good"
    } else if(totalNumberOfCharsInPass >= 25){
        errorMessage.innerHTML = "👺 Come on! You'll never remember this password!"
    }
}