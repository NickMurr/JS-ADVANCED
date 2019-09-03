// Замыкание - функция внутри другой функции

function createCallFunction(n) {
  return () => {
    console.log(1000 * n);
  };
}

const calc = createCallFunction(42);
calc();

/*
 * =============================
 */

function createIncrementor(n: number) {
  return (num: number) => {
    return n + num;
  };
}

const addOne = createIncrementor(1);
const addTen = createIncrementor(10);

console.log(addOne(10));
console.log(addOne(11));

console.log(addTen(10));
console.log(addTen(11));

/*
 * =============================
 */

const urlGenerator = (domain: string) => (url: string) =>
  `https://${url}.${domain}`;

const comUrl = urlGenerator("com");
const ruUrl = urlGenerator("ru");

console.log(comUrl("google"));
console.log(comUrl("netflix"));

console.log(ruUrl("yandex"));

/*
 * =============================
 */

function logPerson(this: any) {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}
function logName(this: any) {
  console.log(`Name: ${this.name}`);
}

interface IPerson {
  name: string;
  age: number;
  job: string;
}

interface IFunc {
  [name: string]: () => any;
}

const person1 = { name: "Михаил", age: 22, job: "Frontend" };
const person2 = { name: "Елена", age: 23, job: "Backend" };

function bind(obj: IPerson, logFunc: IFunc) {
  const newObj = { ...obj, ...arguments[1] };
  return newObj;
}

const bind2 = (context: IPerson, fn: any) => (...args: any[]) => {
  fn.apply(context, args);
};

const p1 = bind(person1, { logPerson, logName });
p1.logPerson();

// bind2(person1, logPerson)();
// bind2(person2, logPerson)();
