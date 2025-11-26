// Q1 Dynamic Product List Manager
// Expected HTML elements: #productInput, #addBtn, #productList

const productInput = document.getElementById("productInput");
const addBtn = document.getElementById("addBtn");
const productList = document.getElementById("productList");

addBtn.addEventListener("click", () => {
  const name = productInput.value.trim();
  if (!name) return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span class="text">${name}</span>
    <button class="edit">Edit</button>
    <button class="delete">Delete</button>
  `;
  productList.appendChild(li);
  productInput.value = "";
});

// Event Delegation
let editing = null;

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }

  if (e.target.classList.contains("edit")) {
    const span = e.target.parentElement.querySelector(".text");
    editing = span;
    const input = document.createElement("input");
    input.value = span.textContent;
    span.replaceWith(input);
    input.focus();

    input.addEventListener("blur", () => {
      const newSpan = document.createElement("span");
      newSpan.className = "text";
      newSpan.textContent = input.value;
      input.replaceWith(newSpan);
      editing = null;
    });
  }
});
