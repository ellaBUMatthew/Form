document.addEventListener("DOMContentLoaded", function() {
  const questions = document.querySelectorAll(".form-container.question");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  }, { threshold: 0.3 });

  questions.forEach(section => observer.observe(section));

  // Form submission
  const form = document.getElementById("survey-form");
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    // Collect data
    const data = {
      source: Array.from(document.querySelectorAll('input[name="source"]:checked')).map(el => el.value).join(", "),
      joining: document.getElementById("joining").value,
      expectations: document.getElementById("expectations").value,
      learn: document.getElementById("learn").value,
      familiarity: document.querySelector('input[name="familiarity"]:checked')?.value || ""
    };

    // Send to Google Sheets
    fetch("YOUR_WEB_APP_URL_HERE", {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    alert("Thank you for submitting your response!");
    form.reset();
  });
});
