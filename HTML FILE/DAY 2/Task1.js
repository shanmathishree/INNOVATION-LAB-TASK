//Simple if Statement

let age = 20;
if (age >= 18) {
    console.log("You are eligible to vote.");
}



//2. if-else Block

let num = 7;
if (num % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}





//3. Multiple Conditions with else if

let marks = 85;

if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 75) {
    console.log("Grade: B");
} else if (marks >= 60) {
    console.log("Grade: C");
} else if (marks >= 40) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}




//4. switch Statement for Menu Simulation
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number");
}



//5. Edge Case Test Example

let temp = 0;

if (temp === 0) {
    console.log("Freezing point");
} else if (temp < 0) {
    console.log("Below freezing");
} else {
    console.log("Above freezing");
}
