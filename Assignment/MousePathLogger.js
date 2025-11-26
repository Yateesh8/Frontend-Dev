// Q7 Mouse Path Logger
// Expected HTML: #box, #coords

const box = document.getElementById("box");
const coords = document.getElementById("coords");

box.addEventListener("mousemove", (e) => {
  coords.textContent = `X: ${e.clientX}, Y: ${e.clientY}`;
});

box.addEventListener("dblclick", (e) => {
  const dot = document.createElement("div");
  dot.style.width = "8px";
  dot.style.height = "8px";
  dot.style.background = "red";
  dot.style.borderRadius = "50%";
  dot.style.position = "absolute";
  dot.style.left = e.offsetX + "px";
  dot.style.top = e.offsetY + "px";
  box.appendChild(dot);
});
