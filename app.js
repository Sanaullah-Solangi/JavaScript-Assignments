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

var studentName = prompt("Enter studnent Name");
var eng = +prompt("Enter eng marks");
var maths = +prompt("Enter maths marks");
var urdu = +prompt("Enter urdu marks");
var cs = +prompt("Enter cs marks");
var fxs = +prompt("Enter fxs marks");
var total = eng + maths + urdu + cs + fxs;
var perc = (total / 500) * 100;
var grade = "";
if (total <= 100) {
  grade = "A+";
} else if (total <= 80) {
  grade = "A";
} else if (total >= 70) {
  grade = "B";
} else if (total >= 60) {
  grade = "C";
} else if (total >= 50) {
  grade = "D";
} else if (total < 40) {
  grade = "fail";
}

document.write(`
<table border="1">
  <tr>
    <th>student Name</th>
    <th>eng</th>
    <th>maths</th>
    <th>urdu</th>
    <th>cs</th>
    <th>fxs</th>
    <th>total</th>
    <th>perc</th>
    <th>grade</th>
  </tr>

  <tr>
    <td>${studentName}</td>
    <td>${eng}</td>
    <td>${maths}</td>
    <td>${urdu}</td>
    <td>${cs}</td>
    <td>${fxs}</td>
    <td>${total}</td>
    <td>${perc}%</td>
    <td>${grade}</td>
  </tr>
</table>`);
