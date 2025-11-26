// Q4 Theme Switcher
// Expected HTML buttons: #lightBtn #darkBtn #blueBtn

const body = document.body;

document.getElementById("lightBtn").onclick = () => {
  body.setAttribute("class", "light");
  body.setAttribute("data-theme", "light");
};
document.getElementById("darkBtn").onclick = () => {
  body.setAttribute("class", "dark");
  body.setAttribute("data-theme", "dark");
};
document.getElementById("blueBtn").onclick = () => {
  body.setAttribute("class", "blue");
  body.setAttribute("data-theme", "blue");
};
