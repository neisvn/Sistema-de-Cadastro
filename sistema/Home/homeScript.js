function atualizaHora() {
  const horaElement = document.getElementById("hora");
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const timeString = `${hours}:${minutes}:${seconds}`;
  horaElement.textContent = timeString;
}
function atualizaData() {
  const dataElement = document.getElementById("data");
  const data = new Date();
  const dia = String(data.getDate()).padStart(2, "0");
  const mes = String(data.getMonth() + 1).padStart(2, "0");
  const ano = String(data.getFullYear());
  const dataAtual = `${dia}/${mes}/${ano}`;
  dataElement.textContent = dataAtual;
}
setInterval(atualizaData, 1000);
setInterval(atualizaHora, 1000);
atualizaHora();
atualizaData();
