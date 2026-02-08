// class, objects, and instanceof

class Books {
  author: string;
  title: string;
  year: number;
  description: string;

  constructor(author: string, title: string, year: number, description: string ) {
    this.author = author; 
    this.title = title; 
    this.year = year;
    this.description = description;
  }

  getBook(): {} {
    return {
      author: this.author,
      title: this.title,
      year: this.year,
      description: this.description
    }
  }
}

const book1 = new Books (
  "Carl Sagan", 
  "The Blue Dot", 
  1994, 
  "Pale Blue Dot: A Vision of the Human Future in Space is a 1994 book by the astronomer Carl Sagan."
)
console.log(book1.getBook());

console.log(book1 instanceof Books);


//Encapsulation 

class Companies {
  private companyName: string;
  private companyProduct: string;
  private yearFounded: number;
  private country: string;
  private founder: string;
  private OfficesCount: number;
  private budget: number;

  constructor (
    companyName: string, 
    companyProduct: string, 
    yearFounded: number, 
    country: string,
    founder: string,
    OfficesCount: number,
    budget: number
  ) {
    this.companyName = companyName; 
    this.companyProduct = companyProduct;
    this.yearFounded = yearFounded;
    this.country = country;
    this.founder = founder;
    this.OfficesCount = OfficesCount;
    this.budget = budget;
  }

  set setBudget(amount: number) {
    this.budget = amount;
  }

  get getBudget() {
    return this.budget;
  }

  set setOfficesCountInfo (OfficesCount: number) {
    this.OfficesCount = OfficesCount;
  }

  get getOfficesCountInfo() {
    return this.OfficesCount;
  }

}

const Apple = new Companies("Apple", "Electronics", 1976, "USA", "Steve Jobs", 500, 2000000);

 Apple.setBudget = 3000000;
 Apple.setOfficesCountInfo = 600;

 console.log(Apple.getBudget)
 console.log(Apple.getOfficesCountInfo)

// task 1

 class UserProfile {
  private name: string;
  private age: number;

  constructor (username: string, age: number) {
    this.name = username;
    this.age = age;
  }

  get username () {
    return this.name;
  }

  set ageChanger (age: number) {
    if(age > 0 && age < 120) {
      this.age = age;
    } else {
      console.log("Please enter a valid age"); 
    }
  }

  get getAge () {
    return this.age;
  }

 }

 const user = new UserProfile("Alex", 25);
console.log(user.username); 
user.ageChanger = 150;
user.ageChanger = 30;  
console.log(user.getAge); 


// task 2

class Car {
  readonly model: string;
  private fuel: number;
  private mileage: number = 0;

  constructor (model: string, fuel: number,) {
    this.model = model;
    this.fuel = fuel;
  }

   drive(kilometers: number) {
    if(kilometers / 10 <= this.fuel) {
      this.mileage += kilometers;
      this.fuel -= kilometers / 10;
      console.log(`Poyexal, potratil ${kilometers / 10} l, probeg stal ${this.mileage} km`)
    } else {
      console.log("ne xvataet topliva");
    }
  }

  refuel(litters: number ) {
    this.fuel += litters;
  }

   getFuelLevel () {
    return this.fuel;
  }

}

const bmw = new Car("BMW X5", 50); 
bmw.drive(100); 
console.log(bmw.getFuelLevel()); 
bmw.drive(1000);


// // task 3

class CoffeeMachine {

  private waterAmount: number;
  private coffeeBeans: number;
  

  constructor (waterAmount: number, coffeeBeans: number) {
    this.waterAmount = waterAmount;
    this.coffeeBeans = coffeeBeans;
  }

  makeCoffee(type: string) {

    const neededWater = type === "Espresso" ? 50: 150;
    const neededBeans = 10;

    if (this.waterAmount >= neededWater && this.coffeeBeans >= neededBeans) {
      this.waterAmount -= neededWater;
      this.coffeeBeans -= neededBeans;

      return console.log(`Your ${type} is ready`);
    } else {
      if (this.waterAmount < neededWater) {
        return console.log(`it isn't enough water needs ${neededWater} ml, but have ${this.waterAmount} ml}`)
      } else if (this.coffeeBeans < neededBeans) {
        return console.log(`is isn't eanough coffee beans needs ${neededBeans} g, but have ${this.coffeeBeans} g`);
      }
    }

  }

  addWater(amount: number) {
    this.waterAmount += amount
  }

  addBeans(amount: number) {
    this.coffeeBeans += amount;
  }
}

const coffeMachine1 = new CoffeeMachine(150, 10)

console.log(coffeMachine1.makeCoffee("Americano"))


// inharitance

  class Countries {
    private countryName: string;
    private population: number;
    private economicalSituation: string;
    private bordersOf: string

    constructor(countryName: string, population: number,economicalSituation: string, bordersOf: string  ) {
      this.countryName = countryName;
      this.population = population;
      this.economicalSituation = economicalSituation;
      this.bordersOf = bordersOf;
    }

    set Setpopulation (population: number) {
      this.population += population;
    }

    countryInfo ()  {
      return {
      countryName: this.countryName,
      population: `${this.population} mln`,
      economicalSituation: this.economicalSituation,
      bordersOf: this.bordersOf
      }
    }

  }

  class Country extends Countries {

    constructor(
      countryName: string,
      population: number,
      economicalSituation: string,
      bordersOf: string
    ) {
      super(
        countryName,
        population,
        economicalSituation,
        bordersOf
      ) 

    }
  }

  const Norway = new Country("Norway", 5.6, "Norway's economy shows resilience with strong labor markets, high household incomes, and significant energy/seafood exports, but faces slowdown from high interest rates impacting consumption and investment", "Norway shares land borders with Sweden, Finland, and Russia" );

  Norway.Setpopulation = 0.1;

  console.log(Norway)


  // Polymorphism

  abstract class FoodsForCompanies {

  abstract giveFood(): string;
}


class Pizza extends FoodsForCompanies {
  constructor(private pizzaType: string, private pcs: number) { super(); }
  giveFood(): string {
    return `You ordered ${this.pcs} pcs of ${this.pizzaType} pizza.`;
  }

  addChease() {return console.log("chease addes")};
}

class SalatCezar extends FoodsForCompanies {

  constructor(private salatPortion: number, private withChicken: boolean, private orderTime: number) {super()}

  giveFood() {
    return `
    you ordered ${this.salatPortion} 
    ${ this.withChicken ? "with chicken" : "without chicken"}, 
     and we will order it in 
     ${this.orderTime} minutes
     `;
  }
}


class  DeliveryService <T extends FoodsForCompanies> {
  private order: T;

  constructor(item: T) {
    this.order = item;
  }

  diliver() {
    console.log("Delivering your order:" + this.order.giveFood());
  }

  get getOrder() {
    return this.order;
  }
}

const MyPizza = new Pizza("Pepperoni", 2);

const pizzaDelivery = new DeliveryService(MyPizza);
const salatDelivery = new DeliveryService(new SalatCezar(1, false, 15));


// task 1


abstract class Hero {
  constructor( protected name: string) {}

  abstract attack(): void;
}


class Warrior extends Hero {

  constructor( name: string) {
    super(name);
  }


  attack(): void {
    console.log(`${this.name} attacks with a sword!`);
  };
}

class Mage extends Hero {
  constructor( name: string) {
    super(name);
  }
  attack() {
    console.log(`${this.name} casts a fireball!`);
  }
}

const party: Hero[] = [
  new Warrior("Thorin"),
]

party.forEach(hero => {
  hero.attack();
});


// task 2

abstract class PaymentMethod {

  abstract pay(amount: number): void;
}

class CreditCard extends PaymentMethod {
  constructor(private cardNumber: string) {
    super();
  }

  pay(amount: number) {
    console.log(`withrown ${amount} $ with card ${this.cardNumber}`);
  }
}

class PayPal extends PaymentMethod {
  constructor(private email: string) {
    super();
  }

  pay(amount: number) {
    console.log(`withdrown ${amount} $ with wallet ${this.email}`);
  }
}

const processUserPayment = (method: PaymentMethod, amount: number) => {
  method.pay(amount);
}

processUserPayment( new CreditCard("1234-5678-9012-3456"), 500);
processUserPayment( new PayPal("user@example.com"), 300)

// task 3

abstract class Vehicle {
  constructor(public model: string){}
}

class Truck extends Vehicle {
  constructor (model: string, public CargoCapacity: number) {
    super(model);
  }
}

class Car extends Vehicle {
  constructor(model: string, public isConvertible: boolean) {
    super(model)
  }
}

 class Garage<T extends Vehicle> {
  constructor (private vehicle: T) {}
   
  repair() {
    console.log(`reparing ${this.vehicle.model}... ready!`);
    return this.vehicle;
  }
 }

const myTruck = new Truck("Man", 25000);

const TruckGarage = new Garage(myTruck)

const repairedTruck = TruckGarage.repair();

console.log(repairedTruck.CargoCapacity);


// Abstraction

abstract class Drink {
  constructor ( protected name: string, protected brand: string, protected portion: number, protected price: number) {}

  abstract makeDrink (): void;

  getInfo () {
    return `${this.brand}  ${this.name}`;
  }
}

class Coffee extends Drink {
  constructor(name: string, brand: string, portion: number, price: number)  {
    super(name, brand, portion, price);
  }

  makeDrink(): void {
    console.log(`We are making office ${this.getInfo()} in cafe, Portion: ${this.portion}`);
  }
  
}

class Tea extends Drink {
  constructor(name: string, brand: string, portion: number, price: number, protected country: string) {
    super(name, brand, portion, price);
  }

  makeDrink():void {
    console.log(`We are making your tea ${this.getInfo()} with portion ${this.portion} with price ${this.price} from ${this.country}`);
  }
}
 
const myLatte = new Coffee("Latte", "Starbucks", 250, 5);

const MyTea = new Tea("Green Tea", "Lipton", 200, 3, "China");


// inheitence and implements

interface isCar {
  check(wheels: number, Engine: string): boolean;
}

class Checking implements isCar {
  check (wheels: number, Engine: string): boolean {
    return wheels === 4 && Engine === "v8" ? true : false;
  }
}



//task 2

interface Item {
  id: number
};

class User implements Item {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

class product implements Item {
  id: number;
  price: number;

  constructor (id: number, price: number) {
   this.id = id;
   this.price = price;
  }
}

class Box< T extends Item>  {
  
  constructor(private subject: T) {}

  getItemInfo() {
    console.log(`ID предмета: ${this.subject.id}`)
  }
} 

const user1 = new User(1, "Jone")
const product1 = new product(1, 5.3)

const boxForUser = new Box(user1);
const boxForProduct = new Box(product1);

boxForUser.getItemInfo();
boxForProduct.getItemInfo();


// Composition

// task 1

const wordProcessing = (...fncs: Function[]) => (firstArg: number) => fncs.reduceRight((dynamicArg, f: Function) => f(dynamicArg), firstArg) 

const trimString = (DynamicArg: string): string => {
  return DynamicArg.trim();
}   

const toUpperCase = (DynamicArg: string): string => {
  return DynamicArg.toLocaleUpperCase();
}

const addHelloPrefix = (DynamicArg: string): string => {
  return `Hello, ${DynamicArg}!`;
}


// task 2

const pipe = (...fns:Function[]) => 
(x0: number)  =>
 fns.reduce((x, f: Function) => 
 f(x), x0);

const multiplyBy2 = (n: number) => n * 2;
const add10 = (n: number) => n + 10;
const minus5 = (n: number) => n - 5;

const myPipe = pipe(minus5, multiplyBy2, add10);
console.log(myPipe(10));

// task 3 

// const getCosts = (...fns: Function[]) => 
//   (FirstArg: number) => 
//     fns.reduceRight((argDyn, fun: Function) => 
//       fun(argDyn), FirstArg);


// const finishCost = (finishCost: number) => finishCost * 12;

// const addTaxes = (baseCost: number) => baseCost + 9;

// const addDeliverCost = (baseCost: number) => baseCost + 7;

// const serviceCost = (baseCost: number) => baseCost + 13;

// const getFinishCoast =  getCosts(finishCost, addTaxes, addDeliverCost, serviceCost);

// console.log(getFinishCost(34))


// version 1

function getInvestemntsMoney (...fns: Function[]) {
  return function (firstArg: number) {
    return fns.reduceRight((dynArg, fun: Function) => fun(dynArg), firstArg)
  }
}


// version 2

 function getInvestemntsMoney (...fns: Function[]) {
  return function (firstArg: number) {
    return fns.reduceRight(function (dynArg, fun: Function) {
      return fun(dynArg)
    }, firstArg)
  }
} 

function addProcentFromFirstCompany (amount: number) {
  return amount + 10
}

function addProcentFromSecondCompany (amount: number) {
  return amount + 7
}

function addProcentFromThirdCompany (amount: number) {
  return amount + 17
}

function finishEarnings (amount: number) {
  return `You earned ${amount}$`
}

const combaineCompanies = getInvestemntsMoney (
  finishEarnings,
  addProcentFromThirdCompany,
  addProcentFromSecondCompany,
  addProcentFromFirstCompany
)
console.log(combaineCompanies(43))

// SOLID PRINCIPLES OOP Concept

// S - Single Responsibility (SRP)
// O - Open/Closed - Principle (OCP)
// L - Liskov Substitution Principle (LSP)
// I - Interface Segregation Principle (ISP)
// D - Dependency Inversion Principle (DIP) 

// S - Single Responsibility (SRP)


class Check {
  checking(product: string) {
    console.log(`${product} has aready checked`)
  }
}

class Pack {
  packing(product: string) {
    console.log(`${product} has aready packed`)
  }
}

class Assembly {
    assembling(product: string) {
       console.log(`${product} has aready assembled`)
    }
}

class FinishProduct {
  constructor (
    private pack: Pack,
    private check: Check,
    private assembly: Assembly
   ) {}

    processProduct (product: string) {
     this.assembly.assembling(product)
     this.check.checking(product)
     this.pack.packing(product)

    return `${product} is ready`
   }
}

const Assembler = new Assembly();
const Chacker = new Check();
const Packer = new Pack();

const ProductProcess = new FinishProduct(Packer, Chacker, Assembler)

console.log(ProductProcess.processProduct("mouse"));


// O - Open/Closed - Principle (OCP)

class Building {
  offices(qty: number): void {}
}

class FirstSectioin implements Building {
  offices(qty: number):void {
    console.log(`in the fisrt section offices are ${qty}`)
  }
}

class SecondSection implements Building {
  offices(qty: number): void {
    console.log(`in the second section offices are ${qty} `);
  }
}

const firstSectionOffices = new FirstSectioin()
const SecondSectionOffices = new SecondSection()

console.log(firstSectionOffices.offices(4))
console.log(SecondSectionOffices.offices(7))


// L - Liskov Substitution Principle (LSP)

interface fruits{};

interface ArmenianFruits extends fruits {
   growInArmenia(): void {}
}

interface Pomegranate extends ArmenianFruits {
  growInArmenia():void {}
}


//I - Interface Segregation Principle (ISP)
// t's better to have several small interfaces than just one, even if it's not very big.
interface Swimmable {
  swim(): void;
}

interface Walkable {
  walk(): void;
}

class Shark implements Swimmable {
  swim(): void {
    console.log("Shark can swim only in waterr")
  }
}

class Bear implements Walkable {
  walk(): void {
    console.log("Bear is walking in the forest")
  }
}

class Dog implements Walkable {
  walk(): void {
   console.log("dog can walking with human")
  }
}

const shark = new Shark();
      shark.swim();
const dog = new Dog()
      dog.walk();
interface Avocado extends fruits {} 


// D - Dependency Inversion Principle (DIP) 

interface Frameworks {
  installFrameWork(): void;
}

interface Languages {
  installLenguage(): void;
}

class React implements Frameworks {
  installFrameWork() {console.log("install React")};
}

class Next implements Frameworks {
 installFrameWork() {console.log("install Next.js")};
}

class TypeScript implements Languages {
  installLenguage() {console.log('install TypeScript')}
}

class Vite implements Frameworks {
 installFrameWork() {console.log("install Vite")};
}

class buildApp implements React, TypeScript {
  installFrameWork() {console.log("install React")};
  installLenguage() {console.log('install TypeScript')}
}