import { iniciarSesion, sesionActiva } from "./common.js";

// Si ya hay sesión activa → mandar directo a productos
if (sesionActiva()) {
  location.href = "products.html"; // 👈 ojo con el nombre del archivo
}

addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const u = document.getElementById("txtUsuario").value.trim();
    const p = document.getElementById("pssContraseña").value.trim();

    if (!u || !p) {
      alert("Complete Usuario y Contraseña.");
      return;
    }

    iniciarSesion(u);
    location.href = "products.html"; // 👈 redirección final
  });
});
