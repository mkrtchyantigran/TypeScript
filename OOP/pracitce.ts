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

 class User {
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

 const user = new User("Alex", 25);
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