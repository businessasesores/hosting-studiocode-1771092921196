// ======================================================
// 🔗 Scroll suave
// ======================================================

document.querySelectorAll("a[href^='#']").forEach(anchor => {

  anchor.addEventListener("click", function(e) {

    const target = document.querySelector(
      this.getAttribute("href")
    );

    if(!target) return;

    e.preventDefault();

    target.scrollIntoView({
      behavior: "smooth"
    });

  });

});

// ======================================================
// 🚀 Botón CTA
// ======================================================

const ctaBtn = document.getElementById("ctaBtn");

if(ctaBtn){

  ctaBtn.addEventListener("click", () => {

    const servicios =
      document.getElementById("servicios");

    if(servicios){

      servicios.scrollIntoView({
        behavior: "smooth"
      });

    }

  });

}

// ======================================================
// 📩 Formulario
// ======================================================

const contactForm =
  document.getElementById("contactForm");

if(contactForm){

  contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    const mensaje =
      document.getElementById("mensajeEnviado");

    if(mensaje){

      mensaje.textContent =
        "Mensaje enviado correctamente ✔";

    }

    this.reset();

  });

}