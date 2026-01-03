//stores a collection of multiple items under a single variable name,
//JavaScript arrays are zero-indexed
//array index
//array lenghth
//nested array
const arrayOfNumbers = [1, 2, 3, 4, 5, [40,20,60],['nyima'],{name:"nugraha"}];
arrayOfNumbers.push("banana", "apple", "peach");

console.log(arrayOfNumbers[3]);
console.log(arrayOfNumbers.length);
console.log(arrayOfNumbers.pop());
console.log(arrayOfNumbers);

// //array methods
// const items = [
//   { name: "apple", price: 100 },
//   { name: "banana", price: 10 },
//   { name: "grapes", price: 80 },
//   { name: "mango", price: 200 },
//   { name: "orange", price: 50 },
// ];

// // what filteration do is it filters the array based on the condition provided in the callback function
// const filteredArray = items.filter((item) => {
//   return item.price <= 100;
// });
// console.log(filteredArray);

// //Map takes one array and gives out another array
// const mapArray = items.map((item) => {
//   return item.name;
// });
// console.log(mapArray);

// //foreach
// items.filter((item) => {
//   console.log(item.price);
// });

// //Find a sigle object in an array whether true or false
// const findObject = items.find((item) => {
//   return item.name === "apple";
// });
// console.log(findObject);