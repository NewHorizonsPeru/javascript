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