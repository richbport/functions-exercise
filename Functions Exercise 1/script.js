// function - a section of reusable code
//          Declare code once, use it whenever you want
//          Call the function to execute that code

function happyBirthday(username, age) { // Parameters username, and age, within the declaration
  console.log("Happy birthday to you!");
  console.log("Happy birthday to you!");
  console.log(`Happy birthday dear ${username}!`);
  console.log("Happy birthday to you!");
  console.log(`You are ${age} years old!`);
}

happyBirthday("Rich", 54); // calling the function using arguments "Rich", and 54
happyBirthday("Donny", 25);
happyBirthday("Marie", 35);
