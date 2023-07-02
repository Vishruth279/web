function validateEmail(email) {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
  }
  
  const userInput = prompt("Enter an email address:");
  if (validateEmail(userInput)) {
    document.write("Email is valid.");
  } else {
    document.write("Email is invalid.");
  }



