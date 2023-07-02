const inputString = "Albert Einstein was born in Ulm, on 14/03/1879.";
const dateMatch = inputString.match(/\d{2}\/\d{2}\/\d{4}/);
alert(dateMatch ? "Date found: " + dateMatch[0] : "Date not found.");




