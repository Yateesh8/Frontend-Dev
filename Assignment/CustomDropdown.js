// Q8 Custom Dropdown
// Expected HTML: #dropdownBtn, #dropdownMenu

const btn = document.getElementById("dropdownBtn");
const menu = document.getElementById("dropdownMenu");

btn.addEventListener("click", () => {
  menu.style.display = menu.style.display === "block" ? "none" : "block";
});

menu.querySelectorAll("li").forEach(opt => {
  opt.addEventListener("click", () => {
    btn.textContent = opt.textContent;
    menu.style.display = "none";
  });
});

document.addEventListener("click", (e) => {
  if (!btn.contains(e.target)) menu.style.display = "none";
}, true); // capturing phase
