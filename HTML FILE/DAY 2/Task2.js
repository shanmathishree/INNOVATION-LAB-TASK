//Print numbers from 1 to 10 using while loop

let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}



//2. do-while loop – Prompt user until correct input is given 
let input;

do {
  input = prompt("Enter 'yes' to continue:");
} while (input.toLowerCase() !== "yes");

console.log("Correct input received.");


//3. for loop – Sum of the first N natural numbers

let N = 10;  
let sum = 0;

for (let i = 1; i <= N; i++) {
  sum += i;
}

console.log("Sum of first", N, "natural numbers is", sum);


//3. for loop – Sum of the first N natural numbers
javascript
Copy
Edit

let N = 10;  
let sum = 0;

for (let i = 1; i <= N; i++) {
  sum += i;
}

console.log("Sum of first", N, "natural numbers is", sum);



//4. Nested for loop – Multiplication table (1 to 10)

for (let i = 1; i <= 10; i++) {
  let row = "";
  for (let j = 1; j <= 10; j++) {
    row += (i * j).toString().padStart(4, " ");
  }
  console.log(row);
}

