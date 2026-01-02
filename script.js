const form = document.getElementById("survey-form");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const otherTextarea = document.getElementById("otherText");
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

  fetch("YOUR_WEB_APP_URL_HERE", {  
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
});
