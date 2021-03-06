function sumAll(arr) {
  let sum = 0;
  arr.sort(function(a, b) {return a-b})
  for(let i = arr[0]; i <= arr[1]; i++){
    sum = sum + i;
  }
  return sum;
}

sumAll([1, 4]);

-
-
-
-

Hints
Hint 1
Use Math.max() to find the maximum value of two numbers.

Hint 2
Use Math.min() to find the minimum value of two numbers.

Hint 3
Remember to that you must add all the numbers in between so this would require a way to get those numbers.

Solutions
Solution 1 (Click to Show/Hide)
function sumAll(arr) {
  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  var temp = 0;
  for (var i = min; i <= max; i++) {
    temp += i;
  }
  return temp;
}

sumAll([1, 4]);
Code Explanation
First create a variable to store the max number between two.
The same as before for the Smallest number.
We create a temporary variable to add the numbers.
Since the numbers might not be always in order, using max() and min() will help organize.

Relevant Links
Math.max() 182
Math.min() 34
For Loops 83
Solution 2 (Click to Show/Hide)
const sumAll = arr => {
  // Buckle up everything to one!
  const startNum = arr[0];
  const endNum = arr[1];

  // Get the count of numbers between the two numbers by subtracting them and add 1 to the absolute value.
  // ex. There are |1-4| + 1 = 4, (1, 2, 3, 4), 4 numbers between 1 and 4.
  const numCount = Math.abs(startNum - endNum) + 1;

  // Using Arithmetic Progression summing formula
  const sum = ((startNum + endNum) * numCount) / 2;
  return sum;
};
Code Explanation
The formula for calculating the sum of a continuous range is “(startNum + endNum) * numCount / 2”.
arr[0] and arr[1] can either be startNum or endNum, order doesn’t matter.
We can get the count of numbers in range by “Math.abs(arr[0] - arr[1]) + 1”.
Applying the formula by plugging in the numbers.
Relevant Links
Array.sort() 64
Arithmetic Progression summing formula 244
ES6 arrow function 122
Solution 3 (Click to Show/Hide)
function sumAll(arr) {
  var sum = 0;
  for (var i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i;
  }
  return sum;
}

sumAll([1, 4]);
Code Explanation
Creating a variable sum to store the sum of the elements.
Starting iteration of the loop from min element of given array and stopping when it reaches the max element.
Using a spread operator (…arr) allows passing the actual array to the function instead of one-by-one elements.
Relevant Links
Spread Operator 365
Using Spread Operator in Math.max() 167
Solution 4 (Click to Show/Hide)
Recursive Solution

function sumAll([ first, last ] ) {
 const step = first - last < 0 ? 1 : -1;
 return first !== last
   ? first + sumAll([ first + step, last ])
   : first;
}