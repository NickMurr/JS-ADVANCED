// import { Animal } from "./classes/Animal";
// import { Cat } from "./classes/Cat";
import { Box } from "./classes/Box";
import { Circle } from "./classes/Circle";

// const animal = new Animal({
//   age: 5,
//   hasTail: true,
//   name: "Animal",
// });

// const cat = new Cat({
//   age: 2,
//   color: "black",
//   hasTail: true,
//   name: "Cat",
// });

const box1 = new Box({
  selector: "#box1",
  size: 100,
  color: "red",
});

const box2 = new Box({
  selector: "#box2",
  size: 200,
  color: "green",
});

const c1 = new Circle({
  selector: "#c1",
  size: 90,
  color: "blue",
});
