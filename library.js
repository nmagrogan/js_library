const container = document.querySelector(".container");



function Library(){
  this.books = [];
}

Library.prototype.addBook = function(book){
  this.books.push(book);
  this.updateDisplay(book);
}

Library.prototype.updateDisplay = function(book){

  let box = document.createElement("div");
  box.textContent = "Title: "+ book.title + " Author: " + book.author + " Pages:" + book.pages.toString();

  var button = document.createElement("button");
  button.innerHTML = "Delete";

  box.appendChild(button);
  container.appendChild(box);


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


function submit(event) {

  let title = document.getElementById('title');
  let author = document.getElementById('author');
  let pages = document.getElementById('pages');

  const newBook = new Book(title.value, author.value, pages.value);

  myLib.addBook(newBook);

  title.value = "";
  author.value = "";
  pages.value = "";

  event.preventDefault();
}

const form = document.getElementById('form');

form.addEventListener('submit', submit);
