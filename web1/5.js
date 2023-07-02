function caesarCipherEncrypt(text, shift) {
    var encryptedText = "";
    for (var i = 0; i < text.length; i++) {
      var char = text[i];
      if (char >= 'A' && char <= 'Z') {
        encryptedText += String.fromCharCode((char.charCodeAt(0) - 65 + shift) % 26 + 65);
      }
      else if (char >= 'a' && char <= 'z') {
        encryptedText += String.fromCharCode((char.charCodeAt(0) - 97 + shift) % 26 + 97);
      }
      else {
        encryptedText += char;
      }
    }
    return encryptedText;
  }
  var text = prompt("Enter the text to encrypt:");
  var shift = parseInt(prompt("Enter the shift pattern (a positive integer):"));
  var encryptedText = caesarCipherEncrypt(text, shift);
  alert("Encrypted Text:\n" + encryptedText);