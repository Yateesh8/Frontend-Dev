// Q3 Multi-Step Form
// Expected HTML: .step, #nextBtn, #backBtn, #summary

let stepIndex = 0;
const steps = document.querySelectorAll(".step");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");
const summary = document.getElementById("summary");

function showStep(i) {
  steps.forEach(s => s.style.display = "none");
  steps[i].style.display = "block";
  backBtn.style.display = i === 0 ? "none" : "inline-block";
  nextBtn.textContent = i === steps.length - 1 ? "Finish" : "Next";
}
showStep(stepIndex);

nextBtn.addEventListener("click", () => {
  const input = steps[stepIndex].querySelector("input");
  if (!input.value.trim()) {
    alert("Fill required field");
    return;
  }

  if (stepIndex < steps.length - 1) {
    stepIndex++;
    showStep(stepIndex);
  } else {
    summary.textContent = `Name: ${steps[0].querySelector("input").value},
Email: ${steps[1].querySelector("input").value},
Password: ${steps[2].querySelector("input").value}`;
  }
});

backBtn.addEventListener("click", () => {
  if (stepIndex > 0) stepIndex--;
  showStep(stepIndex);
});
