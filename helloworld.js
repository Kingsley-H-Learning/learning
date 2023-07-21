// // function greeting() {
// //   console.log('Hello World');
// // }
// // greeting.lang = 'English';
// // // Prints 'English'
// // greeting.call();
// // console.log(greeting);

// // const person = {
// //   firstName: 'John',
// //   lastName: 'Doe',
// //   printName: function () {
// //     console.log(this.firstName + ' ' + this.lastName);
// //   },
// // };

// // const secondPerson = {
// //   firstName: 'Kingsley',
// //   lastName: 'Huang',
// // };

// // const personPrintName = person.printName;
// // personPrintName.call(secondPerson);

// function greet(greeting, lang) {
//   console.log(lang);
//   console.log(`${greeting}, I am ${this.name} and I am ${this.age} years old`);
// }
// const john = {
//   name: 'John',
//   age: 24,
// };
// const jane = {
//   name: 'Jane',
//   age: 22,
// };
// // Hi, I am John and I am 24 years old
// greet.apply(john, ['Hi', 'en']);
// // Hi, I am Jane and I am 22 years old
// greet.apply(jane, ['Hola', 'es']);

function Person() {
  (this.name = 'John'), (this.age = 23);
}

// creating objects
const person1 = new Person();
const person2 = new Person();

// adding property to constructor function
Person.prototype.gender = 'male';

// prototype value of Person
console.log(Person.prototype);

// inheriting the property from prototype
console.log(person1.gender);
console.log(person2.gender);
