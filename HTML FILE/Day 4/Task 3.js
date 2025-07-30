// Step 1: Create arrays of numbers and strings

let numbers = [10, 20, 30, 40, 50];
console.log('Initial Numbers Array:', numbers);

// Array of strings
let fruits = ["apple", "banana", "cherry"];
console.log('Initial Fruits Array:', fruits);

// Step 2: Access and modify elements

// Accessing elements (indexing starts from 0)
console.log('First number:', numbers[0]);
console.log('Second fruit:', fruits[1]);
// Modifying elements
numbers[2] = 100;
fruits[1] = "orange";
console.log('Modified Numbers Array:', numbers);
console.log('Modified Fruits Array:', fruits);

// Step 3: Use `.length` to get the array size

console.log('Length of Numbers Array:', numbers.length);
console.log('Length of Fruits Array:', fruits.length);
// Step 4: Adding elements using `.push()` and `.unshift()`

numbers.push(60);
fruits.unshift("mango");
console.log('After Adding Elements:');
console.log('Numbers Array (After push):', numbers);
console.log('Fruits Array (After unshift):', fruits);

// Step 5: Removing elements using `.pop()` and `.shift()`

let removedNumber = numbers.pop();
let removedFruit = fruits.shift();
console.log('After Removing Elements:');
console.log('Numbers Array (After pop):', numbers);
console.log('Fruits Array (After shift):', fruits);
console.log('Removed Number:', removedNumber);
console.log('Removed Fruit:', removedFruit);
