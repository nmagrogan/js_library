function Library(){
  this.books = [];
}

Library.prototype.addBook = function(book){
  this.books.push(book);
}

Library.prototype.display = function(){
  for(let book of this.books){
    console.log(book);
  }
}

function Book(title, author, pages){
  this.title = title;
  this.author = author;
  this.pages = pages;
}

let myLib = new Library();

const book1 = new Book("me", "me", 10);
const book2 = new Book("you", "you", 55);

myLib.addBook(book1);
myLib.addBook(book2);


myLib.display();
