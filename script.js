const botao = document.getElementById("btn-modo");

botao.addEventListener("click", function () {
  document.body.classList.toggle("modo-escuro");

  if (document.body.classList.contains("modo-escuro")) {
    botao.textContent = "Modo claro";
  } else {
    botao.textContent = "Modo escuro";
  }
});
const habilidades = [
  "Fotogrametria",
  "GIS",
  "Automação Industrial",
  "Drones",
  "Python",
];

const lista = document.getElementById("lista-habilidades");

habilidades.forEach(function (habilidade) {
  const item = document.createElement("li");
  item.textContent = habilidade;
  lista.appendChild(item);
});
