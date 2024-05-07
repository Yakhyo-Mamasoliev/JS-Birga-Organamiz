
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

// //what keys an object has
// let values = Object.values(ob);
// console.log("Object keys", values);
