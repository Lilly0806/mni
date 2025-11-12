document.addEventListener("DOMContentLoaded", () => {
    // Encontra o caminho raiz do projeto (antes da pasta /src/)
    const root = window.location.pathname.split("src")[0];

    // Caminho correto do menu.html
    const menuFile = root + "src/html/menu.html";

    fetch(menuFile)
        .then(response => response.text())
        .then(html => {
            document.getElementById("menu-container").innerHTML = html;
        })
        .catch(error => console.error("Erro ao carregar menu:", error));
});

<script src="../js/menu.js"></script>