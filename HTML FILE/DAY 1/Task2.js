// Exploring different data types
let num = 100;                    
let str = "Hello World";          
let bool = true;                  
let empty = null;                 
let notDefined;                   
let obj = { name: "Shanmathi" };  
let sym = Symbol("id");           

console.log("Number:", num);
console.log("String:", str);
console.log("Boolean:", bool);
console.log("Null:", empty);
console.log("Undefined:", notDefined);
console.log("Object:", obj);
console.log("Symbol:", sym);

// Type conversion examples

// 1. String conversion
let numberToString = String(num);
console.log("Number to String:", numberToString, typeof numberToString);

// 2. Number conversion
let stringToNumber = Number("123");
console.log("String to Number:", stringToNumber, typeof stringToNumber);

// 3. Implicit conversion
let result1 = "5" * 2; 
console.log("Implicit Conversion (\"5\" * 2):", result1, typeof result1);

let result2 = "10" + 5; 
console.log("Implicit Conversion (\"10\" + 5):", result2, typeof result2);

// 4. String to Number and vice versa
let s = "456";
let n = 789;

let toNumber = Number(s); 
let toString = String(n); 

console.log("Convert string to number:", toNumber, typeof toNumber);
console.log("Convert number to string:", toString, typeof toString);

