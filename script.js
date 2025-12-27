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
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(section => observer.observe(section));
});
