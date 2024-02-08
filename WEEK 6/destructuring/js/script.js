//destructuring object

let duck = {
  id: 1,
  name: "Tim",
  habitat: "Swamp",
  height: 25,
  diet: "Green stuff",
};

let duckName = duck.name;
let duckHabitat = duck.habitat;
let duckHeight = duck.height;

console.log("The duck was named", duckName);

//this does the same as the above
let { name: duckNameDes, habitat, height } = duck;

console.log("The duck was named", duckNameDes);
console.log(habitat);
console.log(height);

// desctucturing array

let array = [2, 5, 6, 8];

let num1 = array[0];
let num2 = array[1];

// this is the same as above

let [num1Des, num2Des] = array;

console.log(array);
