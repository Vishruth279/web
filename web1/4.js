function jumpSearch(key, list) {
  const blockSize = Math.floor(Math.sqrt(list.length));
  let blockStart = 0;
  let blockEnd = blockSize;
  while (blockEnd < list.length && list[blockEnd] <= key) {
    blockStart = blockEnd;
    blockEnd += blockSize;
    if (blockEnd > list.length - 1) {
      blockEnd = list.length;
    }
  }
  for (let i = blockStart; i < blockEnd; i++) {
    if (list[i] === key) {
      return true; // Key found
    }
  }
  return false;
}
const key = parseInt(prompt("Enter the key:"));
const numbers = prompt("Enter the list of numbers (comma-separated):").split(",").map(Number);
const found = jumpSearch(key, numbers);
if (found) {
  document.write("Key found in the list.");
} else {
  document.write("Key not found in the list.");
}



