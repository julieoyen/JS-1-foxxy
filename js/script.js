console.log("Hello")

// 1. IF AND ELSE STATEMENTS

let temp = 35;

if(temp > 34){
    console.log("Hide inside man, it is too hot!")
} else if (temp > 30){
    console.log("It is very hot man!!")
} else if(temp >20){
    console.log("The temperature is nice!")
} else{
    console.log("The weather is very cold");
}

// At my school my students had and exam. Some students 
// got a high and low score. I want to write an if else
// statement to check if the score is high or low. 
// if the score is less than 50 = fail
// if the score is more than or equal the student pass

// please use the variable score

let score = 60

if (score >=50){
    console.log("Pass");
} else {
    console.log("Fail");
}


// A means very good
// B means good
// C means avarage
// D means you need to start doing something else
// Otherwise you failed badly

let score2= "A"

if(score2 === "A"){
    console.log("Very good. You got an \n"  + score2);
} else if (score2 === "B"){
    console.log("Good!");
} else if (score2 === "C"){
    console.log("Average");
} else if (score2 === "D"){
    console.log("You need to start think about doing something else, because you suck at this!");
} else {
    console.log("You failed badly!!!");
}

//    \n = is if you are writing a lot and need to skip to the next line





// 2. SWITCH CASE

let color = "red";

switch (color){
    case "red":
        console.log("Stop!");
        break;
    case "yellow":
        console.log("Get ready!");
        break;
    case "green":
        console.log("GO!");
        break;
    default:
        console.log("No traffic lights go murder people!");
}


// Task 3

let grade = "C";

switch (grade){
    case "A":
        console.log("'A'. " + "Outstanding!");
        break;
    case "B":
        console.log("'B'. "  + "Very good!");
        break;
    case "C":
        console.log("'C'. "  + "Good effort!");
        break;
    case "D":
        console.log("'D'. "  + "Needs improvement.");
        break;
    case "F":
        console.log("'F'. "  + "Failed. Must retake exam.");
    default:
        console.log("Invalid grade");
}

// 3. SCOPE - I NEED TO UNDERSTAND THIS VERY VERY WELL

// var name = "hesham"; // Global scope

// let name = "hesham"; // Function scope

// A declared name with VAR will cause me issues because if you make an IF rule, it will continue to declare it outside.
// with LET you have to declare it outide for it to work outside,

let message = "Hello";

if(true) {
    let message = "Hi";
    console.log(message)
    message = "Hello Man";
    console.log(message)

}

// const you define once in your application
// let you define it and then you can change it

const MY_NAME = "Julie"

if(true) {
    console.log(MY_NAME);
}

console.log(MY_NAME);