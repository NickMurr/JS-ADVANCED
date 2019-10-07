// Let
// let a = "Variable a";
// let b = "Variable b";
//
// {
//   a = "New variable A";
//   const b = "Local Variable B";
//   console.log("Scope a", a);
//   console.log("Scope b", b);
// }
//
// console.log("A:", a);
// console.log("B:", b);

// Const
const PORT = 8080;
const array = ["Javascript", "is", "awesome"];
array.push("!");
array[0] = "JS";
console.log(array);

const obj: any = {};
obj.name = "Nick";
obj.age = 22;
console.log(obj);

delete obj.name;
console.log(obj);

