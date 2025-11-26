// Q5 Image Gallery Modal
// Expected HTML: .imgItem, #modal, #modalImg

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");

document.querySelectorAll(".imgItem").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

modal.addEventListener("click", () => modal.style.display = "none");

modalImg.addEventListener("click", (e) => e.stopPropagation());
