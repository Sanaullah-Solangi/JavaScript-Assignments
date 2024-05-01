//! 12 / 3 / 24 saturday

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

//! 14 / 3 / 24 saturday

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

//! 16 / 3 / 24 saturday

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

//! 26 / 3 / 24 tuesday

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

//* task 5 Palindrom word

// var input = prompt("Enter any value");
// var msg = "ye palindrom hai";
// for (var i = 0; i < input.length / 2; i++) {
//   if (input[i] != input[input.length - 1 - i]) {
//     msg = "ye nhi hai";
//   }
// }
// document.write(msg);

//* task 6 factorial

// var input = +prompt("Enter any number");
// var fac = 1;
// document.write(input + "<br>");

// if (input == 0) {
//   document.write(`factorial of ${input} is 1`);
// } else if (input < 0) {
//   document.write(`factorial of negative value is not possible`);
// } else {
//   for (var i = 1; i <= input; i++) {
//     document.write(fac);
//     fac = fac * i;
//     document.write(` * ${i} = ${fac}<br>`);
//   }
//   document.write(`the factorial of <b>${input}</b> is <b>${fac}</b> <br>`);
// }

//! 28 / 3 / 24 thursday : searching value

// var cars = ["Alto", "Civic", "Toyota", "Mehran"];
// var userInp = prompt("Enter car name");
// var firstChar = userInp.slice(0, 1).toUpperCase();
// var remainChar = userInp.slice(1).toLowerCase();
// var final = firstChar + remainChar;
// var index = cars.indexOf(final);

//* search with loop method

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

//* search with if method

// if (index != -1 && cars[index] == final) {
//   document.write(`yes ${final} is available at index ${index} in our showroom`);
// } else {
//   document.write("sorry we do not have this item");
// }

// document.write("<br>" + index);

//* ID generator

var output = document.querySelector(".output");
// var btn = document.querySelector(".IdBtn");

// function generateID() {
//   var str = "WPA-";
//   var num = Math.random() * 100000;
//   output.innerHTML = str + Math.floor(num);
// }

// btn.addEventListener("click", () => {
//   generateID();
// });

//* Passwored with no Sequence
// var ranValue =
//   "!@#$%^&*()_+-={}[];:',.<>/?|0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var btn = document.querySelector(".passworedBtn");

// function generatePasswored() {
//   ranPasswored = "";
//   for (var i = 0; i <= 10; i++) {
//     ranIndex = Math.floor(Math.random() * ranValue.length);
//     ranPasswored += ranValue[ranIndex];
//   }
// }
// btn.addEventListener("click", () => {
//   generatePasswored();
//   output.innerHTML = ranPasswored;
// });

// document.write(ranPasswored)

//* Passwored with Sequence

// var specChar = "!@#$%^&*()_+-={}[];:',.<>/?|";
// var numbers = "0123456789";
// var smallAlpha = "abcdefghijklmnopqrstuvwxyz";
// var capAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var ranChar = "";
// var ranNum = "";
// var ranSmallAlpha = "";
// var ranCapAlpha = "";
// var passwored = "";
// for (var i = 0; i <= 4; i++) {
//   ranChar += specChar[Math.floor(Math.random() * specChar.length)];
//   ranNum += numbers[Math.floor(Math.random() * numbers.length)];
//   ranSmallAlpha += smallAlpha[Math.floor(Math.random() * smallAlpha.length)];
//   ranCapAlpha += capAlpha[Math.floor(Math.random() * capAlpha.length)];
// }

// passwored = ranSmallAlpha + ranChar + ranCapAlpha + ranNum;
// document.write(passwored);
//! 30 / 3 / 24 saturday : date method

//* 1st task getDay()

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

//* 2nd task Age converter

// var dob = new Date(prompt("Enter your Dob(5 Jan, 2000)"));
// var todaysDate = new Date().getTime();
// var currentDate = todaysDate - dob;
// var convertAge = currentDate / (1000 * 60 * 60 * 24 * 365);
// document.write(Math.floor(convertAge));

//* 3rd task Remaining days of ramzan

// var eid = new Date("16 june 2024");
// var currentDate = new Date();
// var timeDifference = eid - currentDate;
// var remaingDays = timeDifference / (1000 * 60 * 60*24);
// document.write(Math.floor(remaingDays));

//* 4th task KE Bill

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

//* printing hourse with the getHourse method

// var hoursArray = [
//   "12 AM",
//   "1 AM",
//   "2 AM",
//   "3 AM",
//   "4 AM",
//   "5 AM",
//   "6 AM",
//   "7 AM",
//   "8 AM",
//   "9 AM",
//   "10 AM",
//   "11 AM",
//   "12 PM",
//   "1 PM",
//   "2 PM",
//   "3 PM",
//   "4 PM",
//   "5 PM",
//   "6 PM",
//   "7 PM",
//   "8 PM",
//   "9 PM",
//   "10 PM",
//   "11 PM",
// ];
// var date = new Date();
// document.write(hoursArray[date.getHours()]);

//! 18 / 4 / 24 thursday after \\ second class of revesion after eid

//* Palindrom word

// var userInput = prompt("please enter any word for check it`s palandrom or not");
// var revIndex = userInput.length - 1;
// var revString = "";
// for (var i = userInput.length - 1; i >= 0; i--) {
//   revString += userInput[i];
// }
// document.write(
//   `This is your Input ${userInput} <br> And This is it's reverse spelling ${revString} <br>`
// );

// if (userInput == revString) {
//   document.write("Yes it's a palindrom word");
// } else {
//   document.write("No it's not a palindrom word");
// }

//! 20 / 4 / 24 saturday after \\ third class of revesion after eid

//* findign Min/Max number within the array
//? max number

// var values = [1, 2, 3, 5, 10, 12, 50, 53, 923];
// var max = values[0];
// for (var i = 0; i < values.length; i++) {
//   if (values[i] > max) {
//     max = values[i];
//   }
// }
// document.write(`This is Max number ${max} <br>`);

// //? min number
// var min = values[0];
// for (var i = 0; i < values.length; i++) {
//   if (values[i] < min) {
//     min = values[i];
//   }
// }
// document.write(`This is Min number ${min} <br>`);

//* finding the missing number within the sereis

// var values = [1, 2, 3, 5, 7];

// for (var i = 0; i < values.length; i++) {
//   var diff = values[i + 1] - values[i];
//   //0 + 1 = 1 ==> 2     0 ==> 1
//   //1 + 1 = 2 ==> 3     1 ==> 2
//   //2 + 1 = 3 ==> 5     2 ==> 3
//   //3 + 1 = 4 ==> 7     3 ==> 5
//   //4 + 1 = 5 ==>       4 ==> 7
//   document.write(
//     `Num after Minus <b>${diff}</b> counting hai <b>${values[i]}</b> <br>`
//   );
//   if (diff > 1) {
//     for (var j = 1; j < diff; j++) {
//       document.write(values[i] + j + "<br>");
//     }
//   }
// }

//! 25 / 4 / 24 thursday after \\ fourth class of revesion after eid

//* placing missing numbers to there index
//? placing elements in an other Array
// var arr = [1, 2, 3, 5, 7];
// var comArr = [];
// for (var i = 0; i < arr.length; i++) {
//   comArr.push(arr[i]);
//   if (arr[i + 1] - arr[i] > 1) {
//     comArr.push(arr[i] + 1);
//   }
// }
// console.log(comArr);

//? placing elements in an same Array
// for (var i = 0; i < arr.length; i++) {
//   var diff = arr[i + 1] - arr[i];
//   if (diff > 1) {
//     for (var j = 1; j < diff; j++) {
//       arr.splice(i + j, 0, arr[i] + j);
//     }
//   }
// }
// console.log(arr)

//! 27 / 4 / 24 saturday after \\ fifth class of revesion after eid \\ capitalization of first letter of each word by for loops

//* 1st Method

// var input = "anwar ali shah";
// var result = "";
// var temp = "";
// for (var i = 0; i < input.length; i++) {
//   if (i === 0) {
//     result = input[i].toUpperCase();
//     console.log(i + " " + "firt letter capital" + " " + result);
//   } else if (input[i] == " ") {
//     temp = input[i + 1].toUpperCase();
//     result += input[i];
//     console.log(i + " " + "spacing & capitalization huwi" + " " + result);
//   } else {
//     if (temp) {
//       result += temp;
//       temp = "";
//       console.log(i + " " + "temp add huwa"+" "+ result);
//     } else {
//       result += input[i];
//       console.log(i + " " + "agla add huwa" + " " + result);
//     }
//   }
// }
// console.log(result);

//* 2nd Method

// var input = "anwar ali shah";
// var result = "";
// var jugarOfNext = true;

// for (var i = 0; i < input.length; i++) {
//   var char = input[i];
//   if (jugarOfNext) {
//     result += char.toUpperCase();
//     jugarOfNext = false;
//   } else if (input[i] == " ") {
//     jugarOfNext = true;
//   }
//   result += char;
// }
// console.log(result);
