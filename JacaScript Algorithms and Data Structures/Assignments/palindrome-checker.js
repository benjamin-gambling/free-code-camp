function palindrome(str) {
  var arr1 = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase()
  var arr2 = [];
  for(let i = arr1.length-1; i >= 0; i--){
    arr2.push(arr1[i]);
  };
  arr2 = arr2.join("")
  if(arr1 === arr2){
    console.log(arr1)
    console.log(arr2)
    return true
  };

  console.log(arr1)
  console.log(arr2)
return false;
}



console.log(palindrome(("0_0 (: /-\ :) 0-0")));


/*
1. remove special chars and spaces ignoring caps or changing to lowercase 
2. 
*/
