// Check if the Geolocation API is supported by the browser
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  } 
  else {
    document.write("Geolocation is not supported by this browser.");
  }
  function successCallback(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    document.write("Latitude:", latitude);
    document.write("Longitude:", longitude);
  }

  function errorCallback(error) {
    document.write("Error getting location:", error.message);
  }