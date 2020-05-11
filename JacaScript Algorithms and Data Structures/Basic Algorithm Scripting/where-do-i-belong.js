function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a-b;
  });
  console.log(arr)
  for(let i = 0; i < arr.length; i++){
    if(arr[i] >= num){
      return i;
    }
  }
  return arr.length;
}

getIndexToIns([2, 5, 41], 15);