function convertHTML(str) {
  let newStr = str.split("")
  for(let i = 0; i < newStr.length; i++){
    switch (newStr[i]) {
     case "<":
        newStr[i] = "&lt;";
        break;
      case "&":
        newStr[i] = "&amp;";
        break;
      case ">":
        newStr[i] = "&gt;";
        break;
      case '"':
        newStr[i] = "&quot;";
        break;
      case "'":
        newStr[i] = "&apos;";
        break;
    }
  }; 
  newStr = newStr.join("") 
return newStr 
}

console.log(convertHTML("Dolce & Gabbana"));
