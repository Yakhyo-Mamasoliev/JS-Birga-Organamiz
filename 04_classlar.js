// 04_CLASSES(this is a template) bu juda ko`p Objectlarni qisqa kod bilan hosil qilish uchun

//naming standards: Camel, Snake, Kebab, Pascal case
//camel case
const myName = "John"; //myName, first little m and theb big N

//snake naming
let your_name = "Joho";

//kebab case-asosan filelarni nomlashga ishlatiladi
//example is: my-file.ts

//Pascal case: Asosan classlarda ishlatiladi:   class => PersonGroup,  (or Person)




//CLASS tashkiliy jihatdan State, Constructor, Method, 
class Person{
  //State
  name = "";
  age = 0;

  //Constructor
  constructor(personName, personAge) {
    this.name = personName;
    this.age = personAge;
  }

  //Method
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

person1 = new Person("Martin", 33);
person2 = new Person("Mike", 30);
person3 = new Person("SAmuel", 20);

person1.greet();
person1.introduce();


// Static Method ==> faqat class orqali chaqiriladi
// Other Methods ==> qolganlarini instance orqali chaqirsa bo`ladi

// scope variablega qaratilgan
// contect objectga qaratilgan