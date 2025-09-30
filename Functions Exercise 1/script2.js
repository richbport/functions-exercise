// function - a section of reusable code
//          Declare code once, use it whenever you want
//          Call the function to execute that code

// function add(x, y) {
//     return x + y;
// }

// function subtract(x, y){
//     return x - y;
// }

// function multiply(x, y){
//     return x * y;
// }

// function divide(x, y){
//     return x / y;
// }

// console.log(divide(2, 3));

// function isEven(number) {
//   return number % 2 === 0 ? true : false;
// }

// console.log(isEven(11));

// function isEven(number) {
//   if (number % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function isEven(number) {
//   return number % 2 === 0 ? true : false; //ternary operator
// }

// let answer = (isEven(2))
// console.log(answer)

// function isValidEmail(email) {
//   if (email.includes("@")) {
//     return true;
//   } else {
//     return false;
//   }
// }

function isValidEmail(email) {
    return email.includes("@") && email.includes(".");
}

console.log(isValidEmail("rich@yahoocom"));
console.log(isValidEmail("richyahoo.com"));
console.log(isValidEmail("MarkZuckerborg@yahoo.com"));

console.log(Math.random())
