function binaryAgent(str) {
  var arr = str.split(" ");
  var newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push(String.fromCharCode(parseInt(arr[i], 2)));
  } 
  console.log(parseInt('01000001', 2)) /* example: first letter to ASCII code which in function is then converted to letter*/
return newArr.join("");
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));

/*
Code Explanation
- Separate the string into an array of strings separated by whitespace.
- Create some variables that you will use along the way - the names are self explanatory for the most part.
- Iterate through each binary string in the new array.
- Last we can use String.fromCharCode() to convert each ASCII number into the corresponding character.
- Convert to decimal by using parseInt(_binary_, 2). Use the second parameter to specify the base of the input numbers.
- At the end, return the converted message.
*/