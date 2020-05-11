const squareList = (arr) => {
  // Only change code below this line
var newArr = arr
.filter(item => Number.isInteger(item))
.filter(item => Math.sign(item) === 1)
.map(item => item*item)
console.log(arr);
return newArr
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
