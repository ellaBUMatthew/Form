// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {

  // ---- REVEAL ANIMATION FOR QUESTIONS ----
  const questions = document.querySelectorAll(".form-container.question");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("active"); // trigger reveal animation
      } else {
        entry.target.classList.remove("active"); // optional: remove if scrolling up
      }
    });
  }, { threshold: 0.3 }); // trigger when 30% of section is visible

  questions.forEach(section => observer.observe(section));

  // ---- SUBMIT BUTTON HANDLER ----
  const submitButton = document.querySelector(".submit-btn");
  if(submitButton){
    submitButton.addEventListener("click", function(e){
      e.preventDefault();
      alert("Thank you for submitting your response!");
      // If using a form element, you could reset it here:
      // document.getElementById("survey-form").reset();
    });
  }

});
