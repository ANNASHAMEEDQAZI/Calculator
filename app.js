alert("Welcome to Calculator");
swal("Press OK to see calculation")
let num1 = +prompt("Enter number one");
let num2 = +prompt("Enter number two");
let sum = num1 + num2;
let sub = num1 - num2;
let div = num1 / num2;
let multi = num1 * num2;
let mod = num1 % num2;
document.write("CALCULATOR", "<br/>");
document.write("The sum of number one and two is ", sum, "<br/>")
document.write("The subtraction of number one and two is ", sub, "<br/>")
document.write("The division of number one and two is ", div, "<br/>")
document.write("The multiplication of number one and two is ", multi, "<br/>")
document.write("The remainder of number one and two is ", mod, "<br/>")

