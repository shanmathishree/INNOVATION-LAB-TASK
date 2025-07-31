function performAction(callback) {
    console.log("Performing action...");
    callback(); 
}

function callbackFunction() {
    console.log("Callback function executed.");
}

performAction(callbackFunction);

function performTask(callback) {
    console.log("Task started...");
    setTimeout(() => {
        console.log("Task completed.");
        callback(); 
    }, 2000); 
}

function onTaskCompletion() {
    console.log("Task completion callback executed.");
}

performTask(onTaskCompletion);

// Global Scope
var globalVar = "global";

function exampleFunction() {
    // Local Scope
    var localVar = "local";
    if (true) {
        // Block Scope
        let blockLet = "block let";
        const blockConst = "block const";
        console.log(blockLet); 
        console.log(blockConst); 
    }
    console.log(localVar); // Accessible within the function
}
console.log(globalVar); 
exampleFunction();
