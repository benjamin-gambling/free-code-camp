// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (arr, bookName) {
  let list = [...arr]
  list.push(bookName);
  return list;
  
  // Change code above this line
}

// Change code below this line
function remove (arr, bookName) {
  let list = [...arr]
  var book_index = list.indexOf(bookName);
  if (book_index >= 0) {

    list.splice(book_index, 1);
    return list;

    // Change code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
