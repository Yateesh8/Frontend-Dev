// Q6 Table Filter
// Expected HTML: #search, #studentTable, #noResults

const search = document.getElementById("search");
const rows = document.querySelectorAll("#studentTable tbody tr");
const noResults = document.getElementById("noResults");

search.addEventListener("input", () => {
  const text = search.value.toLowerCase();
  let found = false;

  rows.forEach(row => {
    const match = row.textContent.toLowerCase().includes(text);
    row.style.display = match ? "" : "none";
    if (match) found = true;
  });

  noResults.style.display = found ? "none" : "block";
});
