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

// Desabilita datas futuras no calendario 
function dataMax() {
  const dataAtual = new Date();
  const ano = dataAtual.getFullYear();
  const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
  const dia = String(dataAtual.getDate()).padStart(2, '0');

  const data = `${ano}-${mes}-${dia}`;
  console.log(data)
  document.getElementById('data-nascimento').max = data;
}

// Cadastro
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