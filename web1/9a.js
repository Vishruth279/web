function findLeapYears(startYear, endYear) {
    var leapYears = [];
  
    for (var year = startYear; year <= endYear; year++) {
      if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        leapYears.push(year);
      }
    }
    return leapYears;
  }
  var startYear = parseInt(prompt("Enter the start year:"));
  var endYear = parseInt(prompt("Enter the end year:"));
  var result = findLeapYears(startYear, endYear);
  document.write("Leap years between " + startYear + " and " + endYear + ":");
  document.write(result);