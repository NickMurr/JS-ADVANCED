export class Animal {
  public static type = "ANIMAL";

  public name: string;
  public age: number;
  public hasTail: string;

  constructor(options: any) {
    this.name = options.name;
    this.age = options.age;
    this.hasTail = options.hasTail;
  }

  public voice() {
    console.log(`${this.name} says I am ${Animal.type}"`);
  }
}
