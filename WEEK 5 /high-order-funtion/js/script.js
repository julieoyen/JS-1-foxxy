let number = [1,2,3,4,5,6,7,8,9,10,11,12,13]

function count (array, logic){
    let counter = 0;
    for (let number of array){
        let shouldInclude = logic(number);
        
        if(shouldInclude){
            counter++;
        }
    }
    return counter;
}


let resultMoreThanFive = count(number, (number) => {
    if(number > 5){
        return true
    } else {
        false
    }
})

console.log(resultMoreThanFive)


let resultLessThanFive = count(number, (number) => {
    if(number < 5){
        return true
    } else {
        false
    }
})

console.log(resultLessThanFive)