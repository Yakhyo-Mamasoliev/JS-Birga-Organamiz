// LESSON-02: Functions & Variables
// Define and call functions with different types (regular, expression, arrow, auto-invoke).
// Covering function return types (returning vs void) and argument/parameter handling.

function greeting() {
  console.log("Hello World");
}
greeting();  // Output: Hello World

// Function Types:
// 1. Regular Function
function greeting() {
  console.log("Hello World from Regular Function");
}
greeting();  // Output: Hello World from Regular Function

// 2. Expression Function (Anonymous)
const abc = function() {
  console.log("Hello World from Expression Function");
};
abc();  // Output: Hello World from Expression Function

// 3. Arrow Function
const xyz = () => {
  console.log('Hello World from Arrow Function');
};
xyz();  // Output: Hello World from Arrow Function

// 4. Auto-Invoke Function
(function() {
  console.log('Hello from Auto-Invoke Function');
})();  // Output: Hello from Auto-Invoke Function

// Return vs Void Functions:
// 1. Returning Function
function calculate() {
  const a = 10;
  const b = 20;
  return a + b;
}
const result = calculate();  // result = 30

// 2. Void Function (no return)
function calculate() {
  const a = 10;
  const b = 20;
  console.log("Result:", a + b);  // Logs result but doesn't return value
}
const d = calculate();  // d becomes undefined
// The calculate() function does not return a value, so d is assigned undefined. To return a value, add a return statement like return a + b;.


// Function Execution: Synchronous vs Asynchronous
// All above functions are synchronous. Asynchronous functions will be explored later.

// Function Parameters and Arguments:
// Define a function with parameters:
function calculate(a, b) {
  return a + b;
}
console.log(calculate(2, 3));  // Output: 5

// Argument priority based on parameter definitions:
// Case 1: Parameter inside the function
const a = 50;
function calculate(a, b) {
  return a + b;  // Uses 'a' from the function's parameter
}
console.log(calculate(2, 3));  // Output: 5

// Case 2: No parameter inside the function, uses external variable
const m = 50;
function calculate(n) {
  return n;  // Uses 'n' passed to the function
}
console.log(calculate(5));  // Output: 5
