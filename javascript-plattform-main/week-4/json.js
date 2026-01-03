const originalObject = {
  name: "Alice",
  details: {
    age: 30,
    city: "Wonderland"
  },
  hobbies: ["reading", "gardening"]
};

console.log(originalObject.hobbies);
const jsonString = JSON.stringify(originalObject);
console.log(jsonString.hobbies);
const parString = JSON.parse(jsonString);
console.log(parString.hobbies);