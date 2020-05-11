function pairElement(str) {
  var arr = []
  var search = function(letter){
    switch(letter){
      case "A":
        arr.push(["A","T"]);
        break;
      case "T":
        arr.push(["T","A"]);
        break;
      case "C":
        arr.push(["C","G"]);
        break;
      case "G":
        arr.push(["G","C"]);
        break;
    }
  };
  for(let i = 0; i < str.length; i++) {
    search(str[i])

  }
  
  return arr;
}

console.log(pairElement("GCG"));
