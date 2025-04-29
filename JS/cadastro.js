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

// Data atual
const today = new Date();
const day = String(today.getDate()).padStart(2, '0');
const month = String(today.getMonth() + 1).padStart(2, '0');
const year = today.getFullYear();

const currentDate = `${year}-${month}-${day}`;
console.log(currentDate);

// Máscara CPF
let input = document.querySelector('#cpf')

input.addEventListener('keydown', () => {
    let inputLength = input.value.length

    if (inputLength == 3 || inputLength == 7) {
        input.value += '.'
    }
    else if (inputLength == 11) {
        input.value += '-'
    }
})

function cadastrar() {
    const nome = document.getElementById("nome").value
    const dataNascimento = document.getElementById("data-nascimento").value
    const cpf = document.getElementById("cpf").value
    const email = document.getElementById("email").value
    const senha = document.getElementById("password").value

    if (!nome || !dataNascimento || !cpf || !email || !senha) {
        alert('Por favor, preencha todos os campos.')
    }
}