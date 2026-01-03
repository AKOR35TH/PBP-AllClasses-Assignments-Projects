// Create a new copy of part of the array's contents, without modifying the original array.

let fruits = ["apple", "mango", "banana", "orange", "strawberry"];

let cut = fruits.slice(0, 2);
console.log(cut);
console.log(fruits);