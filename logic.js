let myLibrary = [];
let bookNew = document.getElementById("newBook");

function books(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

books.prototype.info = function() {
    if (this.read === true) {
        console.log("You have read " + this.title + " by " + this.author + " that had " + this.pages + " pages.");
    } else {
        console.log("You have not read " + this.title + " by " + this.author + " that had " + this.pages + " pages.");
    }
}

const book1 = new books("The Hobbit", "J.R.R. Tolkien", 295, true);
const book2 = new books("The Lord of the Rings", "J.R.R. Tolkien", 463, true);
const book3 = new books("The Catcher in the Rye", "J.D. Salinger", 234, false);
myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);

// function addBookToLibrary() {
//     let title = document.getElementById("title").value;
//     let author = document.getElementById("author").value;
//     let pages = document.getElementById("pages").value;
//     let read = document.getElementById("read").value;
//     let book = new books(title, author, pages, read);
//     myLibrary.push(book);
//     displayBooks();
// }

// function displayBooks() {
//     let table = document.getElementById("bookTable");
//     for (let i = 0; i < myLibrary.length; i++) {
//         let cell1 = table.insertRow(i + 1);
//         let cell2 = table.insertCell(-1);
//         let cell3 = table.insertCell(-1);
//         let cell4 = table.insertCell(-1);
//         let cell5 = table.insertCell(-1);
//         cell1.innerHTML = myLibrary[i].title;
//         cell2.innerHTML = myLibrary[i].author;
//         cell3.innerHTML = myLibrary[i].pages;
//         cell4.innerHTML = myLibrary[i].read;
//         cell5.innerHTML = '<button id="delete" onclick="deleteRow(this)">Delete</button>';
//     }
// }

// bookNew.addEventListener("click", addBookToLibrary()); {
    
// };