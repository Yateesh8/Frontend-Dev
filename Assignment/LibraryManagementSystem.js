// Q3 Library System
class Book {
  constructor(title, author, ISBN, isIssued=false) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.isIssued = isIssued;
  }
  issueBook() { this.isIssued = true; }
  returnBook() { this.isIssued = false; }
}
const books = [
  new Book("Book A","Author 1","111"),
  new Book("Book B","Author 2","222",true),
  new Book("Book C","Author 3","333")
];
console.log("Available:", books.filter(b=>!b.isIssued));
