function titleCase(str) {
  let arr = str.toLowerCase().split(" ");
  let result = arr.map(function(i) {
    return i.replace(i.charAt(0), i.charAt(0).toUpperCase());
  })
  return result.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
