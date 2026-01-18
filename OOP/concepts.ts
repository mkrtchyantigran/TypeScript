// ------------- class & object & instanceof --------------- //

class User {
  name: string;
  age: number;


  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getUsersInfo(): string {
    return `Your Welcome ${this.name}`;
  }

}

// user === instance, instanceof = exempliar
const user = new User("Jane", 27);
console.log(user.getUsersInfo());
console.log(user instanceof User); // true

class Person {
  hairColor: string;
  eyeColor: string;
  bodyColor: string;
  nationality: string;
  gender: string;

  constructor(
    hairColor: string,
    eyeColor: string,
    bodyColor: string,
    nationality: string,
    gender: string
  ) {
    this.hairColor = hairColor;
    this.eyeColor = eyeColor;
    this.bodyColor = bodyColor;
    this.nationality = nationality;
    this.gender = gender;
  }
}

const armine = new Person("Black", "black", "White", "Armenian", "Female");
const shushanik = new Person("Black", "black", "White", "Armenian", "Female");
const Jane = new Person("Blone", "Blue", "White", "American", "Female");

console.log(armine);
console.log(shushanik);
console.log(Jane);


// --------------- Encapsulation OOP Concept --------------- //

 //  IF JS ONLY #
 // IF ONLY TypeScript then private
 // Encapsulation OOP Concept

class BankAccount {
  private privateAccount: number = 0;
  private cardAccount: number = 0;

  set privateBalance(amount: number) {
    this.privateAccount += amount;
  }

  get publicBalance() {
    return this.cardAccount
  }

  set publicBalance(amount: number) {
    this.cardAccount += amount;
  }

  // deposit(amount: number) {
  //   this.usdBalance += amount;
  // }

  // getBalance(): number {
  //   return this.usdBalance;
  // }
}

// const a = new BankAccount();
// a.deposit(500);

// // console.log(a.balance) // Wrong

// console.log(a.getBalance());

const a = new BankAccount();
a.privateBalance = 999;
a.publicBalance = 777;
console.log(a.publicBalance);
console.log(a)


// ----------  Inheritance OOP Concept ----------- // 

// When we inherit from a class, it becomes the parent class.
// All PUBLIC and PROTECTED methods and properties of the class are inherited.
// as well as the fields


// Inheritance is when we get something from the parent class (Parent).
// That is, all public and protected methods and properties of the class are inherited.
// as well as fields.

//by default Everything is public
class Animal {
  name: string;
  type: string;

  constructor(name: string, type: string) {
    this.name = name;
    this.type = type;
  }

  // by default public and
  makeSound(sound: string) { // It can be either private, protected, or public.
    console.log(sound)
  }
}

class Dog extends Animal {
  color: string;
  constructor(name: string, type: string, color: string) {
    super(name, type);
    this.color = color;
  }
}

class Cat extends Animal {
  color: string;
  constructor(name: string, type: string, color: string) {
    super(name, type);
    this.color = color;
  }
}


const mia = new Dog("Mia", "Dog / Dalmatian", "Black and White");
const betty = new Cat("Betty", "Cat", "White");

mia.makeSound("gaf-gaf");
betty.makeSound("maw-maw");



// ------------- Polimorphism OOP Concept --------------- //
// The same method can have different behaviors.


class Shape {

}

  class Square extends Shape {
    constructor(private size: number) {
      super();
    }

    area(): number {
      return this.size * this.size;
    }
  }

class Circle extends Shape{
  constructor(private radius: number) {
    super();
  }

  area(): number {
    return Math.PI * this.radius ** 2;
  }
}

const shapes: Shape[] = [
  new Square(10),
  new Circle(5)
]

shapes.forEach(s => console.log(s.area()));


// ------------- Abstraction OOP Concept --------------- //

// Cannot create an instance
// Must be overridden
// abstract — what it means and how the child class implements it

 abstract class payment {
 abstract pay(amount: number): void; // overrides
 abstract isPaid(state: boolean): void; // overrides
 abstract bankName: string;

  printReceipts() {
    console.log("Payment Done");
  }
}

// abstract here is how we do it
class CardPayment extends payment {
  pay(amount: number): void {
    console.log(`Paid $${amount} by card`);
  }
  isPaid(state: boolean): void{
    state? console.log("PAID") : console.log("PENDING");
  }
  bankName = "Hello"
}

const x = new CardPayment();
x.pay(100)
x.isPaid(true);


// --------------- interface and implements OOP Concept ---------- //
// But we can also give it a type.

interface AuthService {
  login: (email: string, password: string) => boolean;
}

class JWTAuth implements AuthService {
  login(email: string, password: string): boolean {
    return email === "adming@website.com" && password === "admin1234" ? true : false;
  }
}


// ------------ Composition OOP Concept --------------- //

// LIFO - lAST IN fIRST OUT
// f(g(x())) -> x -> g ->  f;

// example 1
const addOne = (x: number) => x + 1;
const double = (x: number) => x * 2; 

const f = (x: number) => addOne(double(x)); 

console.log(f(3));

// example 2

const compose = (...fns:Function[]) => (x0: number)  => fns.reduceRight((x, f: Function) => f(x), x0)

const increaseBy5 = (n: number) => n + 5;
const trippleValue = (n: number) => n * 3;
const reduceBy10 = (n: number) => n - 10;

// // ----------------------------------3-----------2---------------1
const applyOperations = compose (reduceBy10, increaseBy5, trippleValue);

// trippleValue -> 3 * 7 = 21
// increaseBy5 -> 21 + 5 = 26
// reduceBy10 -> 26 - 10 = 16
console.log(applyOperations(7));


// -------------------- SOLID PRINCIPLES OOP Concept --------------- //

// SOLID = 5 OOP design pricniples
// S - Single Responsibility (SRP)
// O - Open/Closed - Principle (OCP)
// L - Liskov Substitution Principle (LSP)
// I - Interface Segregation Principle (ISP)
// D - Dependency Inversion Principle (DIP) 

// Bad Practice 
// one class must do only one job
// class userService {
//   register ( ) {
//     // save user
//     // send email
//     // log actio
//   }
// }

// // Good Practice
class UserRepository {
  save(user: string) { }
}

class EmailService {
  sendWelcomeEmail(user: string) { };
}
class Logger {
  log(message: string) { };
}

class UserService {
  constructor(
    private repo: UserRepository,
    private email: EmailService,
    private logger: Logger
  ) { }

  register(user: string) {
    this.repo.save(user);
    this.email.sendWelcomeEmail(user);
    this.logger.log(`User ${user} registered.`);
  }
}


// O - Open/Closed - Principle (OCP)

// Bad Practice
// class PaymentService {
//   pay(type: "card" | "paypal", amount: number ) {
//     if (type === "card") {}
//     if (type === "paypal") {}
//   }
// }

// good pracitce
interface PaymentMethod {
  pay(amount: number): void;
}

class CardPayment implements PaymentMethod {
  pay(amount: number) {
    console.log(`Paid $${amount} using Card.`);
  }
}

class PaypalPayment implements PaymentMethod {
  pay(amount: number) {
    console.log(`Paid by paypal $${amount}`);
  }
}

class PaymentService {
  constructor(private method: PaymentMethod) { }
  process(amount: number) {
    this.method.pay(amount)
  }

}


// L - Liskov Substitution Principle (LSP)


// Bad Practice
// class Bird {
//   fly() {}
// }

// class Penguin extends Bird {
//   flye() {
//     throw new Error("Penguins can't fly");
//   }
// }

// Good Practice
interface Bird { }

interface FlyingBird extends Bird {
  fly(): void;
}

class Sparrow implements FlyingBird {
  fly() { }
}

class Penguin implements Bird { }


// I - Interface Segregation Principle (ISP)


// bad practice
// interface Worker {
//   work(): void;
//   eat(): void;
// }

// class Robot implements Worker {
//   work(): void{}
//     eat(): void {}
// }


// good practice

// It’s better to have a few small interfaces rather than many large ones, but one is enough.
interface Workable {
  work(): void
}
interface Eatable {
  eat(): void;
}

class Human implements Workable, Eatable {
  work(): void { };
  eat(): void { };
}

class Robot implements Workable {
  work(): void { };
}


// D - Dependency Inversion Principle (DIP) 

// Bad Practice
// class MySQLDataBase {
//   connect () {}
// }

// class UserService {
//   db = new MySQLDataBase()
// }

// Good Practice
interface Database {
  connect(): void;
}

class MySQL implements Database {
  connect(): void { }
}

class PostGreSQL implements Database {
  connect(): void {

  }
}

class MongoDB implements Database {
  connect(): void { }
}

class UserService2 {
  constructor(private db: Database) { }
}