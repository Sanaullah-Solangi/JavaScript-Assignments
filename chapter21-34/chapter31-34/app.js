//* 1. Write a program that displays current date and time in your browser.

// var date = new Date();
// document.write(date);

//* 2. Write a program that alerts the current month in words. For example December.

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

// var month = new Date().getMonth();
// alert(months[month]);

//* 3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.

// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// var currentDay = new Date().getDay();
// document.write(days[currentDay]);

//* 4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var currentDay = new Date().getDay();
// if (currentDay == 0 || currentDay == 6) {
//   document.write(`today is <b>${days[currentDay]}</b> It’s Fun day`);
// } else {
//   document.write(`today is <b>${days[currentDay]}</b> It's not Fun Day`);
// }

//* 5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.

// var date = new Date().getDate();
// if (date <= 15) {
//   document.write(`today is <b>${date}</b> First fifteen days of the month`);
// } else {
//   document.write(`today is <b>${date}</b> Last days of the month`);
// }

//* 6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.

//! ye samajh nhi aaya

//* 7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.

//! ye samajh nhi aaya

//* 8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.

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

// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// var date = new Date("31,Dec, 2020");
// var month = date.getMonth();
// var day = date.getDay();
// var year = date.getFullYear();

// document.write(`${days[day]} ${months[month]} ${year}`);

//* 9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015

// var firstRamzan = new Date(2024, 2, 10);
// var currentRamzan = new Date();
// var difference = currentRamzan.getTime() - firstRamzan.getTime();
// var totalDays = difference / (1000 * 60 * 60 * 24);
// document.write(Math.floor(totalDays));

//* 10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.

// var now = new Date().getTime();
// var past = new Date(2024, 0, 1).getTime();
// var timeDifference = now - past;
// var elapsedSec = timeDifference / 1000;
// document.write(Math.floor(elapsedSec));

//* 11. Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.

// var now = new Date();
// var crntHour = new Date().getHours();
// now.setHours(crntHour + 1);
// document.write(now);

//* 12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?

// var now = new Date();
// document.write(now + "<br>");

// var Crnyear = now.getFullYear();
// document.write(Crnyear + "<br>");

// now.setFullYear(now.getFullYear() - 100);
// document.write(now + "<br>");

// var prevyear = now.getFullYear();
// document.write(prevyear + "<br>");

//* 13. Write a program to ask the user about his age. Calculate and show his birth year in your browser.

// var userDob = prompt("Enter Your age");
// var now = new Date();
// var year = now.getFullYear();
// var userBirthYear = year - userDob;
// document.write(userBirthYear);

//* 14. Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields:
//* a. Customer Name
//* b. Current Month
//* c. Number of units
//* d. Charges per unit
//* e. Net Amount Payable (within Due Date)
//* f. Late Payment Surcharge
//* g. Gross Amount Payable (after Due Date)
//* Where,
//* Net Amount Payable (within Due Date) = Number of units * Charges per unit & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

var customerName = prompt("Enter Your Name");
var customerMonth = prompt("Enter Your Month");
var numberOfUnits = prompt("Enter Your units");
var chargesPerUnit = 18;
var netAmount = chargesPerUnit * numberOfUnits;
var latePaymentCharges = 500;
var grossAmount = netAmount + latePaymentCharges;

document.write(`
Customer Name: ${customerName} <br>
Customer Month: ${customerMonth} <br>
Number of Units: ${numberOfUnits} <br><br>
Charges Per Unit: ${chargesPerUnit} <br>
Net Amount: ${netAmount}<br>
late Payment Charges: ${latePaymentCharges}<br>
gross Amount: ${grossAmount}<br>
`);
