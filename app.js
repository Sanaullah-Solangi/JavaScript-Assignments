//! 12 / 3 / 23 saturday

// var inputNum = +prompt("Enter any number");

// if (inputNum % 3 == 0 && inputNum % 5 == 0) {
//   document.write(inputNum + " This is included in both 3 & 5");
// } else if (inputNum % 3 == 0) {
//   document.write(inputNum + " This is included just in 3");
// } else if (inputNum % 5 == 0) {
//   document.write(inputNum + " This is included just in 5");
// } else {
//   document.write("enter valid number");
// }

//! 14 / 3 / 23 saturday

// var studentName = prompt("Enter studnent Name");
// var eng = +prompt("Enter eng marks");
// var maths = +prompt("Enter maths marks");
// var urdu = +prompt("Enter urdu marks");
// var cs = +prompt("Enter cs marks");
// var fxs = +prompt("Enter fxs marks");
// var total = eng + maths + urdu + cs + fxs;
// var perc = (total / 500) * 100;
// var grade = "";
// if (total <= 100) {
//   grade = "A+";
// } else if (total <= 80) {
//   grade = "A";
// } else if (total >= 70) {
//   grade = "B";
// } else if (total >= 60) {
//   grade = "C";
// } else if (total >= 50) {
//   grade = "D";
// } else if (total < 40) {
//   grade = "fail";
// }

// document.write(`
// <table border="1">
//   <tr>
//     <th>student Name</th>
//     <th>eng</th>
//     <th>maths</th>
//     <th>urdu</th>
//     <th>cs</th>
//     <th>fxs</th>
//     <th>total</th>
//     <th>perc</th>
//     <th>grade</th>
//   </tr>

//   <tr>
//     <td>${studentName}</td>
//     <td>${eng}</td>
//     <td>${maths}</td>
//     <td>${urdu}</td>
//     <td>${cs}</td>
//     <td>${fxs}</td>
//     <td>${total}</td>
//     <td>${perc}%</td>
//     <td>${grade}</td>
//   </tr>
// </table>`);

//! 16 / 3 / 23 saturday

// var arr = ["audi", "volvo", "ford", "toyota"];

// document.write(`<h1>favorite cars</h1> <br>
// <b>Complete array : ${arr}</b> <br><br>
// first index of the array : 0 <br>
// car at first index of the array :<b> ${arr[0]} </b><br>

// last index of the array : 3 <br>
// car at last index of the array :<b> ${arr[3]} </b> <br>

// `);

var text =
  "PHP is indeed a versatile programming language widely used in web development, especially for backend processes like user authentication. It's a valuable skill, particularly for customizing platforms like WordPress. However, it's essential to note that the tech landscape is evolving, and newer technologies like React and Node.js are gaining prominence. To stay competitive in the market, it's crucial to diversify skills and adapt to the latest trends alongside mastering PHP. Continuous learning and upskilling are key to thriving in the dynamic tech industry!";

// document.write(`${text} <br><br><br><br> `);

// var user = prompt("Enter any value").toLowerCase();
// var userDesire = prompt("Enter desired value");
// for (var i = 0; i < text.length; i++) {
//   if (text.slice(i, i + user.length).toLowerCase() == user) {
//     text =
//       text.slice(0, i) + userDesire + " " + text.slice(i + userDesire.length);
//   }
// }
// var user = prompt("Enter value");
// var index = text.indexOf(user);

// if (index !== -1) {
//   text = text.slice(0, index) + "JavaScript" + text.slice(index + user.length);
// }
//todo document.write(`${text} <br>`);

//! 26 / 3 / 23 tuesday

//* task 1

// for (var i = 1; i <= 5; i++) {
//   for (var j = 1; j <= i; j++) {
//     document.write(j + " ");
//   }
//   document.write("<br>");
// }

//* task 2

// for (var i = 5; i > 0; i--) {
//   for (var j = 5; j >= i; j--) {
//     document.write(j + " ");
//   }
//   document.write("<br>");
// }

//* task 3

// for (var i = 1; i <= 5; i++) {
//   for (var j = 1; j <= 5; j++) {
//     document.write(j + " ");
//   }
//   document.write("<br>");
// }

//* task 4

// for (var i = 1; i <= 5; i++) {
//   for (var j = 1; j <= i; j++) {
//     document.write("*" + " ");
//   }
//   document.write("<br>");
// }

//* task 5

// var input = prompt("Enter any value");
// var msg = "ye palindrom hai";
// for (var i = 0; i < input.length / 2; i++) {
//   if (input[i] != input[input.length - 1 - i]) {
//     msg = "ye nhi hai";
//   }
// }
// document.write(msg);

//* task 6

// var input = +prompt("Enter any number");
// var fac = 1;
// if (input == 0) {
//   document.write(`factorial of ${input} is 1`);
// } else if (input < 0) {
//   document.write(`factorial of negative value is not possible`);
// } else {
//   for (var i = 1; i <= input; i++) {
//     fac = fac * i;
//   }
//   document.write(`the factorial of <b>${input}</b> is <b>${fac}</b>`);
// }

//! 28 / 3 / 23 thursday : searching value
// var cars = ["Alto", "Civic", "Toyota", "Mehran"];
// var userInp = prompt("Enter car name");
// var firstChar = userInp.slice(0, 1).toUpperCase();
// var remainChar = userInp.slice(1).toLowerCase();
// var final = firstChar + remainChar;
// var index = cars.indexOf(final);

//* loop method

// var flag = false;
// for (var i = 0; i < userInp.length; i++) {
//   if (cars[i] == final) {
//     flag = true;
//     document.write(`yes ${cars[i]} is available at index ${i} in our showroom`);
//     break;
//   }
// }

// if (flag == false) {
//   document.write("sorry we do not have this item");
// }

//* if method

// if (index != -1 && cars[index] == final) {
//   document.write(`yes ${final} is available at index ${index} in our showroom`);
// } else {
//   document.write("sorry we do not have this item");
// }

// document.write("<br>" + index);

//* passworred generator
var btn = document.querySelector(".btn");
var passworred = document.querySelector(".passworred");

function generatePassworred() {
  var str = "WPA-";
  var num = Math.random() * 100000;
  passworred.innerHTML = str + Math.floor(num);
}
// var str = "WPA-";
// var num = Math.random() * 100000;
// document.write(str + Math.floor(num));

btn.addEventListener("click", () => {
  generatePassworred();
});
console.log(passworred);

//! 30 / 3 / 23 saturday : date method

//* 1st task

// var days = [
//   "sunday",
//   "monday",
//   "tuesday",
//   "wednesday",
//   "thursday",
//   "friday",
//   "saturday",
// ];

// var todaysDay = new Date().getDay();
// document.write(days[todaysDay] + "<br>");

//* 2nd task

// var dob = new Date(prompt("Enter your Dob(5 Jan, 2000)"));
// var todaysDate = new Date().getTime();
// var currentDate = todaysDate - dob;
// var convertAge = currentDate / (1000 * 60 * 60 * 24 * 365);
// document.write(Math.floor(convertAge));

//* 3rd task

// var eid = new Date("16 june 2024");
// var currentDate = new Date();
// var timeDifference = eid - currentDate;
// var remaingDays = timeDifference / (1000 * 60 * 60*24);
// document.write(Math.floor(remaingDays));

//* 4th task

// var months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// var customerName = prompt("Enter Your Name");
// var currentMonth = new Date().getMonth();
// var numberOfUnits = +prompt("Enter Your units");
// var chargesPerUnit = 14;
// var netAmountPayable = chargesPerUnit * numberOfUnits;
// var latePaymentSurcharge = 500;
// var grossAmountPayable = netAmountPayable + latePaymentSurcharge;

// document.write(`
// Customer Name: ${customerName} <br>
// Current Month: ${months[currentMonth]} <br>
// Number of Units: ${numberOfUnits} <br>
// Charges per Unit: ${chargesPerUnit.toFixed(2)} <br><br>
// Net Amount Payable(Within Due Date): ${netAmountPayable.toFixed(2)} <br>
// Late Payment Surcharges: ${latePaymentSurcharge} <br>
// Gross Amount Payable(After Due Date): ${grossAmountPayable.toFixed(2)} <br>

// `);
