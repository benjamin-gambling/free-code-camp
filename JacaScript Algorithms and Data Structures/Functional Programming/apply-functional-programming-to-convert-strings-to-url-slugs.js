// The global variable
var globalTitle = "Winter Is Coming";

// Only change code below this line
function urlSlug(title) {
return title
.split(/\W/)
.filter(string => {return string !== ""})
.join("-")
.toLowerCase();
}
console.log(urlSlug(" Winter Is Coming"))
// Only change code above this line
