function dropElements(arr, func) {
  let loops = arr.length;
  for(let i = 0; i < loops; i++){
    if(func(arr[0])){ 
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));


*** loops = arr.lentgh ****
**We had to do this because as we shift the array the length gets smaller so half way through the loop ends and has nod had chance to get to the end to test if the function is true.

  /* 
  var times = arr.length;
  for (var i = 0; i < times; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}
*/
