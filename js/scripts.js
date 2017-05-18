var a = parseInt(prompt("Enter the first number"));
var b = parseInt(prompt("Enter the second number"));
var x = prompt("What type of equation would you like to compute? (+, -, *, /)");

if ((isNaN(a) === false) && (isNaN(b) === false)) {
if (x === "+") {
alert(a+b);
} else if (x === "-") {
alert(a-b);
} else if (x === "*") {
alert(a*b);
} else if (x === "/") {
alert(a/b);
} else {
alert("You did it wrong");
};
} else {
alert("You did it wrong");
};
