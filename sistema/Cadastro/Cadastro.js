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
