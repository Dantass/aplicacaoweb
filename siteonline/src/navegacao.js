document.addEventListener("DOMContentLoaded", function () {
    function configurarNavegacao() {
        const btnCadastro = document.getElementById("btnCadastro");
        const btnListagem = document.getElementById("btnListagem");
        const telaCadastro = document.getElementById("telaCadastro");
        const telaListagem = document.getElementById("telaListagem");

        if (!btnCadastro || !btnListagem || !telaCadastro || !telaListagem) return;

        btnCadastro.addEventListener("click", function () {
            telaCadastro.style.display = "block";
            telaListagem.style.display = "none";
        });

        btnListagem.addEventListener("click", function () {
            telaCadastro.style.display = "none";
            telaListagem.style.display = "block";
            carregarItens(); // Certifica que a listagem é atualizada ao abrir
        });
    }

    configurarNavegacao(); // Configura a navegação quando a página carregar
});
