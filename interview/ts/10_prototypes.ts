// __proto__
// Object.getPrototypeOf()

function Cat(name, color) {
  this.name = name;
  this.color = color;
}

Cat.prototype.getName = function() {
  return this.name;
};

Cat.prototype.voice = function() {
  console.log(`Cat ${this.name} says Meow`);
}

const c = new Cat("Cat", "white");
console.log(c.getName());
c.voice()
