
const numbers = [];
let input;

while ((input = prompt("Enter an element (or click Cancel to finish):")) !== null) {
  numbers.push(Number(input));
}

const target = Number(prompt("Enter the element to search for:"));
const index = numbers.indexOf(target);
document.write(index !== -1 ? `Element found at index ${index}` : "Element not found");