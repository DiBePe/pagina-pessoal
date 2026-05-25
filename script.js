const botao = document.getElementById("btn-modo");

botao.addEventListener("click", function () {
  document.body.classList.toggle("modo-escuro");

  if (document.body.classList.contains("modo-escuro")) {
    botao.textContent = "Modo claro";
  } else {
    botao.textContent = "Modo escuro";
  }
});
