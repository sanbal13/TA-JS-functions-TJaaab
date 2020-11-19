// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration
function addOne(num){
  return num+1;
}

// - Write a Function Expression
let add = function (num){
  return num+1;
}

// - Write an Arrow Function without curly brackets(if possible)
let add = num => (num+1);

// - Write an Arrow Function with curly brackets
let add = num => {
  return num+1;
}

// - Execute the function
addOne(10);

// - Execute the function and store the return value in a variable.
let result = addOne(10); 

// - What is the typeof returnValue
"number"

/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration
     function substractOne(num) {
       return num-1;
     }

// - Write a Function Expression
     let subtractOne = function(num) {
      return num-1;
    }

// - Write an Arrow Function without curly brackets(if possible)
    let subtractOne = num => num-1;

// - Write an Arrow Function with curly brackets
    let subtractOne = num => {
      return num-1;
    }

// - Execute the function
     substractOne(10);

// - Execute the function and store the return value in a variable.
     let result = substractOne(10);

// - What is the typeof returnValue
     "number"

/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration
     function sum (x,y) {
       return x+y;
     } 

// - Write a Function Expression
     let sumOfNumbers = function(x,y) {
       return x+y;
     }

// - Write an Arrow Function without curly brackets(if possible)
    let sumOfNumbers = (x,y) => x+y;

// - Write an Arrow Function with curly brackets
     let sumOfNumbers = (x,y) => {
      return x+y;
    } 

// - Execute the function
     sum(x,y);

// - Execute the function and store the return value in a variable
     let sumOfNumbers = sum(x,y);

// - What is the typeof returnValue
     "number"

/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration
     function square(n){
       return n*n;
     }

// - Write a Function Expression
     let squareNumber = function (num) {
       return num*num;
     }

// - Write an Arrow Function without curly brackets(if possible)
     let squareNumber = (num) => (num*num);

// - Write an Arrow Function with curly brackets
     let squareNumber = (num) => {
      return num*num;
    }

// - Execute the function
     square(10);

// - Execute the function and store the return value in a variable
     let squareOfNumber =square(10)

// - What is the typeof returnValue
     "number"

/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration
    function isGreater(x, y) {
      if(x>y){
        return true;
      }
      else{
        return false;
      }
    }

// - Write a Function Expression
    let greaterNumber = function (x,y) {
      if(x>y){
        return true;
      }
      else{
        return false;
      }
    }

// - Write an Arrow Function without curly brackets(if possible)
     let greaterNumber = (x,y) => (x > y) ? true : false;

// - Write an Arrow Function with curly 
     let greaterNumber = (x,y) => {
      if(x>y){
        return true;
      }
      else{
        return false;
      }
    }

// - Execute the function
     isGreater(20,30);

// - Execute the function and store the return value in a variable
     let greater = isGreater(20,30);

// - What is the typeof returnValue
     "boolean"
/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration
function oddOrEven(num) {
  if(num%2==0)
  {
    return '${num} is even'
  }
  else
  {
    return '${num} is odd'
  }
}

// - Write an anonymous Function Expression
let oddOrEvenAnonymous = function (num) {
  if(num%2==0)
  {
    return '${num} is even'
  }
  else
  {
    return '${num} is odd'
  }
}

// - Write an named Function Expression
let oddOrEvenNamed = function OddEven(num) {
  if(num%2==0)
  {
    return '${num} is even'
  }
  else
  {
    return '${num} is odd'
  }
}

// - Write an Arrow Function without curly brackets (hint: use ternary operator)
let oddOrEvenArrow = num => num%2==0 ? '${num} is even' : '${num} is odd';

// - Write an Arrow Function with curly brackets
let oddOrEvenArrowCurly = num => {
  let returnStmt= num%2==0 ?  '${num} is even' :  '${num} is odd';
  return returnStmt;
}

// - Execute the function
oddOrEven(20);

// - Execute the function and store the return value in a variable
let answer = oddOrEven(20);

// - What is the typeof returnValue
"string"