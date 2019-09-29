class Animal {
  public static type = "ANIMAL";

  public name: string;
  public age: number;
  public hasTail: string;

  constructor(options) {
    this.name = options.name;
    this.age = options.age;
    this.hasTail = options.hasTail;
  }

  public voice() {
    console.log(`${this.name} says I am ${Animal.type}"`);
  }
}

const animal = new Animal({
  age: 5,
  hasTail: true,
  name: "Animal",
});

class Cat extends Animal {
  public static type = "Cat";
  public color: string;

  constructor(options) {
    super(options);
    this.color = options.color;
  }

  public voice() {
    super.voice();
    console.log(`${this.name} says I am ${Cat.type}"`);
  }

  get ageInfo() {
    return this.age * 7;
  }

  set ageInfo(newAge) {
    this.age = newAge;
  }
}

const cat = new Cat({
  age: 2,
  color: "black",
  hasTail: true,
  name: "Cat",
});
