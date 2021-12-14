let myLibrary = [];
const getRow = document.getElementById("row");
let bookNew = document.getElementById("newBook");
let displayUpdate = document.getElementById("refresh");
let saveButton = document.getElementById("btn-save");
class books {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    info() {
        if (this.read === true)
        return this.title + " by " + this.author + " - " + this.pages + " pages - Read";
    else
        return this.title + " by " + this.author + " - " + this.pages + " pages - Not Read";
    }

}

const book1 = new books("The Hobbit", "J.R.R. Tolkien", 295, true);
const book2 = new books("The Lord of the Rings", "J.R.R. Tolkien", 463, true);
const book3 = new books("The Catcher in the Rye", "J.D. Salinger", 234, false);
myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);

function addBookToLibrary() {
    try {
        let title = document.getElementById("title").value;
        let author = document.getElementById("author").value;
        let pages = document.getElementById("pages").value;
        let read = document.getElementById("read").checked;
        if (title === "" || author === "" || pages === "") {
            throw "Please fill in all the fields";
        }
        else {
            myLibrary.push(new books(title, author, pages, read));
            displayBooks();
            clearFields();
            closeForm();
        } 
    } catch (error) {
        alert("Please fill in all the fields");
    }
}

function clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("read").checked = false;
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

function toggleRead(index) {
    myLibrary[index].read = !myLibrary[index].read;
    displayBooks();
}

//This function is used to display the books that we hace in the library
function displayBooks() {
    getRow.innerHTML = "";
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
        let newRemove = document.createElement("button");
        newRemove.className = "btn-cancel2";
        newRemove.innerHTML = "Remove";
        newCard.appendChild(newRemove);
        //Set a data attribute to the Card
        newCard.setAttribute("data-index", i);
        //get a data attribute to the Card
        let index = newCard.getAttribute("data-index");
        //Remove the book from the library
        newRemove.addEventListener("click", function() {
            removeBook(index);
        });
        let newRead = document.createElement("button");
        newRead.className = "btn-read";
        newRead.innerHTML = "Toggle Read";
        newCard.appendChild(newRead);
        //Toggle the read status of the book
        newRead.addEventListener("click", function() {
            toggleRead(index);
        });
        bookDiv2[i].appendChild(newCard);
    }
}

//This function is used to close the form
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//This funciton is used to open the form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

displayUpdate.addEventListener("click", function(e){
    displayBooks();
});

bookNew.addEventListener("click",function(e){
    openForm();
});

document.onload = displayBooks();