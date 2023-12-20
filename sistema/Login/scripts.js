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
  const senha = document.getElementById("senha").value;
  return senha.length >= 7;
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

function logar() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  firebase
    .auth()
    .signInWithEmailAndPassword(email, senha)
    .then((response) => {
      location.href = "../Home/Home.html";
    })
    .catch((error) => {
      console.log("erro: ", error);
      swal(
        "E-mail ou senha incorretos!",
        "Caso tenha esquecido a sua senha clique em Recuperar Senha",
        "error"
      );
    });
}
