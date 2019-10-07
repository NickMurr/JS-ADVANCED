// const person = {
//   surname: "Stark",
//   know(what: string, name: string) {
//     console.log(`You know ${what} ${name} ${this.surname}`);
//   },
// };
//
// const John = {
//   surname: "Snow",
// };
//
// person.know("everything", "Bran");
// person.know.call(John, "Nothing", "John");
// person.know.apply(John, ["Nothing", "John"]);
// person.know.bind(John, "Nothing", "John")();
//
// function Person(name: string, age: number) {
//   this.name = name;
//   this.age = age;
//
//   console.log(this);
//
// }

// const elena = new Person("Elena", 20);

// =====  Явный
// function logThis() {
//   console.log(this);
// }
//
// const obj1 = {
//   num: 42,
// };
//
// logThis.apply(obj1);

// ===== Неявный

// const animal = {
//   legs: 4,
//   logThis() {
//     console.log(this);
//   },
// };
//
// animal.logThis()

function Cat(color) {
  this.color = color;
  console.log("This", this);
  (() => {
    console.log("Arrow this", this);
  })();
}

new Cat("red");
