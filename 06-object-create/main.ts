const person = Object.create({
  calculateAge() {
    return this.age;
  },
}, {
  name: {
    value: "Nikita",
    enumerable: true,
    writable: true,
    configurable: true
  },
  birthYear: {
    value: 1996,
    enumerable: false,
    writable: false,
    configurable: false
  },
  age: {
    get(): any {
      return new Date().getFullYear() - this.birthYear;
    },
    set(v: any): void {
      document.body.style.background = '#2eee56';
      console.log('Set age', v);
    }
  }
});

for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log('Key', key, person[key]);
  }
}
