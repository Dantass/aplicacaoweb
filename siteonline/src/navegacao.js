document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btnCadastro").addEventListener("click", function() {
        document.getElementById("telaCadastro").style.display = "block";
        document.getElementById("telaListagem").style.display = "none";
    });

    document.getElementById("btnListagem").addEventListener("click", function() {
        document.getElementById("telaCadastro").style.display = "none";
        document.getElementById("telaListagem").style.display = "block";
        carregarItens();
    });
});
