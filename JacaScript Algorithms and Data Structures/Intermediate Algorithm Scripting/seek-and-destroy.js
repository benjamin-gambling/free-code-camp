function destroyer(arr, ...args) {
  for(let i = 0; i < arr.length; i++){
    if(args.includes(arr[i])){
    delete arr[i];
  }
  }
  return arr.filter(Boolean)
  
  
  
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
