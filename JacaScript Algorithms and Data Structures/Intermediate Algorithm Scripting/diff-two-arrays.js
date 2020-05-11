function diffArray(arr1, arr2) {
  var newArr = [];
  for(let i = 0; i < arr1.length; i++){
    if(arr2.indexOf(arr1[i]) === -1){
      newArr.push(arr1[i]);
      }
  }
  for(let j = 0; j < arr2.length; j++){
    if(arr1.indexOf(arr2[j]) === -1){
      newArr.push(arr2[j]);
      }
  }
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));



Hints
Hint 1
Merge the list to make it easy to compare functions.

Hint 2
Use filter to get the new array, you will need to create a callback function.

Hint 3
The best way to go about the callback function is to check if the number from the new merged array is not in both original arrays and return it.

Solutions
Solution 1 (Click to Show/Hide)
(Imperative Solution)

function diffArray(arr1, arr2) {
  var newArr = [];

  function onlyInFirst(first, second) {
    // Looping through an array to find elements that don't exist in another array
    for (var i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {
        // Pushing the elements unique to first to newArr
        newArr.push(first[i]);
      }
    }
  }

  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
Code Explanation
Read the comments in the code.

Relevant Links
for Loop (Devdocs) 571
Solution 2 (Click to Show/Hide)
(Declarative Solution):

function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
Code Explanation
Explain solution here and add any relevant links

Relevant Links
Array.prototype.concat (Devdocs) 576
Array.prototype.filter (Devdocs) 1.1k
Array.prototype.includes (Devdocs) 2.6k
Solution 3 (Click to Show/Hide)
(Declarative Solution)

function diffArray(arr1, arr2) {
  return [...diff(arr1, arr2), ...diff(arr2, arr1)];

  function diff(a, b) {
    return a.filter(item => b.indexOf(item) === -1);
  }
}