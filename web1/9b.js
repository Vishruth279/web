const mySet = new Set(["Apple", "Banana", "Orange"]);
document.write("Set Size:", mySet.size);
document.write(" Has Banana:", mySet.has("Banana"));
document.write(" Set Elements:");
for (const item of mySet) {
  document.write(item);
}
