function logar() {
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;
  if (email == "nathansilvamachado@gmail.com" && senha == "1234") {
    alert("logado");
    location.href = "home.html";
  } else {
    alert("login ou senha incorretos!");
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
