function truthCheck(collection, pre) {
  var truthy = false;
  for( var i in collection) {
    if(collection[i][pre]){
      truthy = true;
    } else {
      return false
    }
  }
  console.log(collection)
  return truthy;
}
console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));


-
-
-
-
-
-
-

Hint 1
Remember to iterate through the first argument to check each object.

Hint 2
Only if all of them are truthy will we return true, so make sure all of them check.

Hint 3
You could use loops or callback functions, there are multiple ways to solve this problem.

Solutions
Solution 1 (Click to Show/Hide)
Using for-in loop & hasOwnProperty

function truthCheck(collection, pre) {
  // Create a counter to check how many are true.
  var counter = 0;
  // Check for each object
  for (var c in collection) {
    // If it is has property and value is truthy
    if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
      counter++;
    }
  }
  // Outside the loop, check to see if we got true for all of them and return true or false
  return counter == collection.length;
}

// test here
truthCheck(
  [
    { user: "Tinky-Winky", sex: "male" },
    { user: "Dipsy", sex: "male" },
    { user: "Laa-Laa", sex: "female" },
    { user: "Po", sex: "female" }
  ],
  "sex"
);
Code Explanation
First I create a counter to check how many cases are actually true.
Then check for each object if the value is truthy
Outside the loop, I check to see if the counter variable has the same value as the length of collection, if true then return true, otherwise, return false
Relevant Links
JS Loops 16
Object.prototype.hasOwnProperty() 67
Solution 2 (Click to Show/Hide)
Using Array.every()

function truthCheck(collection, pre) {
  return collection.every(function(element) {
    return element.hasOwnProperty(pre) && Boolean(element[pre]);
  });
}

// test here
truthCheck(
  [
    { user: "Tinky-Winky", sex: "male" },
    { user: "Dipsy", sex: "male" },
    { user: "Laa-Laa", sex: "female" },
    { user: "Po", sex: "female" }
  ],
  "sex"
);
Code Explanation
Uses the native “every” method to test whether all elements in the array pass the test.
This link will help Array.prototype.every() 270