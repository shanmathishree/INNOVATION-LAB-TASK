const numArray = [1, 2, 3, 4, 5];

// 1. Use forEach() to iterate and print elements
console.log("Using forEach():");
numArray.forEach((element) => {
    console.log(element);
});

// 2. Use map() to transform array elements (e.g., square numbers)
const squaredArray = numArray.map((element) => element * element);
console.log("Using map() to square numbers:");
console.log(squaredArray);

// 3. for-in loop to loop over the indexes
console.log("Using for-in loop:");
for (let idx in numArray) {
    console.log(`Index: ${idx}, Value: ${numArray[idx]}`);
}

// 4. for-of loop to loop over values
console.log("Using for-of loop:");
for (let item of numArray) {
    console.log(item);
}

// 5. Compare outputs and behaviors
console.log("Original array:", numArray);
console.log("Squared array:", squaredArray);
