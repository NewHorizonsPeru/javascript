function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
Person.prototype.printFullName = function () {
  console.log(`${this.firstName}, ${this.lastName}.`);
};
console.log(typeof Person);
const person = new Person("Lucio", "Perez");
person.printFullName();

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  printFullName() {
    console.log(`${this.firstName}, ${this.lastName}.`);
  }
}
console.log(typeof Person);
const person = new Person("Lucio", "Perez");
person.printFullName();
