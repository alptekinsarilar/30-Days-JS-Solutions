// Level 1
class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }

  walk() {
    console.log(`My name is ${this.name} and I'm walking!`);
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof woof!");
  }
}

class Cat extends Animal {
  meow() {
    console.log("Meooow!");
  }
}

let animal = new Animal("Barny", 5, "black", 4);
animal.walk();

let dog = new Dog("Kangal", 3, "white", 4);
dog.bark();
