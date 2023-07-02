function bookFlight() {
    return new Promise((resolve, reject) => {
      // Simulate booking a flight
      setTimeout(() => {
        const success = true; // Set to false to simulate failure
        
        if (success) {
          resolve("Flight booked successfully");
        } else {
          reject("Flight booking failed");
        }
      }, 2000); // Delay for 2 seconds
    });
  }
  
  function bookHotel() {
    return new Promise((resolve, reject) => {
      // Simulate booking a hotel
      setTimeout(() => {
        const success = true; // Set to false to simulate failure
        
        if (success) {
          resolve("Hotel booked successfully");
        } else {
          reject("Hotel booking failed");
        }
      }, 2000); // Delay for 2 seconds
    });
  }
  
  // Book a flight and then book a hotel
  bookFlight()
    .then((flightMessage) => {
      document.write(flightMessage);
      return bookHotel(); // Return the promise from bookHotel function
    })
    .then((hotelMessage) => {
      document.write(hotelMessage);
    })
    .catch((error) => {
      document.write(error);
    });
  