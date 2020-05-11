function whatIsInAName(collection, source) {
  var arr = Object.keys(source);
  // Only change code below this line
  return collection.filter(function(obj){
  for(let i = 0; i < arr.length; i++){
    if(!obj.hasOwnProperty(arr[i]) || obj[arr[i]] !== source[arr[i]]){
      return false
    }
  }
  return true
})


  // Only change code above this line
}


console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));


/*
var filteredList = watchList
.map(item => {return {title: item["Title"], rating:  item["imdbRating"]}})
.filter(item => {return parseInt(item.rating) >= 8.0});
*/