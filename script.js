// Scroll suave
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Botón CTA
document.getElementById("ctaBtn").addEventListener("click", () => {
  document.getElementById("servicios")
    .scrollIntoView({ behavior: "smooth" });
});

// Formulario
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("mensajeEnviado").textContent =
    "Mensaje enviado correctamente ✔";
  this.reset();
});
