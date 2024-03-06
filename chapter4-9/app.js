//*=========== Chapter 4 ===========

//?=== Q 1 ===

// var number1, number2, number3;

//?=== Q 2 ===

// var 1number;
// var my-name;
// var alert;
// var document;
// var my name;

//?=== Q 3 ===

// document.write("<h1>Rules for naming JS variables</h1>");

// document.write(
//   "Variable names can only contain numbers, ($)dollar sign, (_)underscro sign and alphabates <br> for example<br> var name1st<br>var $firstName <br>var _firstName<br> var firstname"
// );

// document.write(
//   "Variable must begin with a alphabet, ($)Dollar sign or with (_)underscore <br>"
// );

// document.write("variable names are casesensitive<br>");

// document.write("variable names should not be JS Keyword");

//*=========== Chapter 5 ===========

//?=== Q 1 ===

// var num1 = 3;
// var num2 = 5;
// var sum = num1 + num2;
// document.write("sum of 3 and 5 is" + sum);

//?=== Q 2 ===

// var num1 = 3;
// var num2 = 5;
// var sum = num1 * num2;
// document.write("the result of 3 into 5 is" + sum);

// var num1 = 3;
// var num2 = 5;
// var sum = num1 / num2;
// document.write("the result of 3 devided by 5 is" + sum);

// var num1 = 3;
// var num2 = 5;
// var sum = num1 - num2;
// document.write("the result of 3 minus 5 is" + sum);

// var num1 = 3;
// var num2 = 5;
// var sum = num1 % num2;
// document.write("the reminder of 3 modulas 5 is" + sum);

//?=== Q 3 ===

// var num;

// document.write("value after variable declaration is:??<br>");

// num = 5;

// document.write("initial value is:" + num + "<br>");

// num++;

// document.write("value after increament is:" + num + "<br>");

// num = num + 7;

// document.write("value after addition is:" + num + "<br>");

// num--;

// document.write("value after decrement is:" + num + "<br>");

// num = num / 3;

// document.write("The remainder is:" + num + "<br>");

//?=== Q 4 ===

// var ticket = 600;

// var tickets = ticket * 5;

// document.write(
//   "total cost to buy 5 tickets a movie is" + " " + tickets + "PKR"
// );

//?=== Q 5 ===

// function table(number) {
//   for (var i = 1; i <= 10; i++) {
//     var result = i * number;
//     document.write(`${number} X ${i} = ${result} <br>`);
//   }
// }

// table(5);

//!=== Q 6 ===

// The Temperature Converter:
// I can not solve this question.

//?=== Q 7 ===

// var priceItem1 = 500;
// var quantityItem1 = 2;
// var result1 = priceItem1 * quantityItem1;

// var priceItem2 = 200;
// var quantityItem2 = 4;
// var result2 = priceItem2 * quantityItem2;

// var shippingCharges = 150;

// var total = result1 + result2 + shippingCharges;

// document.write("price of item 1 is" + " " + priceItem1 + "<br>");
// document.write("quantity of item 1 is" + " " + quantityItem1 + "<br>");

// document.write("price of item 2 is" + " " + priceItem2 + "<br>");
// document.write("quantity of item 2 is" + " " + quantityItem2 + "<br>");

// document.write("shipping cost is" + " " + shippingCharges + "<br>");

// document.write("total cost of your order is" + " " + total + "<br>");

//?=== Q 8 ===

// var totalMarks = 900;
// var obtain = 580;

// var result = (obtain / totalMarks) * 100;

// document.write(Math.round(result));

//?=== Q 9 ===

// var dollar1 = 279.13;
// var riyal1 = 74.43;

// var total = dollar1 * 10 + riyal1 * 25;
// document.write("total currency in PKR: " + total);

//?=== Q 10 ===

// var num = +prompt("Enter any number");

// var result = ((num + 5) * 10) / 2;

// document.write(result);

//?=== Q 11 ===

// var currentYear = 2023;

// var birthYear = 2000;

// var currentAge = currentYear - birthYear;

// document.write("your Age is " + currentAge);

//?=== Q 13 ===

// var favorateSnack = prompt("Enter snacks");

// var currentAge = +prompt("Enter your current age");

// var maximumAge = +prompt("Enter your maximum age");

// var amountPerDay = +prompt("Enter amount of snacks per day");

// document.write("favorate Snacks " + favorateSnack + "<br>");
// document.write("current age " + currentAge + "<br>");
// document.write("maximum Age " + maximumAge + "<br>");
// document.write("amount per day " + amountPerDay + "<br>");

// var yearsRemaining = maximumAge - currentAge;
// var daysRemaining = yearsRemaining * 365;
// var snacksNeeded = amountPerDay * daysRemaining;

// document.write(
//   "you will need " +
//     snacksNeeded +
//     " " +
//     favorateSnack +
//     " " +
//     " to last you until the ripe old age of " +
//     maximumAge
// );

//*=========== Chapter 5-9 ===========

//?1=== Q 1 ===

// var a = 10;
// document.write("Result<br> the value of a is " + a + "<br>");

// ++a;
// document.write("The value of ++a is " + a + "<br>");
// document.write("now the value of a is :" + a + "<br>");

// document.write("The value of a++ is " + a + "<br>");
// a++;
// document.write("The value of a++ is " + a + "<br>");
// --a;
// document.write("The value of a++ is " + a + "<br>");
// document.write("now the value of a is :" + a + "<br>");
// document.write("The value of a-- is " + a + "<br>");
// a--;
// document.write("The value of a-- is " + a + "<br>");

//?1=== Q 2 ===

// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--;

// document.write("--a is 1 <br>");
// document.write("--b is 0 <br>");
// document.write("++b is 1 <br>");
// document.write("b-- is 1 <br>");

// document.write("result is" + result);

//?1=== Q 3 ===

// var greet = "Hello Mr.";

// var userName = prompt("Enter your name");

// document.write(greet + " " + userName);

//?1=== Q 4-5 ===

// function table(number = 5) {
//   for (var i = 1; i <= 10; i++) {
//     document.write(number + " X " + i + " = " + number * i + "<br>");
//   }
// }
// var userInput = prompt("Enter any number", 5);

// table(userInput);

//?1=== Q 6 ===

// var sub1 = prompt("Enter Subject 1");
// var obtainMarks1 = +prompt("Enter Subject 1 obtain marks");
// var sub2 = prompt("Enter Subject 2");
// var obtainMarks2 = +prompt("Enter Subject 2 obtain marks");
// var sub3 = prompt("Enter Subject 3");
// var obtainMarks3 = +prompt("Enter Subject 3 obtain marks");
// var totalMarks = 100;

// var per1 = (obtainMarks1 / totalMarks) * 100;
// var per2 = (obtainMarks2 / totalMarks) * 100;
// var per3 = (obtainMarks3 / totalMarks) * 100;

// document.write("<h1>subject total marks obtained marks percentage</h1>");

// document.write(`${sub1} ${totalMarks}   ${obtainMarks1} ${Math.round(
//   per1
// )}% <br>
//     ${sub2} ${totalMarks}   ${obtainMarks2} ${Math.round(per2)}% <br>
//     ${sub3} ${totalMarks}   ${obtainMarks3} ${Math.round(per3)}% <br>`);
