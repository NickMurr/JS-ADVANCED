function hello(this: any) {
  console.log("Hello", this);
}

const person = {
  age: 24,
  name: "Nikita",
  sayHello: hello,
  sayHelloWindow: hello.bind(document.body),
  logInfo(job: string, phone: string) {
    console.group(`${this.name} info:`);
    console.log(`Name is ${this.name}`);
    console.log(`I am ${this.age}`);
    console.log(`Job: ${job}`);
    console.log(`Phone: ${phone}`);

    console.groupEnd();
  },
};

const lena = { age: 23, name: "Elena" };
const kostya = { age: 24, name: "Konstantin" };
const nikita = { age: 25, name: "Nikita" };

person.logInfo.apply(lena, ["JS Developes", "0504846093"]);
person.logInfo.call(kostya, "C++ Developes", "0662847548");
person.logInfo.bind(nikita)("C# Developer", "0937514846");

/// ==================================

const array = [1, 2, 3, 4, 5];

// function multBy(arr: any[], n: any): any[] {
//   return arr.map(function(i) {
//     return i * n;
//   });
// }

Array.prototype.multBy = function(n) {
  return this.map(function(i) {
    return i * n;
  });
};

console.log(array.multBy(20));
[5, 6, 7].multBy(2);
