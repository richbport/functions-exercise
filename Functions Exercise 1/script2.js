// function - a section of reusable code
//          Declare code once, use it whenever you want
//          Call the function to execute that code

// function add(x, y){
//     let result = x + y;
//     return result;
// }

function add(x, y) {
  return x + y; // works same as above
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
    return x / y;
}

// let answer = subtract(2, 3);
// console.log(answer)

// console.log(divide(2, 3)); // no variable called 'answer' to store it in, just console.logging it

function isEven(number){
    if(number % 2 === 0){
        return true;
    }
    else {
        return false;
    }
}

console.log(isEven(10))
