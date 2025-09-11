class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}


let person1 = new Person("John", 30);
person1.greet();

function extractedGreet(person) {
  console.log(`Hello, my name is ${person.name} and I'm ${person.age} years old.`);
}

extractedGreet(person1);
