
//1. Use break to exit the loop on a condition

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

for (let i = 2; i <= 20; i++) {
  if (isPrime(i)) {
    console.log("First prime number found:", i);
    break; 
  }
}



//2. Use continue to skip iterations
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    continue; 
  }
  console.log(i);
}
