const mySet = new Set();
const myArray = [];
for (let i = 0; i < 1000000; i++) {
  mySet.add("value_" + i);
  myArray.push("value_" + i);
}
console.time("Set");
mySet.has("value_500000");
console.timeEnd("Set");

// Track the start time for Array
console.time("Array");
myArray.includes("value_500000");
console.timeEnd("Array");