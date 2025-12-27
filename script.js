document.getElementById("survey-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for submitting your response!");
  this.reset();
});

document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll(".form-container");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("active"); // trigger animation
      } else {
        entry.target.classList.remove("active"); // optional: for scroll up
      }
    });
  }, { threshold: 0.3 }); // trigger when 30% of section is visible

  sections.forEach(section => observer.observe(section));
});
