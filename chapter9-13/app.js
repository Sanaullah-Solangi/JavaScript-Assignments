//*=========== Chapter 9-11 ===========

//?1=== Q 1 ===

// var city = prompt("Enter city name");
// if (city == "karachi") {
//   document.write("Welcome to the city of lights");
// }

//?1=== Q 2 ===

// var gender = prompt("Enter your gender");
// if (gender == "male") {
//   document.write("good morning sir");
// } else if (gender == "female") {
//   document.write("good morning ma'am");
// } else {
//   document.write("Enter correct gender");
// }

//?=== Q 3 ===

// var colorName = prompt("Enter color name");

// if (colorName == "red") {
//   document.write("must stop");
// } else if (colorName == "yellow") {
//   document.write("ready to move");
// } else if (colorName == "green") {
//   document.write("move now");
// } else {
//   document.write("Enter signal color's only");
// }

//?=== Q 4 ===

// var carFuel = prompt("Enter your car's fuel");

// if (carFuel < 0.25) {
//   document.write("please refill the fuel in your car");
// } else {
//   document.write("You can go ahead");
// }

//?=== Q 5 ===

// var b = 82;
// if (b++ === 83) {
//   alert("given codition fo variale b is true");
// }

// var c = 12;
// if (c++ === 13) {
//   alert("condition 1 is true");
// }
// if (c === 13) {
//   alert("condition 2 is true");
// }
// if (++c < 14) {
//   alert("condition 3 is true");
// }
// if (c === 14) {
//   alert("condition 4 if true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//   alert("The cost equals");
// }

// if (true) {
//   alert("True");
// }
// if (false) {
//   alert("False");
// }

// if ("car" < "cat") {
//   alert("car is smaller than cat");
// }

//?=== Q 6 ===

// var subject1 = +prompt("Enter Subject 1 obtained marks");
// var subject2 = +prompt("Enter Subject 2 obtained marks");
// var subject3 = +prompt("Enter Subject 3 obtained marks");

// document.write("<h1>Marks sheet</h1>");

// var totalMarks = +prompt("Enter total marks");
// document.write("total marks" + " " + totalMarks + "<br>");
// var obtainedMarks = subject1 + subject2 + subject3;
// document.write("obtained marks" + " " + obtainedMarks + "<br>");
// var percentage = (obtainedMarks / totalMarks) * 100;
// document.write("percentage" + " " + Math.round(percentage) + "%" + "<br>");

// if (percentage <= 33) {
//   document.write("FAIL");
// } else if (percentage <= 40) {
//   document.write("Grade : C" + "<br>" + "Remarks : sorry");
// } else if (percentage <= 60) {
//   document.write("Grade : B" + "<br>" + "Remarks : you need to improve");
// } else if (percentage <= 80) {
//   document.write("Grade : A" + "<br>" + "Remarks : good");
// } else if (percentage <= 100) {
//   document.write("Grade : A1" + "<br>" + "Remarks : Excellent");
// }

//?=== Q 7 ===

// var secretNum = 4;
// var userNumer = +prompt("guess the secret number");
// if (userNumer == secretNum) {
//   document.write("Bingo! correct answer");
// } else if (userNumer < secretNum || userNumer > secretNum) {
//   document.write("Close enough to the corrrect answer");
// }

//?=== Q 8 ===

// var userNumer = +prompt("Enter any number");
// if (userNumer % 3 === 0) {
//   document.write("yes This number is divisible with 3");
// } else {
//   document.write("no This number is not divisible with 3");
// }

//?=== Q 9 ===

// var number = +prompt("Enter any number");
// if (number % 2 === 0) {
//   document.write("The number even");
// } else {
//   document.write("The number odd");
// }

//?=== Q 10 ===

// var temprature = +prompt("Enter temprature");

// if (temprature >= 40) {
//   document.write("it is too hot outside.");
// } else if (temprature >= 30) {
//   document.write("The wheater today is normal.");
// } else if (temprature >= 20) {
//   document.write("wheater today is cool.");
// } else if (temprature >= 10) {
//   document.write("OMG! today's weather is so cool.");
// } else {
//   document.write("Enter the number greator then 10");
// }

//?=== Q 11 ===
// var number1 = +prompt("Enter the first number");
// var number2 = +prompt("Enter the second number");
// var operator = prompt("What operation you want");

// if (operator == "+") {
//   document.write(number1 + number2);
// } else if (operator == "-") {
//   document.write(number1 - number2);
// } else if (operator == "*") {
//   document.write(number1 * number2);
// } else if (operator == "/") {
//   document.write(number1 / number2);
// } else if (operator == "%") {
//   document.write(number1 % number2);
// }

//*=========== Chapter 12-13 ===========

//!=== Q 1 ===
// I dont understand how to do this

//?=== Q 2 ===

// var num1 = +prompt("Enter the integer 1");
// var num2 = +prompt("Enter the integer 2");

// if (num2 >= num1) {
//   document.write(num2 + " " + "is greator then or equal to " + num1);
// } else {
//   document.write(num2 + " " + "is less then" + num1);
// }

//?=== Q 3 ===

// var userNumer = +prompt("Enter the number");
// if (userNumer < 0) {
//   document.write("The number is negative");
// } else if (userNumer > 0) {
//   document.write("The number is positive");
// } else {
//   document.write("The number is zero");
// }

//?=== Q 3 ===
// var greeting;
// var hour = +prompt("Enter hours");
// if (hour < 18) {
//   greeting = "Good day";
//   document.write(greeting);
// } else {
//   greeting = "Good evening";
//   document.write(greeting);
// }
