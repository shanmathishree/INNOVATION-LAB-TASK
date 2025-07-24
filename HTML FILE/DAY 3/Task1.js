//1. Write simple functions with fixed parameters

function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Shanmathi");


//2. Create functions accepting an arbitrary number of arguments:

function sumAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log("Total:", sum);
}

sumAll(5, 10, 15);  

function multiplyAll(...numbers) {
  let result = 1;
  for (let num of numbers) {
    result *= num;
  }
  console.log("Product:", result);
}

multiplyAll(2, 3, 4); 


 //3. Call and test these functions, output results via the console:
 console.log()

