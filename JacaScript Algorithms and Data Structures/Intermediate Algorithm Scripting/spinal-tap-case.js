function spinalCase(str) {
  return str
  .replace(/([a-z])([A-Z])/g, "$1 $2")
  .split(/[^A-Za-z0-9]/)
  .join("-")
  .toLowerCase()
  }

console.log(spinalCase("The_Andy_Griffith_Show"));
