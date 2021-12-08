let myLibrary = [];
const getRow = document.getElementById("row");
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

function addBookToLibrary() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
    let newBook = new books(title, author, pages, read);
    myLibrary.push(newBook);
    render();
}


//This function is used to display the books that we hace in the library
function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookInfo = book.info();
        let newColumn = document.createElement("div");
        newColumn.className = "column";
        let newCard = document.createElement("div");
        newCard.className = "card";
        newColumn.appendChild(newCard);
        getRow.appendChild(newColumn);
        let bookDiv2 = document.getElementsByClassName("column");       
        newCard.classList.add("book");
        newCard.innerHTML = bookInfo;
        bookDiv2[i].appendChild(newCard);
    }
}

displayUpdate.addEventListener("click", displayBooks());{

};

bookNew.addEventListener("click", addBookToLibrary()); {

};