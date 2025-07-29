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

    // You can also add more advanced email validation if needed
    showToast("✅ Your message has been sent!", "success");

    form.reset();
  });

  // Toast function
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
.toast {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #38bdf8;
  color: #fff;
  padding: 14px 24px;
  border-radius: 10px;
  font-weight: 600;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  z-index: 9999;
  transition: all 0.4s ease;
}

.toast.error {
  background-color: #ef4444;
}

.toast.fade-out {
  opacity: 0;
  transform: translateX(-50%) translateY(20px);
}
