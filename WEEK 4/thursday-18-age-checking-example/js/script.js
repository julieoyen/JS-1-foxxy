
const ageInput = document.querySelector("#age");
const enterBTN = document.querySelector(".enter-BTN")

enterBTN.addEventListener("click", function(){
    const age = ageInput.value;
    const isAgeOk = isOldEnough(age);
    console.log("is age ok: ", isAgeOk)
    if(isAgeOk){
        document.location.href = "welcome.html"
    } else {
        alert("Sorry, you are not old enough yet.")
    }
})

function isOldEnough(ageToCheck){
if(ageToCheck >= 13){
    return true;
}
return false;
}
