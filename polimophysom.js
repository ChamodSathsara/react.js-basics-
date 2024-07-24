class Animal {
  constructor() {
    console.log("an animal created");
  }
  makeSound() {
    console.log(`Animal makes a sound`);
  }
}

class Dog extends Animal {
  constructor() {
    super();
    console.log("a Dog created");
  }
  makeSound() {
    console.log(`Dog makes a sound`);
  }
}

let animal1 = new Animal();
animal1.makeSound();

console.log(`.....................................`);

let dog1 = new Dog();
dog1.makeSound();
