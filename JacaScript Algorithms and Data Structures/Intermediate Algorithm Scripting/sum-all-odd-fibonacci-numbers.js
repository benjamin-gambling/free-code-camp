function sumFibs(num) {
  var arr = [1, 1]
  var oddArr = [1, 1]
  const arrSum = arr => arr.reduce((a,b) => a + b, 0)
  for(let i = 1; i <= num-1; i++){
    let fib = arr[i] + arr[i-1];
      arr.push(fib)
        if (fib % 2 !== 0 && fib <= num){
          oddArr.push(fib)
      }
    }
  return arrSum(oddArr)
}

console.log(sumFibs(10));
