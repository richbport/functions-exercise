// function - a section of reusable code
//          Declare code once, use it whenever you want
//          Call the function to execute that code

// function add(x, y){
//     let result = x + y;
//     return result;
// }

// let answer = add(2, 3);
// console.log(answer);

// function add(x, y) {
//   return x + y; // works same as above
// }

// function subtract(x, y) {
//   return x - y;
// }

// function multiply(x, y) {
//   return x * y;
// }

// function divide(x, y) {
//   return x / y;
// }

// // let answer = subtract(2, 3);
// // console.log(answer)

// // console.log(divide(2, 3)); // no variable called 'answer' to store it in, just console.logging it

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function isEven(number) {
  return number % 2 === 0 ? true : false; //ternary operator
}

let answer = (isEven(2))
console.log(answer)

// function isValidEmail(email) {
//   if (email.includes("@")) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function isValidEmail(email) {
//     return email.includes("@") ? true : false;  //ternary operator equivalent
// }

// console.log(isValidEmail("rich@yahoo.com"));
// console.log(isValidEmail("richyahoo.com"));
// console.log(isValidEmail("MarkZuckerborg@yahoo.com"));
