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

  const submitButton = document.querySelector(".submit-btn");
  if(submitButton){
    submitButton.addEventListener("click", function(e){
      e.preventDefault();
      alert("Thank you for submitting your response!");

    });
  }

});
