/**
 * 1. Variables: var, let, const
 * 2. Data types: string, number, boolean, array, object
 * 3. If-else statement, switch, if-else ladder
 * 4. Loop: For, while
 * 5. EcmaScript
 * 6. Object and array destructuring
 * 7. Spread operator
 * 8. Template literals
 * 9. Higher order array methods: map, filter, sort, find
 * 10. Async programming: callback, promises, async await
 */

const title = document.getElementById("title");

title.innerText = "Hello sita";
title.style.color = "red";
title.style.backgroundColor = "#dddddd";
title.style.border = "1px solid black";

const paragraph = document.querySelector("p");

paragraph.innerText = "This is a paragraph";

// Event listener
const button = document.querySelector(".btn");

button.addEventListener("click", () => {
  button.innerText = "clicked";
  console.log("button is clicked");
});

button.addEventListener("dblclick", () => {
  console.log("button is double clicked");

  window.alert("This is alert");
});

button.addEventListener("mouseover", () => {
  button.style.color = "red";
});

button.addEventListener("mouseleave", () => {
  button.style.color = "green";
});

const listItems = ["Ram", "Sam", "Hari", "Sita", "Mohan"];

const listElement = document.getElementById("list");

for (let i = 0; i < listItems.length; i++) {
  const listItem = document.createElement("li");

  listItem.textContent = listItems[i];

  listElement.appendChild(listItem);
}
