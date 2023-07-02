// Check if the visitor count is stored in localStorage
if (localStorage.getItem("visitorCount")) {
  // If visitor count exists, increment it by 1
  localStorage.setItem("visitorCount", parseInt(localStorage.getItem("visitorCount")) + 1);
} 
else {
  // If visitor count doesn't exist, set it to 1
  localStorage.setItem("visitorCount", 1);
}
  
  // Display the visitor count on the homepage
  const visitorCount = localStorage.getItem("visitorCount");
  const countElement = document.createElement("p");
  countElement.textContent = "Number of Visitors: " + visitorCount;
  document.body.appendChild(countElement);

