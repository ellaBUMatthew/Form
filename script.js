document.addEventListener("DOMContentLoaded", function() {

  const questions = document.querySelectorAll(".form-container.question");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  }, { threshold: 0.3 });

  questions.forEach(section => observer.observe(section));

  const form = document.getElementById("survey-form");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const sources = Array.from(document.querySelectorAll('input[name="source"]:checked'))
      .map(el => el.value)
      .join(", ");

    const data = {
      source: sources,
      joining: document.getElementById("joining").value.trim(),
      expectations: document.getElementById("expectations").value.trim(),
      learn: document.getElementById("learn").value.trim(),
      familiarity: document.querySelector('input[name="familiarity"]:checked')?.value || ""
    };

    fetch("https://script.google.com/macros/s/AKfycbxFP2QbYgZO7UOMEDxZc-2n436g5KFccs-BxAX3tcmFeHzxO4arb0Jxs6BTtvoLovs/exec", {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    alert("✅ Thank you for submitting your response!");
    form.reset();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
