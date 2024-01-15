function validaCampo() {
  const form = {
    email: document.getElementById("emailCad").value,
    senha: document.getElementById("senhaCad").value,
    confirmaSenha: document.getElementById("confirmaSenha").value,
  };

  const emailValido = isEmailValido(form.email);
  const confirmaSenhas = senhasBatem(form.senha, form.confirmaSenha);
  const senhaValida = isSenhaValida(form.senha);

  document.getElementById("cadastrar").disabled =
    !emailValido || !senhaValida || !confirmaSenhas;
}

function isEmailValido(email) {
  return /\S+@\S+\.\S+/.test(email);
}

function senhasBatem(senha, confirmaSenha) {
  return senha === confirmaSenha;
}

function isSenhaValida(senha) {
  return senha.length >= 7;
}

function cadastrarUsuario(email, senha) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, senha)
    .then((userCredential) => {
      swal("Cadastro realizado com Sucesso");
      const user = userCredential.user;
      console.log("Sucesso: ", user);

      console.log("Usuário cadastrado com sucesso:", user);
    })
    .catch((error) => {
      swal(
        "Erro ao cadastrar usuario",
        "Verifique os dados e tente novamente",
        "error"
      );
    });
}
function olhaSenha() {
  const formSenha = document.getElementById("senhaCad");

  const botao = document.getElementById("olhoAbertoSenha");
  if (formSenha.type === "password") {
    formSenha.type = "text";
    botao.className = "fa fa-eye-slash";
  } else {
    formSenha.type = "password";
    botao.className = "fa fa-eye";
  }
}
function olhaConfirmaSenha() {
  const formConfirmaSenha = document.getElementById("confirmaSenha");

  const botao = document.getElementById("olhoAbertoConfSenha");
  if (formConfirmaSenha.type === "password") {
    formConfirmaSenha.type = "text";
    botao.className = "fa fa-eye-slash";
  } else {
    formConfirmaSenha.type = "password";
    botao.className = "fa fa-eye";
  }
}
