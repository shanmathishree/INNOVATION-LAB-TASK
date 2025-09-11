class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age); 
    this.studentId = studentId;
  }

  greet() {
    super.greet(); 
    console.log(`I'm a student with ID ${this.studentId}.`);
  }

  showId() {
    console.log(`My student ID is ${this.studentId}.`);
  }
}


let student1 = new Student("Alice", 20, "S123");
student1.greet();
student1.showId();
