//1. Convert traditional function declarations into function expressions:

function add(a, b) {
    return a + b;
}
console.log(add(5, 3));  
const add = function (a, b) 
{
    return a + b;
};
console.log(add(5, 3)); 



//2. Rewrite functions using ES6 arrow syntax:

const multiply = (a, b) => {
  return a * b;
};
console.log(multiply(4, 2)); 

const square = n => n * n;
console.log(square(5)); 