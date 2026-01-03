// forEach-practice.js
console.log("=== JavaScript forEach Practice ===\n");

// Basic Array Iteration
console.log("1. BASIC ARRAY ITERATION:");
const fruits = ['apple', 'banana', 'orange', 'grape'];

console.log("Fruits array:");
fruits.forEach(function(fruit,index) {
    console.log(`I love ${fruit}s! (${index})`);
});
