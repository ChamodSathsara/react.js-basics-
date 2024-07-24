class Animal {
  constructor(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
  }
  eat() {
    return `animal eating`;
  }
  static staticMeth() {
    return `this is a static methord`;
  }
}

class Dog extends Animal {
  constructor(name, age, color, brand) {
    super(name, age, color);
    this.brand = brand;
  }
  bard() {
    return `Bow Bowwwwww`;
  }
}

let dog1 = new Dog(`tommy`, 12, `black`, `altasion`);
console.log(dog1);
console.log(dog1.bard(), `  `, dog1.eat());
console.log(Animal.staticMeth());
