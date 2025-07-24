// Arithmetic Operators
let a = 10, b = 3;
console.log("Addition:", a + b);      
console.log("Subtraction:", a - b);    
console.log("Multiplication:", a * b); 
console.log("Division:", a / b);       
console.log("Modulus:", a % b);       
// Assignment Operators
let x = 5;
x += 2;   
console.log("x after += 2:", x);      
x -= 1;
console.log("x after -= 1:", x);      

// Relational (Comparison) Operators
console.log("== :", 5 == "5");         
console.log("=== :", 5 === "5");      
console.log("!= :", 5 != "5");        
console.log("> :", a > b);             
console.log("< :", a < b);            
console.log(">= :", a >= b);      
console.log("<= :", a <= b);   
// Logical Operators
let p = true, q = false;
console.log("AND (&&):", p && q);  
console.log("OR (||):", p || q);    
console.log("NOT (!):", !p);    

// Conditional (Ternary) Operator
let age = 20;
let result = (age >= 18) ? "Adult" : "Minor";
console.log("Ternary Result:", result); 
// Bitwise Operators
let m = 5; 
let n = 3; 
console.log("Bitwise AND:", m & n);     
console.log("Bitwise OR:", m | n);      
console.log("Bitwise XOR:", m ^ n);     
console.log("Bitwise NOT:", ~m);        
console.log("Left Shift:", m << 1);     
console.log("Right Shift:", m >> 1);    

// Increment and Decrement Operators
let count = 10;
console.log("Pre-Increment:", ++count); 
console.log("Post-Increment:", count++);
console.log("Now count:", count);       
console.log("Pre-Decrement:", --count); 
console.log("Post-Decrement:", count--);
console.log("Final count:", count);