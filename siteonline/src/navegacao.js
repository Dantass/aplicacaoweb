document.addEventListener("DOMContentLoaded", () => {
    const cadastroSection = document.getElementById("cadastro");
    const listagemSection = document.getElementById("listagem");
    const linkCadastro = document.getElementById("link-cadastro");
    const linkListagem = document.getElementById("link-listagem");

    linkCadastro.addEventListener("click", () => {
        cadastroSection.style.display = "block";
        listagemSection.style.display = "none";
    });

    linkListagem.addEventListener("click", () => {
        cadastroSection.style.display = "none";
        listagemSection.style.display = "block";
        atualizarLista(); 
    });
});
