const container = document.querySelector(".container");

function Library(){
  this.books = [];
}

Library.prototype.addBook = function(book){
  this.books.push(book);
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


function displayLibrary(lib){
  for(let book of lib.books){
    let box = document.createElement("div");
    box.textContent = "Title: "+ book.title + " Author: " + book.author + " Pages:" + book.pages.toString();
    container.appendChild(box);
  }
}


displayLibrary(myLib);
