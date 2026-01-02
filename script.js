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

  const otherCheckbox = document.getElementById("otherOption");
  const otherTextarea = document.getElementById("otherText");

  otherCheckbox.addEventListener("change", function() {
    if (this.checked) {
      otherTextarea.style.display = "block";
      otherTextarea.required = true;
    } else {
      otherTextarea.style.display = "none";
      otherTextarea.required = false;
      otherTextarea.value = "";
    }
  });

  const form = document.getElementById("survey-form");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const sources = Array.from(document.querySelectorAll('input[name="source"]:checked'))
      .map(el => el.value)
      .join(", ");

    const data = {
      fullname: document.getElementById("fullname").value.trim(),
      course: document.getElementById("course").value.trim(),
      yearlevel: document.getElementById("yearlevel").value.trim(),
      email: document.getElementById("email").value.trim(),
      facebook: document.getElementById("facebook").value.trim(),
      source: sources,
      otherSource: otherTextarea.value.trim(),
      joining: document.getElementById("joining").value.trim(),
      expectations: document.getElementById("expectations").value.trim(),
      learn: document.getElementById("learn").value.trim(),
      familiarity: document.querySelector('input[name="familiarity"]:checked')?.value || ""
    };

    fetch("https://script.google.com/macros/s/AKfycbxFP2QbYgZO7UOMEDxZc-2n436g5KFccs-BxAX3tcmFeHzxO4arb0Jxs6BTtvoLovs/exec", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data)
})
.then(response => response.json())
.then(result => {
  if (result.result === "success") {
    alert("✅ Thank you for submitting your response!");
    form.reset();
    otherTextarea.style.display = "none";
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    alert("⚠️ " + result.message);
  }
})
.catch(error => {
  console.error("Error submitting form:", error);
  alert("❌ There was a problem submitting your response. Please try again.");
});

