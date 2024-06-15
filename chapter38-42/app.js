var display = document.querySelector(".display");
var result = "";
var flag = false;
//! 1. Write a custom function power ( a, b ), to calculate the value of a raised to b.

//todo 2. Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not. Leap years ..., 2012, 2016, 2020, …
// var leapYears = [2012, 2016, 2020];
// function checkYear(event) {
//   var user = document.querySelector(".user");
//   if (flag == true || event.keyCode == 13) {
//     for (var i = 0; i < leapYears.length; i++) {
//       if (user.value == leapYears[i]) {
//         display.innerHTML = `yes ${user.value} is a <b>Leap year</b>`;
//         break;
//       } else {
//         display.innerHTML = `No ${user.value} is not a <b>Leap year</b>`;
//       }
//     }
//   }
//   flag = false;
// }
// function updateFlag() {
//   flag = true;
//   console.log(flag);
//   checkYear();
// }
//! 3. If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by
//* area = S(S − a)(S − b)(S − c)
//* where, S = ( a + b + c ) / 2
//* Calculate area of triangle using 2 functions

//! 4. Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these  marks. there should be 3 functions one is the mainFunction and other are for average and percentage. Call those functions from mainFunction and display result in mainFunction.

//todo 5. You have learned the function indexOf. Code your own custom function that will perform the same functionality. You can code for single character as of now.
// var arr = ["sani", "jamal", "kami", "farooque"];
// var num = "";
// var count = 0;
/*function myIndexOf(event) {
  var user = document.querySelector(".user");
  if (count == 0 || event.keyCode == 13) {
    for (var i = 0; i < arr.length; i++) {
      if (user.value == arr[i]) {
        flag = true;
        num = i;
      }
    }
    if (flag) {
      display.innerHTML = `iska index hai <b>${num}</b>`;
      flag = false;
    } else {
      display.innerHTML = `ye value mojood nhi hai`;
    }
    user.value = "";
    count = 1;
  }
}*/
/*function updateCount() {
  count = 0;
  myIndexOf();
}*/
//todo 6. Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long.
// var chars = "";
// var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
// var count = 0;
/*function deleteVowels(event) {
  var user = document.querySelector(".user");
  if (user.value.length <= 25) {
    if (count == 0 || event.keyCode == 13) {
      display.innerHTML = "";
      for (var i = 0; i < user.value.length; i++) {
        var ifVowel = true;
        for (var j = 0; j < vowels.length; j++) {
          if (user.value[i] == vowels[j]) {
            ifVowel = false;
          }
        }
        if (ifVowel) {
          display.innerHTML += user.value[i];
        }
      }
      user.value = " ";
    }
  } else {
    console.log(user.value.length);

    display.innerHTML = `is ki length hai ${user.value.length} or 25 letters se zyada ka sentence allow nhi hai`;
  }
  count = 1;
}*/
// alag hai
/* function updateCount() {
   count = 0;
   deleteVowels();
 }*/
//todo 7. Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text. For example, in the sentence
//* “Pleases read this application and give me gratuity”
//* Such occurrences are ea, ea, ui.

// var tem = "Pleases read this application and give me gratuity ";
// var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
// var doubleVowels = [];
// var tem2 = "";
/*for (var i = 0; i < tem.length; i++) {
  for (var j = 0; j < vowels.length; j++) {
    if (tem[i] == vowels[j]) {
      for (var k = 0; k < vowels.length; k++) {
        if (tem[i + 1] == vowels[k]) {
          console.log(tem[i], tem[i + 1]);
        }
      }
    }
  }
}*/
// var count = 0;
// var index = 0;
/*for (var i = index; i < tem.length; i++) {
  if (tem[i] == " ") {
    // console.log(tem.slice(index, i));
    tem2 = tem.slice(index, i);
    for (var j = 0; j < tem2.length; j++) {
      if (vowels.indexOf(tem2[j]) != -1 && vowels.indexOf(tem2[j + 1]) != -1) {
        console.log(`${tem2[j]} ${tem2[j + 1]} => ${tem2} `);
        count++;
        break;
      }
    }
    index = i + 1;
  }
}*/
// for (var i = 0; i < tem.length; i++) {
//   for (var j = 0; j < vowels.length; j++) {
//     if (tem[i - 1] == vowels[j]) {
//       if (vowels.indexOf(tem[i]) != -1) {
//         doubleVowels.push(tem[i - 1], tem[i]);
//       }
//     }
//   }
// }
// display.innerHTML = doubleVowels;

//! 8. The distance between two cities (in km.) is input through the keyboard. Write four functions to convert and print this distance in meters, feet, inches and centimeters.

//todo 9. Write a program to calculate overtime pay of employees. Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40 hours. Assume that employees do not work for fractional part of an hour.

//todo 10. A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the keyboard in hundreds, find the total number of currency notes of each denomination the cashier will have to give to the withdrawer.

// var letters = [];
// var fruits = [
//   "apples",
//   "zebra",
//   "lion",
//   "kite",
//   "wow",
//   "now",
//   "xray",
//   "development",
//   "banana",
//   "axe",
//   "bike",
//   "cow",
//   "monkey",
// ];
// var sortedArray = [];
// for (var i = 65; i <= 90; i++) {
//   letters.push(String.fromCharCode(i).toLowerCase());
// }
// for (var i = 0; i < letters.length; i++) {
//   for (var j = 0; j < fruits.length; j++) {
//     if (letters[i] == fruits[j].slice(0, 1)) {
//       sortedArray.push(fruits[j]);
//     }
//   }
// }

// for (var i = 0; i < sortedArray.length; i++) {
//   console.log(i + 1 + " " + sortedArray[i]);
// }
