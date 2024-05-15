//! 1. Write a function that displays current date & time in your browser.

// function showDate() {
//   var date = new Date();
//   document.write(date);
// }
// showDate()

//! 2. Write a function that takes first & last name and then it greets the user using his full name.

// function fullName(a, b) {
//   var firstName = a;
//   var lastName = b;
//   var fullName = `Hello ${a} ${b}. How are you.`;
//   document.write(fullName);
// }
// fullName("M", "Sanaullah");

//! 3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.

var sumResult = document.querySelector(".result");
// function sum() {
//   var userInput = document.querySelector("#userInput");
//   var userInput2 = document.querySelector("#userInput2");
//   var result = Number(userInput.value) + Number(userInput2.value);
//   sumResult.innerHTML = result;
// }

//! 4. Calculator:Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.

// var sumResult = document.querySelector(".result");
// function calculate(num1, num2, ope) {
//   var result = "";
//   switch (ope) {
//     case "+":
//       result = Number(num1) + Number(num2);
//       break;
//     case "-":
//       result = num1 - num2;
//       break;
//     case "*":
//       result = num1 * num2;
//       break;
//     case "/":
//       result = num1 / num2;
//       break;
//     case "%":
//       result = num1 % num2;
//       break;
//   }
//   return result;
//   // sumResult.innerHTML = result;
// }
// function getVal() {
//   var num1 = document.querySelector("#num1").value;
//   var num2 = document.querySelector("#num2").value;
//   var operator = document.querySelector("#operator").value;
//   var result = calculate(num1, num2, operator);
//   sumResult.innerHTML = result;
// }

//! 5. Write a function that squares its argument.
//! 6. Write a function that computes factorial of a number.

// function getFactorial(len) {
//   var fac = 1;
//   for (var i = 1; i <= len; i++) {
//     fac = fac * i;
//   }
//   console.log(fac);
// }
// function sendVal() {
//   var num1 = document.querySelector("#num1").value;
//   var result = getFactorial(num1);
// }

//! 7. Write a function that take start and end number as inputs & display counting in your browser.

// function counting(start, end) {
//   for (var i = start; i <= end; i++) {
//     sumResult.innerHTML += `${i} <br>`;
//   }
// }
// function getVal() {
//   var num1 = document.querySelector("#num1").value;
//   var num2 = document.querySelector("#num2").value;
//   var result = counting(num1, num2);
// }

//! 8. Write a nested function that computes hypotenuse of a right angle triangle.
//* Hypotenuse2 = Base2 + Perpendicular2
//* Take base and perpendicular as inputs.
//* Outer function : calculateHypotenuse()
//* Inner function: calculateSquare()
//! 9. Write a function that calculates the area of a rectangle.
//* A = width * height
//* Pass width and height in following manner:
//* i. Arguments as value
//* ii. Arguments as variables
//! 11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
//* EXAMPLE STRING : 'the quick brown fox'
//* EXPECTED OUTPUT : 'The Quick Brown Fox'

// function doUpperCasefirstLetter(val) {
//   var result = "";
//todo first method
// var temp = "";
// for (var i = 0; i < val.length; i++) {
//   if (i == 0) {
//     result = val[0].toUpperCase();
//   } else if (val[i] == " ") {
//     result += val[i];
//     temp = val[i + 1].toUpperCase();
//   } else {
//     if (temp) {
//       result += temp;
//       temp = "";
//     } else {
//       result += val[i];
//     }
//   }
// }
//todo second method
// for (var i = 0; i <= val.length - 1; i++) {
//   if (val[i - 1] == " ") {
//     result += val[i].toUpperCase();
//     console.log(i + " " + val[i]);
//   } else {
//     result += val[i];
//     console.log(i + " " + val[i]);
//   }
// }
//* same code for both method
// console.log(result);
// console.log(result.length);
// num1.value = "";
// }
// function getVal() {
//   var num1 = document.querySelector("#num1").value;
//   var num2 = document.querySelector("#num2").value;
//   var result = doUpperCasefirstLetter(num1);
// }

//! 12. Write a JavaScript function that accepts a string as a  parameter and find the longest word within the string.
//* EXAMPLE STRING : 'Web Development Tutorial'
//* EXPECTED OUTPUT : 'Development'
/*
//* FIRST STEP :
//todo getting string, adding space to the end and sending to the findLongestWord() funciton
function getVal() {
  var num1 = document.querySelector("#num1").value;
  num1 += " ";
  var result = findLongestWord(num1);
}

//* SECOND STEP :
//todo funciton to find the longest word in the string
function findLongestWord(str) {
  //* THIRD STRP :
  //? MANUALLY SPLITTING sting, PUSHING them to the ARRAY named words[] and UPDATING the index by the index of space.
  var words = []; // array to store splited string
  var index = 0; // stating index to slice the word
  for (var i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      var word = str.slice(index, i);
      words.push(word);
      index = i + 1;
    }
  }
  //* FOURTH STEP :
  //? finding SHORTEST word
  var lenForCheck = words[0].length; // temporaraly stored length of 1st element of ARRAY for camparison of length of all elements
  var shortestWord = "";
  for (var i = 0; i < words.length; i++) {
    if (words[i].length < lenForCheck) {
      lenForCheck = words[i].length; // UPDATING length to fing shortest word
      shortestWord = words[i]; // THE SHORTEST WORD FOUND
    }
  }

  //* FIFTH STEP :
  //? finding LONGEST word
  var longWord = ""; // THE LONGEST WORD OF STRING WILL BE STORED HERE
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > lenForCheck) {
      lenForCheck = words[i].length; // UPDATING length to fing longest word
      longWord = `the longest word in this string is <b>${words[i]}</b>`; // THE LONGEST WORD FOUND
    }
  }
  //* SIXTH STEP : FINAL STEP
  //? Showing the result
  sumResult.innerHTML = longWord;
}
*/
//! 13. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
//* Sample arguments : 'JSResourceS.com', 'o'

/*
//* FIRST STEP :
//? getting values, sending them to the function
function getVal() {
  var string = document.querySelector("#num1").value;
  var letter = document.querySelector("#num2").value;
  var result = findOccurrencesOfLetter(string, letter);
}

//* SECOND STEP
//TODO counting the occurence of mentioned letter in the mentioned string
function findOccurrencesOfLetter(str, ltr) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] == ltr) {
      count++;
    }
  }
  sumResult.innerHTML = `<b>${ltr}</b> is occurred <b>${count}</b> times in this string`;
  console.log(count);
}
*/
//! 14. The Geometrizer  Create 2 functions that calculate properties of a circle, using  the definitions here.
//* Create a function called calcCircumference:
//* • Pass the radius to the function.
//* • Calculate the circumference based on the radius, and output
//* "The circumference is NN".
//* Create a function called calcArea:
//* • Pass the radius to the function.
//* • Calculate the area based on the radius, and output "The area
//* is NN".
//* Circumference of circle    =     2πr
//* Area of circle
//* =
//* πr2
