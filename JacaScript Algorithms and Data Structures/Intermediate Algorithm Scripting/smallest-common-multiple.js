function smallestCommons(arr) {
  
  let min = Math.min(arr[0], arr[1]);
  let max = Math.max(arr[0], arr[1]);
  let newArr =[];
  let common = 0;
  let loop = 1;
  let n;
  
  for(let i = max; i >= min; i--){
    newArr.push(i)
    }

  do {
  common = newArr[0] * loop * newArr[1];
    for (n = 2; n < newArr.length; n++) {
      if (common % newArr[n] !== 0) {
        break;
      }
    }
  loop++;
  } while(n !== newArr.length);

  return common;
}


console.log(smallestCommons([23, 18]));
