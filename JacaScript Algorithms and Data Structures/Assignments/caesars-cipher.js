function rot13(str) {
  var arr = str.split("");
  var char = arr.map(i => i.charCodeAt())
  for(let i = 0; i < char.length; i++){
    if(char[i] >= 65 && char[i] <= 90){
      char[i] = char[i] + 13
      if(char[i] > 90){
        char[i] = (char[i] - 90) + 64;
      }
    }
  }
  return char = char
  .map(i => String.fromCharCode(i))
  .join('')
}

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
