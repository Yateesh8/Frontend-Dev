// Q9 Form Submit Blocker
// Expected HTML: #form, #name, #email, #password, #msg

const form = document.getElementById("form");
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const password = form.password.value.trim();

  let valid = true;

  if (!name) {
    form.name.style.border = "2px solid red";
    valid = false;
  } else form.name.style.border = "";

  if (!email.includes("@")) {
    form.email.style.border = "2px solid red";
    valid = false;
  } else form.email.style.border = "";

  if (password.length < 6) {
    form.password.style.border = "2px solid red";
    valid = false;
  } else form.password.style.border = "";

  if (valid) msg.textContent = "Form Submitted Successfully!";
});
