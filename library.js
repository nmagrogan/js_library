let myLibrary = [];

function Book(title, author, pages){
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(library, book){
  library.push(book)
}

const book1 = new Book("me", "me", 10)
const book2 = new Book("you", "you", 55)

addBookToLibrary(myLibrary, book1)
addBookToLibrary(myLibrary, book2)

console.log(myLibrary)
