// Q2 Live Character Counter
// Expected HTML: #textarea, #counter, #resetBtn

const textarea = document.getElementById("textarea");
const counter = document.getElementById("counter");
const resetBtn = document.getElementById("resetBtn");

const MAX = 100;

textarea.addEventListener("input", (e) => {
  if (textarea.value.length > MAX) {
    e.preventDefault();
    textarea.value = textarea.value.slice(0, MAX);
  }
  const remaining = MAX - textarea.value.length;
  counter.textContent = remaining;

  counter.style.color = remaining === 0 ? "red" : remaining <= 20 ? "yellow" : "black";
});

resetBtn.addEventListener("click", () => {
  textarea.value = "";
  counter.textContent = MAX;
  counter.style.color = "black";
});
