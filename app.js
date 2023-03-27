"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  const year = document.querySelector("#year");
  const button = document.querySelector(".btn");
  const bookList = document.querySelector("#book-list");

  button.addEventListener("click", (event) => {
    event.preventDefault();

    if (title.value == "" && author.value == "" && year.value == "") {
      alert("Please complete all inputs!");
    } else {
      const newRow = document.createElement("tr");

      const newTitle = document.createElement("td");
      newTitle.innerHTML == title.value;
      newRow.appendChild(newTitle);

      const newAuthor = document.createElement("td");
    }
  });
});
