function carregarItens() {
    const lista = document.getElementById("listaItens");
    lista.innerHTML = ""; 

    const itens = JSON.parse(localStorage.getItem("itens")) || [];

    if (itens.length === 0) {
        lista.innerHTML = "<p>Nenhum item cadastrado.</p>";
        return;
    }

    itens.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${item.nome}</strong>: ${item.descricao}
            <button class="remover" data-index="${index}">Remover</button>
        `;
        lista.appendChild(li);
    });

    document.querySelectorAll(".remover").forEach(botao => {
        botao.addEventListener("click", function() {
            removerItem(this.dataset.index);
        });
    });
}

function removerItem(index) {
    let itens = JSON.parse(localStorage.getItem("itens")) || [];
    itens.splice(index, 1);
    localStorage.setItem("itens", JSON.stringify(itens));
    carregarItens(); 
}

document.addEventListener("DOMContentLoaded", carregarItens);
