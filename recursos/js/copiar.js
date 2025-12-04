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






document.querySelectorAll(".btn-copiar").forEach(btn => {
    btn.addEventListener("click", () => {

        const container = btn.closest(".code-container");
        const codigo = container.querySelector("code").innerText.trim();

        navigator.clipboard.writeText(codigo);
        mostrarToast(); // aparece a mensagem "copiado"
    });
});
function mostrarToast() {
    const toast = document.getElementById("toast");
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);
}

document.addEventListener("DOMContentLoaded", () => {
  const botoes = document.querySelectorAll(".btn-copiar");

  botoes.forEach(botao => {
    botao.addEventListener("click", () => {
      const caixa = botao.closest(".code-container");
      const codigo = caixa.querySelector("code").innerText;

      navigator.clipboard.writeText(codigo);

      // ALERTA SIMPLES
      alert("Código copiado!");
    });
  });

});
