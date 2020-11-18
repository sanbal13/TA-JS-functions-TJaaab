/*
1. Create a function named `sayHello` that that accepts a parameter `name` and alert `Hello [name]!`.
*/
function sayHello(name) {
  alert(`Hello ${name} !`);
}
sayHello(prompt("Enter your name"));
/*
2. Create a function named `getFullName` that accepts two parameter `firstName` and `lastName` and returns
fullName.

Example:
  getFullName("John", "Snow"); // "John Snow"
  getFullName("Nelson", "Mandela"); // "Nelson Mandela"
*/
function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}
let firstName = prompt("Enter your first name");
let lastName = prompt("Enter your last name");
alert(getFullName(firstName, lastName));

/*
3. Create a function named `addTwoNumbers` that accepts two numbers i.e `firstNum` and `secondNum` and returns
the sum of both numbers. If user passes any data other then numbers alert a message saying `Enter Valid Input`

Example:
addTwoNumbers(10, 22); // 32
addTwoNumbers(20, 32); // 32
addTwoNumbers(10, "100"); // Alert Enter Valid Input
*/
function addTwoNumbers(firstNum, secondNum) {
  return firstNum+secondNum;
}
let numOne = +prompt("Enter the first number");
let numTwo = +prompt ("Enter the second number");
if(isNaN(numOne)||isNaN(numTwo))
{
  alert("Enter Valid Input");
}
else {
  alert(`Sum : ${addTwoNumbers(numOne,numTwo)}`)
}


/*
4. Create a function named `calc` which accepts three parameter `numA`, `numB` and `operation`. Operation
can only be one of these `add, sub, mul, div`. Based on the operator return the value. If the `numA` or `numB`
is of any other data type alert `Enter Valid Input`

Example:

calc(10, 20, 'add'); // 30
calc(20, 10, 'sub'); // 10
calc(20, 10, 'mul'); // 200
*/
function calc(numA, numB, operation) {
  switch(operation) {
    case "add" :
      alert(`Addition : ${numA+numB}`);
      break;
    case "sub" :
      alert(`Subtraction : ${numA-numB}`);
      break;
    case "mul" :
      alert(`Multiplication : ${numA*numB}`);
      break;
    case "div" :
      alert(`Division : ${numA/numB}`);
      break;    
    default:
      alert("Not a valid operation");
      break;
  }
}
let numA = +prompt("Enter the value of first number");
let numB = +prompt("Enter the value of second number");
let operation = prompt("Enter the operation to be performed");
if(isNaN(numA)|| isNaN(numB)) {
  alert("Invalid Input");
}
else {
  calc(numA, numB, operation);
}

/*
5. Create a function named `isLeapYear` that accepts a number data type and return `true` or `false` based
on if the year id leap year or not.

isLeapYear(2000); // true
isLeapYear(2001); // false
*/
function isLeapYear(year) {
  if((year%100===0 && year%400===0)||(year%100!==0 && year%4===0))
  return true;
  else
  return false;
}
let year=prompt("Enter a year");
alert(`Leap Year : ${isLeapYear(year)}`);

/*
6. Create a function named `getFactorial` that accepts a number and return the factorial of the number.
*/
function getFactorial(num) {
   let factorial=1;
   for(let i = num; i >= 1; i--){
     factorial *= i;
   }
   return factorial;
}
let num = prompt("Enter a number");
alert(getFactorial(num));