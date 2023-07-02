
function countVowels(str) {
    str = str.toLowerCase();
    var count = 0;
    for (var i = 0; i < str.length; i++) {
      if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
        count++;
      }
    }
    alert("The number of vowels in the string is: " + count);
  }
  var inputString = prompt("Enter a string:");
  countVowels(inputString);
