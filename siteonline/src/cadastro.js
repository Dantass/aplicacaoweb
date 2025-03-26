document.addEventListener("DOMContentLoaded", function () {
    const formCadastro = document.getElementById("formCadastro");

    if (formCadastro) {
        formCadastro.addEventListener("submit", function (event) {
            event.preventDefault();

            const nome = document.getElementById("itemNome").value.trim();
            const descricao = document.getElementById("itemDescricao").value.trim();

            if (nome === "" || descricao === "") {
                alert("Preencha todos os campos!");
                return;
            }

            const item = { nome, descricao };
            let itens = JSON.parse(localStorage.getItem("itens")) || [];
            itens.push(item);
            localStorage.setItem("itens", JSON.stringify(itens));

            document.getElementById("itemNome").value = "";
            document.getElementById("itemDescricao").value = "";

            alert("Item cadastrado!");

            carregarItens();
        });
    }
});
