/*
 * Прототип это некоторый объект с помощью которого мы расширяем свойства объектов или классов
 * С помощью него мы устраивать наследования с помощью JS, что порой бывает очень удобно
 */

const person = new Object({
  name: 'Maxim',
  age: 25,
  greet: function() {
    console.log('Greet!');
  }
});

Object.prototype.sayHello = function() {
  console.log('Hello');
};

person.sayHello();

const lena = Object.create(person);
console.log(lena);
const str = 'I am string';

console.log(str.sup());
