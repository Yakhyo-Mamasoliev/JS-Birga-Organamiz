// //To run the code, to uncommand each part first. Total  parts

// //PART 1 Scope
// // Scope- varibalega bog`liq  narsa
// let c = 0;

// function calculate(a, b) {
//   c = a+b;
// }

// console.log("c value: ", c);
// calculate(14,11);
// console.log("c value: ", c);

//PART 2 Context
// Context - objectga bog`liq narsa
// object ichidagi funtion objectga ulanoladi, ammo function ichidagi function objectga ulanolmaydi
// we cannot work with sayYourAge even if we create a new variable and equalize it to person.age. Only works with arrow function
const person = {
  name: 'Haru',
  age: 30,
  greet() {
    console.log(`Hi, how are you?`);
  },

  introduce() {
    console.log(`I am ${this.age}`);
    
    function sayYourAge() { //doesnt work
      console.log(`I am ${this.age} old`);
    }

    //only works with arrow function
    sayYourAge = () => { //doesnt work
      console.log(`I am ${this.age} old`);
    }
    sayYourAge();
  }
}

person.greet();
person.introduce();

console.log(person);