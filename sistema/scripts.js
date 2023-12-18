function logar() {
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;
  if (email == "nathansilvamachado@gmail.com" && senha == "1234") {
    location.href = "home.html";
  } else {
    swal(
      "E-mail ou senha incorretos!",
      "Caso tenha esquecido a sua senha clique em Recuperar Senha",
      "error"
    );
  }
}

function openCadastroModal() {
  const modal = document.querySelector("dialog");
  modal.showModal();
}
function fechaModal() {
  const modal = document.querySelector("dialog");
  modal.close();
}
const botaoCancelar = document.getElementById("cancelar");
const buttonCad = document.getElementById("buttonCad");
buttonCad.addEventListener("click", openCadastroModal);
botaoCancelar.addEventListener("click", fechaModal());

function validaCampo() {
  const emailValido = isEmailvalid();
  document.getElementById("recover-password-button").disabled = !emailValido;
  const senhaValida = isPasswordValid();
  document.getElementById("btn-logar").disabled = !emailValido || !senhaValida;
}
function isEmailvalid() {
  const email = document.getElementById("email").value;
  if (!email) {
    return false;
  }
  return validaEmail(email);
}
function isPasswordValid() {
  const password = document.getElementById("senha").value;
  if (!password) {
    return false;
  }
  return true;
}
function validaEmail(email) {
  return /\S+@\S+/.test(email);
}
function recuperarSenha() {
  const email = document.getElementById("email").value;
  swal({
    text: `Um e-mail será enviado para ${email} com o link de redefinir senha`,
  });
}

function checkEnter(event) {
  if (event.key === "Enter") {
    return logar();
  }
}
