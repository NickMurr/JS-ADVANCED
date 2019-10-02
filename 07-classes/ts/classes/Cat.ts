import { Animal } from "./Animal";

export class Cat extends Animal {
  public static type = "Cat";
  public color: string;

  constructor(options: any) {
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
