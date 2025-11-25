document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("buyForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const format = document.getElementById("format").value;
    const qty = parseInt(document.getElementById("qty").value);

    const prices = {
      hard: 14.99,
      paper: 9.99,
      ebook: 7.99
    };

    const total = (prices[format] * qty).toFixed(2);

    alert(`Demo Checkout
Format: ${format}
Quantity: ${qty}
Total: $${total}

(Replace with real payment processing.)`);
  });
});
