//Math & String Built-in Functions

// Generate a random number between 0 and 100
let randomNum = Math.floor(Math.random() * 101);
console.log('Random Number:', randomNum);

// Round a number up and down
let number = 9.67;
let roundedUp = Math.ceil(number);
let roundedDown = Math.floor(number);
console.log('Rounded Up:', roundedUp);
console.log('Rounded Down:', roundedDown);

// Find the min and max in a list
let numbersList = [5, 8, 12, 3, 7];
let minNum = Math.min(...numbersList);
let maxNum = Math.max(...numbersList);

console.log('Min Number:', minNum);
console.log('Max Number:', maxNum);


//Manipulate Strings: Change case, extract substrings, check inclusion, replace text:

let str = "JavaScript is awesome!";

// Change case
let upperStr = str.toUpperCase();
let lowerStr = str.toLowerCase();
console.log('Uppercase:', upperStr);
console.log('Lowercase:', lowerStr);

// Extract a substring (start, length)
let substring = str.substring(0, 10);
console.log('Substring:', substring);

// Check if a substring exists in the string
let containsWord = str.includes("awesome");
console.log('Contains "awesome"?', containsWord);

// Replace a word in the string
let replacedStr = str.replace("awesome", "great");
console.log('Replaced String:', replacedStr);
