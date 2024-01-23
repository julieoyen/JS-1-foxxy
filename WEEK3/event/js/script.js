// Q1.

// function expression
// function assigned to a variable
const someFunction = function (){
    console.log("hello i am hesh")
}

//normal function of JS
saySomethingFunction();

function saySomethingFunction (){
    console.log("hello Truls")
}


// Q2.

//addEventListener
// select the .btn

const button = document.querySelector(".btn");

console.log(button)

// way 1

const handleClickTwo = function(){
    console.log("omg you clicked on me")
}
button.addEventListener("click", handleClickTwo)

// or 

button. addEventListener("click", function(){
    console.log("omg you clicked on me")
})

// or 

button.addEventListener("click", handleClick)

function handleClick(){
    console.log("omg you clicked on me")
}

// way 2

button.onclick = function(){
    console.log("you did it again, this time with onclick")
}

button.onclick = function(event){
   console.log(event.target.value)
   console.log(this.value)
}

// Q3 key press

// onKeyDown // the event will trigger when you press on
//onKeyUp // the event will trigger when you release
//the onKeyPress

// onKeyDown upKeyUp NO ONE IS USING ANYMORE and onKeyPress

const myFirstNameInput = document.querySelector("#firstName");

console.log("myFirstNameInput", myFirstNameInput)

const handleKeyPress = function (event){
    console.log("a key is pressed")
    console.log(this.value)
    console.log(event.target.value)
}

myFirstNameInput.addEventListener("keydown", handleKeyPress)


// Q4. Hover effect (detecting hover)

const theHoverBtn = document.querySelector(".pet-btn");

const handleMouseOver = function(){
    //change the backgroundcolor

    this.style.backgroundColor = "pink";
}
const handleMouseOut = function(){
   this.style.backgroundColor = "white";
}

theHoverBtn.addEventListener("mouseover", handleMouseOver);
theHoverBtn.addEventListener("mouseout", handleMouseOut);




