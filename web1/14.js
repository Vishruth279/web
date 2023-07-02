function tripToLocation(location) {
    return new Promise((resolve, reject) => {
      if (location === "Paris") {
        resolve("Let's take a trip to Paris");
      } else {
        reject("Invalid Location");
      }
    });
  }
  
  // Prompt the user for a location
  var userLocation = prompt("Enter a location:");
  
  // Call the function and handle the promise
  tripToLocation(userLocation)
    .then((message) => {
      document.write(message);
    })
    .catch((error) => {
      document.write(error);
    });
  
