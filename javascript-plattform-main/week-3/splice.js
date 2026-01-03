let fruits = ["apple", "mango", "orange", "strawberry", "grape"];

// erase 2 numbers start form index 1
//let cut = fruits.splice(2, 1);
//console.log(cut); // [mango, orange]
//console.log(fruits); // [apple, strawberry, grape]


let replace = fruits.splice(0, 1, "Durian","Salak");
console.log(replace);
console.log(fruits);