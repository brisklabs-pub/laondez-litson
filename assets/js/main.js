// assets/js/main.js
document.addEventListener("DOMContentLoaded", () => {
  // --- Dynamic Year ---
  const yearSpan = document.getElementById("currentYear");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
