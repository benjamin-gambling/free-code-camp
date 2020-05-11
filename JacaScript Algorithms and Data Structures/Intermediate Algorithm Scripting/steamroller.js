function steamrollArray(arr) {
  var flatArr = [];
  var flattern = function(item) {
  if(!Array.isArray(item)){
    flatArr.push(item)
  } else {
    for(var i in item){
      flattern(item[i]);
    }
  }
};
console.log([].concat(...arr))
arr.forEach(flattern)
return flatArr;
}
console.log(Array.isArray("hello"))
console.log(!Array.isArray([1, [2], [3, [[4]]]]))
console.log(Array.isArray([1, [2], [3, [[4]]]]))
console.log(steamrollArray([1, [2], [3, [[4]]]]));
