document.addEventListener("DOMContentLoaded", function () {
  const togglePassword = document.querySelector("#togglePassword");
  const password = document.querySelector("#password");

  togglePassword.addEventListener("click", function () {
    // Alterna o tipo do input entre password e text
    const type =
      password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    // Alterna o ícone entre olho aberto e fechado
    this.classList.toggle("fa-eye-slash");
    this.classList.toggle("fa-eye");
  });
});
