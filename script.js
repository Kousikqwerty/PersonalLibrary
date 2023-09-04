const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const addBtn = document.getElementById("addBtn");
const bookList = document.getElementById("bookList");
const removeFirstBtn = document.getElementById("removeFirstBtn");
const removeLastBtn = document.getElementById("removeLastBtn");

const library = [];

function addBook(title, author) {
  library.push({ title, author });
  displayLibrary();
}

function removeFirstBook() {
  if (library.length > 0) {
    library.shift();
    displayLibrary();
  }
}

function removeLastBook() {
  if (library.length > 0) {
    library.pop();
    displayLibrary();
  }
}

function displayLibrary() {
  bookList.innerHTML = "";
  library.forEach((book, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${book.title} by ${book.author}`;
    bookList.appendChild(li);
  });
}

addBtn.addEventListener("click", () => {
  const title = titleInput.value;
  const author = authorInput.value;
  if (title && author) {
    addBook(title, author);
    titleInput.value = "";
    authorInput.value = "";
  }
});

removeFirstBtn.addEventListener("click", removeFirstBook);
removeLastBtn.addEventListener("click", removeLastBook);