//* 1. Declare and initialize an empty multidimensional array.(Array of arrays)

// var relatives = [
//   ["bestFriends", "jamal", "kamran", "sanaullah"],
//   ["smitFrinds", "huzaifa", "raffay", "ahmad"],
//   ["childFriends", "faisal", "imran", "farhan"],
// ];
// for (var i = 0; i < relatives.length; i++) {
//   document.write(relatives[i] + "<br>");
//   for (var j = 0; j < relatives[i].length; j++) {}
// }

//* 2. Declare and initialize a multidimensional array representing the following matrix:

// var relatives = [
//   [0, 1, 2, 3],
//   [1, 0, 1, 2],
//   [2, 1, 0, 1],
// ];
// for (var i = 0; i < relatives.length; i++) {
//   document.write(relatives[i] + "<br>");
//   for (var j = 0; j < relatives[i].length; j++) {}
// }

//* 3. Write a program to print numeric counting from 1 to 10.

// for (var i = 1; i <= 10; i++) {
//   document.write(i + "<br>");
// }

//* 4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.

// var num = +prompt("Enter table number");
// var range = +prompt("Enter the range");

// for (var i = 1; i <= range; i++) {
//   var result = num * i;
//   document.write(`${num} X ${i} = ${result} <br>`);
// }

//* 5. Write a program to print items of the following array using for loop:

// fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i = 0; i < fruits.length; i++) {
//   document.write(`${i}) ${fruits[i]} <br>`);
// }

//* 6. Generate the following series in your browser. See example output.
//? a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
//? b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
//? c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
//? d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
//? e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

//! first method

// var arr = [
//   [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
//   [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
//   [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
//   [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
//   ["2k", "4k", "6k", "8k", "10k", "12k", "14k", "16k", "18k", "20k"],
// ];

// for (var i = 0; i < arr.length; i++) {
//   document.write(arr[i] + "<br>");
// }

//! second method

// document.write("<b>counting:</b> <br> ");

// for (var i = 1; i <= 15; i++) {
//   document.write(`${i} `);
// }
// document.write("<br> <b>reverse counting:</b> <br> ");

// for (var i = 15; i >= 1; i--) {
//   document.write(`${i} `);
// }

// document.write("<br> <b>even:</b> <br> ");

// for (var i = 0; i <= 20; i++) {
//   if (i % 2 == 0) {
//     document.write(`${i} `);
//   }
// }

// document.write("<br> <b>odd:</b> <br> ");

// for (var i = 0; i <= 20; i++) {
//   if (i % 2 == 1) {
//     document.write(`${i} `);
//   }
// }

// document.write("<br> <b>Series:</b> <br> ");

// for (var i = 2; i <= 20; i++) {
//   if (i % 2 == 0) {
//     document.write(`${i}K `);
//   }
// }

//* 7. You have an array
//* A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
//* Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// var input = prompt("Enter any value");
// var flag = false;
// for (var i = 0; i <= A.length; i++) {
//   if (A[i] == input) {
//     document.write(
//       `<b>${input}</b> is available at index <b>${i}</b> in our bakery`
//     );
//     flag = true;
//     break;
//   }
// }

// if (!flag) {
//   document.write(`we are sorry <b>${input}</b> is not available here`);
// }

//* 8. Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12].
//* 9. Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12]
//! ye samjh nhi aarhe

//* 10. Write a program to print multiples of 5 ranging 1 to 100.

// var num = +prompt("Enter number");
// for (var i = num; i <= 100; i = i + num) {
//   document.write(i + "<br>");
// }



