//* 1. Write a program that takes a positive integer from user & display the following in your browser.
//* a. number
//* b. round off value of the number
//* c. floor value of the number
//* d. ceil value of the number

// var input = +prompt("Enter Your Number");
// var roundVal = Math.round(input);
// var floorVal = Math.floor(input);
// var ceilVal = Math.ceil(input);

// document.write(`
// Number ${input} <br>
// Round Value ${roundVal} <br>
// Floor Value ${floorVal} <br>
// Ceil Value ${ceilVal} <br>
// `);

//* 2. Write a program that takes a negative floating point number from user & display the following in your browser.
//* a. number
//* b. round off value of the number
//* c. floor value of the number
//* d. ceil value of the number

// var input = +prompt("Enter Your Negative Value");
// var roundVal = Math.round(input);
// var floorVal = Math.floor(input);
// var ceilVal = Math.ceil(input);

// document.write(`
// Number ${input} <br>
// Round Value ${roundVal} <br>
// Floor Value ${floorVal} <br>
// Ceil Value ${ceilVal} <br>
// `);

//* 3. Write a program that displays the absolute value of a number. E.g. absolute value of -4 is 4 & absolute value of 5 is 5

//! ye nhi seekhaya

//* 4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:

// var dice = Math.floor(Math.random() * 6 + 1);
// document.write("dice" + " " + dice);

//* 5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser

// var hate = prompt("Enter hate's name");
// var tail = prompt("Enter tail's name");
// var coin = Math.round(Math.random() * 1);
// if (coin == 0) {
//   document.write(`${hate}'s number is ${coin} and he is winner `);
// } else {
//   document.write(`${tail}'s number is ${coin} and he is winner `);
// }

//* 6. Write a program that shows a random number between 1 and 100 in your browser.

// var randomNum = Math.random() * 101;
// document.write(Math.round(randomNum));

//* 7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be:
//* a. 50
//* b. 50kgs
//* c. 50.2kgs
//* d. 50.2kilograms


var userInput = prompt("Enter your weight (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms)");

// Remove any non-numeric characters except decimal point
var weight = parseFloat(userInput.replace(/[^\d.]/g, ''));

// Check if 'kgs' or 'kilograms' is mentioned in the input
if (userInput.includes("kgs") || userInput.includes("kilograms")) {
    document.write("Your weight is " + weight + " kilograms.");
} else {
    document.write("Your weight is " + weight + " pounds.");
}

//! ye bhi nhi aata

//* 8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.

// var randomNum = Math.round(Math.random() * 11);
// var userInput = +prompt("Enter any number");

// if (userInput == randomNum) {
//   document.write(
//     `Congratulations you found the secret number Which is ${randomNum} and ${userInput}`
//   );
// } else {
//   document.write(`We are sorry ${userInput} is not the secret number`);
// }



