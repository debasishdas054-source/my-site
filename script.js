document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const feedback = document.getElementById("formFeedback");

  if (name) {
    feedback.textContent = `Thank you, ${name}! Your message has been sent.`;
    this.reset();
  }
});
