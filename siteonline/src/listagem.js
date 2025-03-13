function atualizarLista() {
    const listaItens = document.getElementById("lista-itens");
    let itens = JSON.parse(localStorage.getItem("itens")) || [];

    listaItens.innerHTML = "";
    itens.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.nome} - ${item.descricao}`;
        
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remover";
        removeBtn.classList.add("remove-btn");
        removeBtn.onclick = () => removerItem(index);
        
        li.appendChild(removeBtn);
        listaItens.appendChild(li);
    });
}

function removerItem(index) {
    let itens = JSON.parse(localStorage.getItem("itens")) || [];
    itens.splice(index, 1);
    localStorage.setItem("itens", JSON.stringify(itens));
    atualizarLista();
}

document.addEventListener("DOMContentLoaded", atualizarLista);
