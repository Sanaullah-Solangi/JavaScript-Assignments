//!=============== Calculator ===============
//? ASCY NUMS = "33 to 47";
//* getting values in variables
var display = document.querySelector(".display");
var currentNum = document.querySelector(".currentInput");
var currentNum = document.querySelector(".currentInput");
var prevNum = document.querySelector(".prevInput");
var currentOperator = document.querySelector(".currentOperator");
//! function to get number
function addNumber(num = 0) {
  currentNum.innerHTML += num;
  currentNum.innerHTML.length;
}
//! function to add operator
function addOperator(ope) {
  if (ope == "CE") {
    currentNum.innerHTML = "";
    currentOperator.innerHTML = "";
    prevNum.innerHTML = "";
  } else {
    currentOperator.innerHTML = ope;
  }

  if (prevNum.innerHTML == "") {
    prevNum.innerHTML = currentNum.innerHTML;
  }
  currentNum.innerHTML = "";
}

//! function to cunclude result
function sum() {
  var result = 0;
  var num1 = parseFloat(prevNum.innerHTML);
  var num2 = parseFloat(currentNum.innerHTML);
  if (currentOperator.innerHTML == "+") {
    result = num1 + num2;
  } else if (currentOperator.innerHTML == "-") {
    result = num1 - num2;
  } else if (currentOperator.innerHTML == "*") {
    result = num1 * num2;
  } else if (currentOperator.innerHTML == "/") {
    result = num1 / num2;
  }
  currentNum.innerHTML = result;
  prevNum.innerHTML = "";
  currentOperator.innerHTML = "";
}
