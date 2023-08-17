"use strict";
//1. Створити сутність "Людина".
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  displayInfoOfPerson() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

let person1 = new Person("Den", "41");
person1.displayInfoOfPerson();

let person2 = new Person("Oleg", "16");
person2.displayInfoOfPerson();

//2. Створити сутність "Автомобіль".
class Car {
  constructor(brand, model, year, number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.number = number;
    this.owner = null;
  }

  ownerVerification(owner) {
    if (owner.age >= 18) {
      this.owner = owner;
    }
  }

  displayInfoOfCar() {
    console.log(
      `Car: ${this.brand}, ${this.model}, ${this.year}, ${this.number}`,
    );
    if (this.owner) {
      console.log("Власник авто:");
      this.owner.displayInfoOfPerson();
    } else {
      console.log("Власника не має");
    }
  }
}

let car1 = new Car("audi", "Q8", "2020", "CA8888AC");
let car2 = new Car("toyota", "highlander", "2019", "CA7777AC");

car1.ownerVerification(person1);
car2.ownerVerification(person2);
car1.displayInfoOfCar();
car2.displayInfoOfCar();
