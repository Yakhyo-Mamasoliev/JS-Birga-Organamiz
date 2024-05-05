// To run the code, to uncommand each part first. Total 3 parts
// Compiling Langugage(Java, C, C++) = Compline&Run (codni avval machine languagega o'girib keyin run qiladi).==> codda hato bo`lsa run qilib o`tirmaydi. Nodejsda shu narsa yo`qligi uchun u mashxur bo`lmagan, typescript keldi, nodejs keyin mashhur bo`ldi. 
// Interpriate Language(Python, PHP, Nodejs) = Run (Run qiladi).==> codeda hato bolsa run qilishdan oldin chiqarib beradi. 
// Nodejs in TypeScript. Biz nodejsni typescrpit bilan ishlatamiz doim chunki typescript compiling language, va hatoni rundan oldin chiqarib beradi.
// reference is an adress in location

//Part 1 Review class
class Account {
  //state
  owner;
  amount;
  currency;

  //constructor
  constructor(owner, amount, currency = 'usd') {
    this.owner = owner;
    this.amount = amount;
    this.currency = currency;
  }

  //method
  checkBalance() {
    console.log(`Hi ${this.owner}, your balance: ${this.amount} ${this.currency}`);
  }
  
  deposit(money) {
    this.amount = this.amount + money;
  }
}

const myAccount = new Account('David', 1000, 'euro');
myAccount.checkBalance();

console.log("===============");

myAccount.deposit(7000);
myAccount.checkBalance();

console.log("======== 2 =======");
myAccount.owner = 'Martin';
myAccount.checkBalance();

console.log("======== 3 =======");
myAccount.amount = 20000000;
myAccount.checkBalance();


//Part 2 Encapsulation in classes
//Encapsulation(): a concept used for object`s components, for restricting access. 
//Encapsulation(): public(default), private, protected.
//Java: public, private, protected
//JS: , #, _
protected is less stronger than private, less used. 

class Account {
  //state
  #owner; //private, It cannot be accessed or modified from outside the class. 
  #amount; 
  currency;

  //constructor(public ham emas, private ham emas)
  constructor(owner, amount, currency = 'usd') {
    this.#owner = owner;
    this.#amount = amount;
    this.currency = currency;
  }

  //method
  checkBalance() {
    console.log(`Hi ${this.#owner}, your balance: ${this.#amount} ${this.currency}`);
    this.#test();
  }
  
  deposit(money) {
    this.amount = this.#amount + money;
  }

  //method can be private, and cannot be called outside of class;
  #test() { 
    console.log(`This is only obtainable inside the class`);
  }
}

const myAccount = new Account('David', 1000, 'euro');
myAccount.checkBalance();

console.log("===============");

myAccount.deposit(7000);
myAccount.checkBalance();

console.log("======== 2 =======");
myAccount.owner = 'Martin';
myAccount.checkBalance();

console.log("======== 3 =======");
myAccount.amount = 20000000;
myAccount.checkBalance();


// //Part 3 Inheritance// Inheritance 
// parent va child o`rtasidagi narsa

//Paremt class
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  getDetails() {
    console.log(`${this.brand} ${this.model}`);
  }

  start() {
    console.log(`start engine`);
  }

  stop() {
    console.log(`stop engine`);
  }
  
  maximizeSpeed() {
    console.log(`${this.model} reaches ${this.speed} km/h`);
  }
}


// Child class 
class Toyota extends Car {
  #fuel = 0;
  constructor(model, category, speed) {
    super('Toyota', model); // parent class talab qilgan infoni yuboradi 
    this.category = category;
    this.speed = speed;
  }

  fillUpGasoline(a) {
    this.#fuel += a;
  }

  maximizeSpeed() {
    console.log(`${this.model} reaches ${this.speed} km/h`);
  }
}

console.log("==============")
class Tesla extends Car {
  #batery = 0;
  constructor(model, category, speed) {
    super('Tesla', model); // parent class talab qilgan infoni yuboradi 
    this.category = category;
    this.speed = speed;
  }

  chargePower(b) {
    this.#batery += b;
  }
}


const myCar = new Toyota('Camry', 'sedan', 220);
myCar.start();
myCar.stop();
myCar.fillUpGasoline(20);
myCar.getDetails();

console.log("==============")

const yourCar = new Tesla('Tesla S', 'sedan', 350); //subclass for the class "Toyota"
yourCar.start();
yourCar.stop();
yourCar.chargePower(50);
yourCar.getDetails();

console.log("==============")

// Polymorphism - inheritance teskarisi, parentda bo`lgan methodni childda o'zgartiribishlatish mumkin. 
// Polymorphism - functions that can accept arguments of different types and adapt their behavior based on the actual types of the arguments.
myCar.maximizeSpeed();
yourCar.maximizeSpeed();