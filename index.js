// index.js

class Cat {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
}

class Bird {
  constructor(species, canFly) {
    this.species = species;
    this.canFly = canFly;
  }
}

module.exports = { Cat, Dog, Bird };
const { Cat, Dog, Bird } = require('../index'); // adjust path as needed

// Example usage
const cat = new Cat('Whiskers');
console.log(cat.speak()); // 'Whiskers' says meow!

const dog = new Dog('Rex');
console.log(dog.speak()); // 'Rex' says woof!

const bird = new Bird('Polly', 'parrot');
console.log(bird.speak()); // It's me! 'Polly', the parrot!

const bird2 = new Bird('Tweety', 'canary');
console.log(bird2.speak()); // Squawk!
