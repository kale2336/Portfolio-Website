// Optional JavaScript: Show alert on form submission
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent actual form submission

    alert("Thank you! Your message has been sent.");
    form.reset(); // Clear form fields
  });
});
