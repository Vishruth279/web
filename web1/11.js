/*let obj = {}, map = new Map();
let users = ["John", "mohan", "kumar", "tg", "Ram", "laksh"];

for (let i = 0; i < users.length; i++) {
  obj[i]=users[i];
  map.set(i, users[i]);
}
let result;
console.log(obj);
console.log(map);
console.time('Object'); 
result = obj.hasOwnProperty("moh"); 
console.timeEnd('Object');
console.time('Map'); 
result = map.has("moh"); 
console.timeEnd('Map');

*/

// Using a Map
const myMap = new Map();
const myObject = {};
console.time("Map");
for (let i = 0; i < 100000; i++) {
  myMap.set("key_" + i, "value_" + i);
  myMap.delete("key_" + i);

}
console.timeEnd("Map");
//using object
console.time("Object");
for (let i = 0; i < 100000; i++) {
  myObject["key_" + i] = "value_" + i;
  delete myObject["key_" + i];
}
console.timeEnd("Object");

/*
console.log("Using for...in loop:");
for (const key in myObject) {
  console.log(key + ": " + myObject[key]);
}
// Using Object.entries() to print items
console.log("Using Object.entries():");
const entries = Object.entries(myObject);
for (const [key, value] of entries) {
  console.log(key + ": " + value);
}





console.log("Using forEach():");
myMap.forEach((value, key) => {
  console.log(key + ": " + value);
});

// Using for...of loop to print items
console.log("Using for...of loop:");
for (const [key, value] of myMap) {
  console.log(key + ": " + value);
}*/
