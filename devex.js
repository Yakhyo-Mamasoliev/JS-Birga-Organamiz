////////////LESSON-02 FUNCTION VA VARIABLES /////////////////////

//Function (it consists of 2 things) => Define & Call

// // Define
// function greeting() {
//   console.log("Hello World");
// }
// //Call
// greeting();

//Function Criteria 3types: Structure, Returnign, Execution

//1. Structure: Regular, Expression, Arrow, Auto Invoke Functions
// //1.3 Regular Function
// function greeting() {
//   console.log("Hello World from Regular Function");
// }
// greeting();

//1.2 Expression(Anonym, cos it is most common type) Function 2: Anonymous and Named(Named is used so less often so we dont use it in this course) 
// const abc = function() {
//   console.log("Hello World from Expr F");
// }
// abc();

// //3.1 Arrow F
// const xyz = () => {
//   console.log('Hello World from Arrow');
// }
// xyz();

// //1.4 Auot Invoke
// (function(){
//   console.log('Hello');
// })
// ();

//Returnign: return and Void
// //2.1 Return function()returns the result
// function calculate(){
//   const a = 10;
//   const b = 20;
//   return  a + b;
// }
// const result = calculate();

// //2.2 Void function() doesnt return the result(cos it doens have return value(or written))
// function calculate(){
//   const a = 10;
//   const b = 20;
//   console.log("Result: ", a+b)
// }
// //here 
// let d = calculate();
// console.log('void: ', d);


// Execution = Asynchrous, Synchrous function. 
//all above codes are Synchrous, we will see Asynchrous in future InshaaAlloh!


//Function: argument and parametr
// // Define(parametr)
// function calculate(a, b){//this is define section, a,b is parametr function
//   return a+b;
// }
// console.log(calculate(2, 3));

// Priority order

// // case 1
// const a = 50;
// function calculate(a, b){//always inside of the function is above
//   return a+b;
// }
// console.log(calculate(2, 3));

// //case 2
// const a = 50;
// function calculate(b){//if there is no paremtr inside the function then it searches for ourside of function
//   return b;
// }
// console.log(calculate(3));


////////////LESSON-03 OBJECTLAR /////////////////////
