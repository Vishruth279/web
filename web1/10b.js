const myMap = new Map([
    ["name", "John"],
    ["age", 25],
    ["city", "London"]
  ]);
  
  document.write("Name:", myMap.get("name"));
  document.write("Age:", myMap.get("age"));
  document.write("City:", myMap.get("city"));
  
  for (const [key, value] of myMap) {
    document.write(key, value);
  }