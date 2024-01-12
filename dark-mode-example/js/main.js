
window.localStorage.clear // CLEAR YOUR LOCALSTORAGE


// addEventListner
// onclick


// 1. select the body
const body = document.querySelector("body");
//2. Select the dark mode btn
const darkModeBtn = document.querySelector(".mode-btn")

console.log(body);
console.log(darkModeBtn);
var isDarkMode = false;

function init(){
// it will get for me the darkmode status
// it will change the body background color
let darkMode = window.localStorage.getItem("darkMode")
console.log("current mode: ", darkMode)

if(darkMode){
    body.style.backgroundColor = "#0A0A0A"
} else {
    body.style.backgroundColor = "#FFFFFF";
}
}

init()


console.log("isDarkMode before", isDarkMode)

function toggleMode(){
    isDarkMode = !isDarkMode;
    //localstorage to save my isDarkMode
    window.localStorage.setItem("darkMode", isDarkMode)

    if (isDarkMode) {
     body.style.backgroundColor = "#0A0A0A"
     darkModeBtn.style.backgroundColor= "#0A0A0A"
    } else{
        body.style.backgroundColor = "#FFFFFF"
        darkModeBtn.style.backgroundColor = "#FFFFFF"
        
    }

  
    console.log("isDarkMode after i click", isDarkMode)
}

darkModeBtn.addEventListener("click", toggleMode);


