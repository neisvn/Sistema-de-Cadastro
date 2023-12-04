document.getElementById("formUsuario");
document.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(this);
  const novoUsuario = {
    nome: formData.get("nome"),
    email: formData.get("email"),
    dataNasc: formData.get("dataNasc"),
    senha: formData.get("senha"),
  };

  criarNovoUsuario(novoUsuario);
});

async function criarNovoUsuario(usuario) {
  try {
    const response = await fetch("http://localhost:3001/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });

    if (response.ok) {
      const novoUsuarioCriado = await response.json();
      alert("Novo usuário criado:", novoUsuarioCriado);
    } else {
      console.error("Erro ao criar usuário:", response.status);
    }
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
  }
}
