//*=========== Chapter 14-16 ===========

//?=== Q 1 ===

// var studentsName = [];

//!=== Q 2 ===

// samajh nhi aahra

//?=== Q 3 ===

// var studentsName = ["sanaullah","jamal","raffy"];

//?=== Q 4 ===

// var studentRollNumber = ["12345","67890","12345"];

//?=== Q 5 ===

// var booleanArr = [true,false];

//?=== Q 6 ===

// var MixArr = ["sanaullah",23,true];

//?=== Q 6 ===

// var MixArr = ["sanaullah",23,true];

//?=== Q 7 ===

// var pakEducation = [
//   "SSC",
//   "HSC",
//   "BCS",
//   "BS",
//   "BCOM",
//   "MS",
//   "MS",
//   "M. Phil",
//   "PhD",
// ];

// document.write(`<h1>Pak Qualifications</h1>`);
// for (var i = 0; i < pakEducation.length - 1; i++) {
//   document.write(i + ") " + pakEducation[i] + "</br>");
// }

//?=== Q 8 ===

// var studentsName = ["sanaullah", "jamal", "raffay"];
// var score = [498, 288, 390];

// for (var i = 0; i < +studentsName.length; i++) {
//   let percentage = Math.round((score[i] / 500) * 100);
//   document.write(
//     `score of ${studentsName[i]} is ${score[i]}. percentage ${percentage} <br>`
//   );
// }

//?=== Q 9 ===

//* Initial array
// var colors = ["red", "blue", "green"];

// document.write("<h2>Initial array</h2>");
// for (var i = 0; i < colors.length; i++) {
//   document.write(i + ") " + colors[i] + "</br>");
// }

//* step one
// var addToStart = prompt("Enter color to the beginning");
// colors.unshift(addToStart);

// document.write("<h2>Array after adding color to the beginning</h2>");
// for (var i = 0; i < colors.length; i++) {
//   document.write(i + ") " + colors[i] + "</br>");
// }

//* step two
// var addToEnd = prompt("Enter color to the end");
// colors.push(addToEnd);
// document.write("<h2>Array after adding color to the end</h2>");
// for (var i = 0; i < colors.length; i++) {
// document.write(i + ") " + colors[i] + "</br>");
// }

//* step three
// colors.unshift("black", "white");
// document.write("<h2>Array after adding two color to the beginning</h2>");
// for (var i = 0; i < colors.length; i++) {
//   document.write(i + ") " + colors[i] + "</br>");
// }

//* step four
// colors.shift();
// document.write(
//   "<h2>Array after deleting first color from the beginning</h2>"
// );
// for (var i = 0; i < colors.length; i++) {
//   document.write(i + ") " + colors[i] + "</br>");
// }

//* step five
// colors.pop();
// document.write(
//   "<h2>Array after deleting last color from the beginning</h2>"
// );
// for (var i = 0; i < colors.length; i++) {
//   document.write(i + ") " + colors[i] + "</br>");
// }

//* step six
// var indexNum = +prompt("Enter the index to add color");
// let colorToAddIndex = prompt("Enter the color to add at that index:");
// colors.splice(indexNum, 0, colorToAddIndex);
// document.write("<h2>Array after adding color at index numbers</h2>");
// for (var i = 0; i < colors.length; i++) {
//   document.write(i + ") " + colors[i] + "</br>");
// }

//* step seven
// var indexNum = +prompt("Enter the index to add color");
// let colorToAddIndex = prompt("Enter the color to add at that index:");
// colors.splice(indexNum, 0, colorToAddIndex);
// document.write("<h2>Array after adding color at index numbers</h2>");
// for (var i = 0; i < colors.length; i++) {
//   document.write(i + ") " + colors[i] + "</br>");
// }

//* step eight
// var indexNum = +prompt("Enter the index to delete color");
// deleteCount = +prompt("Enter the number of colors to delete:");
// colors.splice(indexNum, deleteCount);
// document.write("<h2>Array after adding color at index numbers</h2>");
// for (var i = 0; i < colors.length; i++) {
//   document.write(i + ") " + colors[i] + "</br>");
// }

//!=== Q 10 ===

// sort ka method nhi para abhi tak

//?=== Q 11 ===

//* Initial array
// var cityNames = ["karachi", "lahore", "islamabad", "Dadu", "sukkur", "larkana"];

// document.write("<h2>city names</h2>");
// for (var i = 0; i < cityNames.length; i++) {
//   document.write(i + ") " + cityNames[i] + "</br>");
// }

//* copied array
// var startIndex = +prompt("Enter start index to copy from");
// var endIndex = +prompt("Enter end index to copy till");
// var selectedCities = cityNames.slice(startIndex, endIndex);

// document.write("<h2>selected cities</h2>");
// for (var i = 0; i < selectedCities.length; i++) {
//   document.write(i + ") " + selectedCities[i] + "</br>");
// }

//!=== Q 12 ===

// join method bhi nhi para

//!=== Q 13 ===
//!=== Q 14 ===
//!=== Q 15 ===

// ye 3nu samjh nhi aae
