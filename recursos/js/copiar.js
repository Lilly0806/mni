document.addEventListener("DOMContentLoaded", () => {
  const botoes = document.querySelectorAll(".btn-copiar");

  botoes.forEach(botao => {
    botao.addEventListener("click", () => {
      const caixa = botao.closest(".code-box");
      const codigo = caixa.querySelector("code").innerText;

      navigator.clipboard.writeText(codigo);

      // ALERTA SIMPLES
      alert("Código copiado!");
    });
  });
});


function mostrarToast() {
  const toast = document.getElementById("toast-copy");
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 1500);
}


