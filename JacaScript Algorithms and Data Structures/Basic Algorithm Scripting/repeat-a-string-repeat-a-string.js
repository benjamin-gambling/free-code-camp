function repeatStringNumTimes(str, num) {
  let arr = ""
  for (let i = 0; i < num; i++){
    if (num <= 0){
      return arr;
    } else {
      arr +=str
    }
  }
  return arr;
}

repeatStringNumTimes("abc", 3);
