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

function acessar() {
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const mensagemErro = document.getElementById("mensagemErro");

  // Resetar estilos anteriores
  email.classList.remove("input-error");
  password.classList.remove("input-error");
  mensagemErro.style.display = "none";

  if (email.value === "user@user.com" && password.value === "123456") {
    window.location.href = "./chat.html";
  } else {
    // Aplicar estilos de erro
    email.classList.add("input-error");
    password.classList.add("input-error");
    email.style.color = "red";
    password.style.color = "red";

    // Mostrar mensagem
    mensagemErro.textContent = "ACESSO NEGADO: Credenciais inválidas";
    mensagemErro.style.display = "block";
    mensagemErro.style.color = "#BF0067";
    mensagemErro.style.fontWeight = "800";

    // Focar no campo de email
    email.focus();
  }
}
