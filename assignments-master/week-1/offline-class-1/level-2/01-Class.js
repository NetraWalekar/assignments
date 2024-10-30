
// class Animal {
//   constructor(name, legCount) {
//     this.name = name
//     this.legCount = legCount
//   }
//   describe() {
//     return `${this.name} has ${this.legCount} legs`
//   }
// }
class animal{
  name = 'cat';
  legcount = 4
}

const instance1 = new animal()

console.log(instance1.name);
console.log(instance1.legcount);