
/*PROGRAMMING PARADIGMS: -is a relatively high-level way to structure and conceptualize the implementation of a computer program
 Most famous are: Functional Programming & OOP
 OOP BIG 4 CONCEPTS: ABSTRACTION, ENCAPULATIONS, INHERETENCE, POLYMORPHISM
 Today we will see only Abstraction
*/  
//object-propertylarga ega bo`lgan data type
//mostly two ways of of creating: literal and constructor
//Object via build via literal medthod

const person = {
  //state properties
  name: 'David',
  age: 22,
  country: 'English',
};

//key: name, age, 
//value: "David", 22

//CAll
//1way 
console.log('name of the person: ', person.name);

// //2way, creating varibale
// const a = person.name;
// console.log("name of the person is: ", a);


// //We can use function inside the object it is called method
//         const person = {
//           //properties
//           name: 'David',
//           age: 22,
//           country: 'English',
//           //using method
//           greet() {
//             console.log('Whassup: This is method: ');
//           },
//           introduce() {
//             console.log(`I am ${this.name} and my age is ${this.age} years old`);
//           }
//         };

//         const a = person.name;
//         console.log("name of the person is: ", a);

//         person.greet();
//         person.introduce();

   
// const pressButton = document.getElementById("butt");

// console.log('presentation: ', pressButton);

// pressButton.addEventListener('click', function(){
//   alert('You pressed this button!');
// });


// tips
// use the correct syntax for the console.log() statement with template literals is: ` which is backstick

//PRIMITIVE DATA TYPES VS OBJECT VARIABLE

//Primitive no Reference(location), but value
// const a = 'David';
// const b = 30;
// const c = true;
// const d = null;

// //Object Variable Reference(location), also value
// const person = {
//   name: 'Noha',
//   age: 30
// }

// let person2 = person //person and person2 has the same reference

// console.log(person.name);
// console.log(person2.name); 


// // spread operator
// // if you want to make new object with the same parameters with the new reference you need spread operator
// const person3 = {...person};
// person2.name = "David";
// console.log("Person 3: ", person2.name)



// //OBJECT BUILD VIA CONSTRUCTOR
// const ob = new Object();
// ob.name = "David";
// ob.hobby = "Reading";

// console.log("My hobby is:",ob.hobby);
// console.log(`My hobby is: ${ob.hobby}`);

// //what keys an object has
// let keys = Object.keys(ob);
// console.log("Object keys", keys);

// //what values an object has
// let values = Object.values(ob);
// console.log("Object keys", values);


// --- Assignment 1: Create and Manipulate Objects ---

// 1. Create an object called `car` using the literal method with the following properties:
//    - `brand` (e.g., "Toyota")
//    - `model` (e.g., "Corolla")
//    - `year` (e.g., 2023)
//    - `color` (e.g., "Blue")
// 2. Add a method inside the `car` object called `getCarDetails()` that returns a string summarizing the car details.
// 3. Use dot notation and bracket notation to access and update the `color` property. Log the results.
// 4. Add a new property, `owner`, and set it to a random name. Print the updated object using `console.log()`.

// --- Assignment 2: Primitive vs Object Variables ---

// 1. Create a primitive variable (`let a = 100`) and another variable (`let b = a`).
//    - Modify `b` and observe if `a` changes. Write the result.
// 2. Create an object called `person` using the constructor method with properties `name` and `age`.
//    - Assign this object to a new variable `personCopy`.
//    - Modify a property in `personCopy` and observe if the original `person` object is affected. Write the result.
// 3. Create a new object using the spread operator to clone the `person` object. Modify the clone and observe if it affects the original.

// --- Assignment 3: Practice Abstraction with Methods ---

// 1. Create an object called `bankAccount` with the following:
//    - Properties:
//      - `accountHolder` (name of the account holder)
//      - `balance` (initial amount, e.g., 1000)
//    - Methods:
//      - `deposit(amount)` - Adds the specified amount to the `balance` and logs the new balance.
//      - `withdraw(amount)` - Subtracts the amount from the `balance` if funds are sufficient; otherwise, logs "Insufficient funds."
// 2. Use the `bankAccount` methods to:
//    - Deposit 500 into the account.
//    - Attempt to withdraw 1200 and observe the result.
//    - Check the final balance and log it.


// --- Assignment 1: Create and Manipulate Objects ---

// Step 1: Create an object using the literal method
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2023,
  color: "Blue",

  // Step 2: Add a method to summarize car details
  getCarDetails() {
    return `Car Details: ${this.brand} ${this.model}, Year: ${this.year}, Color: ${this.color}`;
  }
};

// Step 3: Access and update the 'color' property
console.log("Original color:", car.color); // Dot notation
car["color"] = "Red"; // Bracket notation
console.log("Updated color:", car.color);

// Step 4: Add a new property and log the object
car.owner = "John Doe";
console.log("Updated car object:", car);

// Step 5: Call the method to get car details
console.log(car.getCarDetails());

// --- Assignment 2: Primitive vs Object Variables ---

// Step 1: Primitive variable
let a = 100; // Primitive value
let b = a; // Copy the value of `a`
b = 200; // Modify `b`
console.log("a:", a); // Output: 100 (unchanged)
console.log("b:", b); // Output: 200 (changed)

// Step 2: Create an object and assign it to a new variable
const person = new Object();
person.name = "Alice";
person.age = 25;

let personCopy = person; // Both reference the same object
personCopy.name = "Bob"; // Modify personCopy
console.log("person.name:", person.name); // Output: Bob (affected)
console.log("personCopy.name:", personCopy.name); // Output: Bob

// Step 3: Use the spread operator to create a new object
const personClone = { ...person }; // Clone the object
personClone.name = "Charlie"; // Modify the clone
console.log("person.name after cloning:", person.name); // Output: Bob (unchanged)
console.log("personClone.name:", personClone.name); // Output: Charlie

// --- Assignment 3: Practice Abstraction with Methods ---

// Step 1: Create an object with properties and methods
const bankAccount = {
  accountHolder: "John Doe",
  balance: 1000,

  // Deposit method
  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited ${amount}. New balance: ${this.balance}`);
  },

  // Withdraw method
  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient funds.");
    } else {
      this.balance -= amount;
      console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
    }
  }
};

// Step 2: Use the methods
bankAccount.deposit(500); // Deposited 500. New balance: 1500
bankAccount.withdraw(1200); // Withdrew 1200. New balance: 300
bankAccount.withdraw(400); // Insufficient funds
console.log(`Final balance: ${bankAccount.balance}`); // Final balance: 300
