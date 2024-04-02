//* 1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.

// var firstName = prompt("Enter Your First Name");
// var lastName = prompt("Enter Your last Name");
// var fullName = firstName + " " + lastName;
// document.write(`your full name is <b>${fullName}</b>`);

//* 2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser

// var favMobile = prompt("Enter Your Favorate Mobile");
// var len = favMobile.length;
// document.write(`
// your favorite mobile name is ${favMobile} <br>
// length of string is ${len}`);

//* 3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .

// var str = "pakistani";

// var index = str.indexOf("n");
// document.write(`String: ${str} <br>
//     index of 'n' is: ${index}`);

// var flag = false;
// for (var i = 0; i < str.length; i++) {
//   if (str[i] == "n") {
//     flag = true;
//     document.write(`String: ${str} <br>
//     index of 'n' is: ${i}`);
//   }
// }
// if (flag == false) {
//   document.write("Enter valid value");
// }

//* 4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

// var str = "hello world";
// var lastIndex = str.lastIndexOf("l");
//document.write(`String: ${str} <br>
//Last index of 'l' is: ${lastIndex}`);

// var flag = false;
// for (var i = str.length; i >= 0; i--) {
//   if (str[i] == "l") {
//     flag = true;
//     document.write(`String: ${str} <br>
//     index of 'l' is: ${i}`);
//     break;
//   }
// }
// if (flag == false) {
//   document.write("Enter valid value");
// }

//* 5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

// var str = "pakistani";
// var char = str.charAt(3);
// document.write(`String: ${str} <br>
//      Character at 3rd number is: ${char}`);

//* 6. Repeat Q1 using string concat() method.

// var firstName = prompt("Enter Your First Name");
// var lastName = prompt("Enter Your last Name");
// var fullName = firstName.concat(" ", lastName);
// document.write(`your full name is <b>${fullName}</b>`);

//* 7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

// var str = "hyderabad";
// var replacedStr = str.replace("hyder", "islam");
// document.write(
//   `first string was: <b>${str}</b> <br> relaced String is: <b>${replacedStr}</b> `
// );

//* 8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.

// var message =
//   "Ali and Sami are best friends. They play cricket and football together.";
// var relacedMsg = message.replaceAll("and", "&");
// document.write(`
// <h3>first message</h3>  ${message}
// <h3>replaced message</h3>  ${relacedMsg}`);

//* 9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

// var str = "472";
// var num = new Number(str);
// document.write(typeof str + " " + str + "<br>");
// document.write(typeof num + " " + num);

//* 10. Write a program that takes user input. Convert and show the input in capital letters.

// var input = prompt("Enter any value").toUpperCase();
// document.write(input);

//* 11. Write a program that takes user input. Convert and show the input in title case.

// var input = prompt("Enter any value");
// var firstChar = input.slice(0, 1);
// var remainingChar = input.slice(1);
// var finalInput = firstChar + remainingChar;
// document.write(finalInput);

//* 12. Write a program that converts the variable num to string.
//* Remove the dot to display “3536” display in your browser.

// var num = 35.36;
// var str = num.toString();
// var updatedStr = str.replace(".", "");

// document.write("number" + " " + num + "<br>");
// document.write("string" + " " + updatedStr);

//* 13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .
//* Note:
//* ASCII code of ! is 33
//* ASCII code of , is 44
//* ASCII code of . is 46
//* ASCII code of @ is 64

//* 14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
//* Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.
//* Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. Example:

// arr = ["Cake", "apple pie", "coOkie", "chips", "patties"];

// var input = prompt("Enter any dish").toLowerCase();
// var flag = false;
// for (var i = 0; i < arr.length; i++) {
//   if (arr[i].toLowerCase() == input) {
//     flag = true;
//     document.write(`${input} is available at index ${i}`);
//   }
// }

// if (flag == false) {
//   document.write(`we are sorry ${input} is not available`);
// }

//* 15. Write a program to take password as an input from user. The password must qualify these requirements:
//* a. It should contain alphabets and numbers
//* b. It should not start with a number
//* c. It must at least 6 characters long
//* If the password does not meet above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.

//* 16. Write a program to convert the following string to an array using string split method.
//* Display the elements of array in your browser.
var university = "University of Karachi";

//* 17. Write a program to display the last character of a user input.

//* 18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.
