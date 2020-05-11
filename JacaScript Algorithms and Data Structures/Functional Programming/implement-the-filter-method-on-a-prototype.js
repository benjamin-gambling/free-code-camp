// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  // Only change code below this line
  var newArray = [];
  this.forEach(function(i){ if (callback(i) == true){newArray.push(i)}});
    return newArray
};

  // Only change code above this line


var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});
console.log(new_s)