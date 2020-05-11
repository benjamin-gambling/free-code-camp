function sumPrimes(num) {
  var arr = [];
  var prime = [];
  var sum = 0;
function isPrime(number) {
  var start = 2;
  while (start <= Math.sqrt(number)) {
    if (number % start++ < 1) return false;
    }
    return number > 1;
}

  for(let i = 0; i <= num; i++){
    arr.push(i);
    if(isPrime(i) === true) {
      prime.push(i);
      sum = sum + i
    }
  }
return sum;
}


console.log(sumPrimes(10));
