document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      showToast("❌ Please fill in all fields.", "error");
      return;
    }

    showToast("✅ Message sent successfully!", "success");
    form.reset();
  });

  function showToast(msg, type) {
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.textContent = msg;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.classList.add("fade-out");
    }, 2000);

    setTimeout(() => {
      toast.remove();
    }, 3000);
  }
});
