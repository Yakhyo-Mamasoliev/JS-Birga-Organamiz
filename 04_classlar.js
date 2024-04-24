// // 04_CLASSES bu juda ko`p Objectlarni qisqa kod bilan hosil qilish uchun

// //naming standards: Camel, Snake, Kebab, Pascal case
// //camel case
// const myName = "John"; //myName, first little m and theb big N

// //snake naming
// let your_name = "Joho";

// //kebab case-asosan filelarni nomlashga ishlatiladi
// //example is: my-file.ts

// //Pascal case: Asosan classlarda ishlatiladi:   class => PersonGroup




//CLASS tashkiliy jihatdan Person, Constructor, Method, 
class Person{
  //State
  name = "";
  age = 0;

  //Constructor
  constructor(personName, personAge) {
    this.name = personName;
    this.age = personAge;
  }

  //Medthod
  introduce(){
    console.log(`My name is , ${this.name} and I am ${this.age} years old`);
  }

  greet(){
    console.log('Hi, How are you? ');
  }
  static help(){
    console.log('You need help bro?!');
  }
}

person1 = new Person("MArtin", 33);
person2 = new Person("Mike", 30);
person3 = new Person("SAmuel", 20);

person1.greet();
person1.introduce();



//Static MEthod <==> Class /// static medthod or properties is not same as class objects meaning, objects are not required for static to be exist, 
Person.help();