// function sayHelloTo(name: string) {
//   const message = `Hello ${name}`;
//
//   return () => {
//     console.log(message);
//   };
// }
//
// const Nick = sayHelloTo("Nick")();
// const Lena = sayHelloTo("Lena")();
//

function createFrameworkManager() {
  const fw = ["Angular", "React"];
  return {
    print: () => {
      console.log(fw);
    },
    add: (frameWork: string) => {
      fw.push(frameWork);
    },
  };
}

// const manager = createFrameworkManager();
// manager.print();
// manager.add("Vue");
// manager.print();

// setTimeOut
const fib = [1, 2, 3, 5, 8, 13];
for (var i = 0; i < fib.length; i++) {
  ((j) =>  {
    setTimeout(() => {
      console.log(`fib[${j}] = ${fib[j]}`);
    }, 1500);
  })(i);

}
