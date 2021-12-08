let myLibrary = [];
const getRow = document.getElementsByClassName("row");
let bookNew = document.getElementById("newBook");
let displayUpdate = document.getElementById("refresh");

function books(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

books.prototype.info = function() {
    if (this.read === true)
        return "Title: " + this.title + " By: " + this.author + " - " + this.pages + " pages  Read";
    else
        return this.title + " by " + this.author + " - " + this.pages + " pages - Not Read";
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
//     let read = document.getElementById("read").checked;
//     let newBook = new books(title, author, pages, read);
//     myLibrary.push(newBook);
//     render();
// }

function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookInfo = book.info();
    //     let newcolumn = document.createElement("column");
    //     newcolumn.className = "column";
    //     getRow.appendChild(newcolumn);
    //     let newDiv = document.createElement("card");
    //     newRow.className = "card";
    //     newRow.innerHTML = bookInfo;
    //     newcolumn.appendChild(newRow);
    // }
        // let newcolumn = document.createElement("div");
        // newcolumn.className = "column";
        // getRow.appendChild(newcolumn);
        let bookDiv = document.getElementsByClassName("card");
        // newcolumn.appendChild(bookDiv);
        let bookDivElement = document.createElement("card");
        bookDivElement.classList.add("book");
        bookDivElement.innerHTML = bookInfo;
        bookDiv[i].appendChild(bookDivElement);
    }
}

// bookNew.addEventListener("click", addBookToLibrary()); {

// };

displayUpdate.addEventListener("click", displayBooks());{

};