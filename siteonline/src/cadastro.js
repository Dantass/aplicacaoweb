document.addEventListener("DOMContentLoaded", () => {
    const formCadastro = document.getElementById("form-cadastro");

    formCadastro.addEventListener("submit", (event) => {
        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const descricao = document.getElementById("descricao").value.trim();

        if (nome === "" || descricao === "") {
            alert("Todos os campos devem ser preenchidos.");
            return;
        }

        let itens = JSON.parse(localStorage.getItem("itens")) || [];
        itens.push({ nome, descricao });
        localStorage.setItem("itens", JSON.stringify(itens));

        formCadastro.reset();
    });
});
