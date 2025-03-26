document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;

    // Criando Header
    const header = document.createElement("header");
    header.innerHTML = `
        <h1>Gerenciador de Itens</h1>
        <button id="btnCadastro">Cadastro</button>
        <button id="btnListagem">Listagem</button>
    `;
    body.appendChild(header);

    
    const main = document.createElement("main");

    
    const telaCadastro = document.createElement("section");
    telaCadastro.id = "telaCadastro";
    telaCadastro.innerHTML = `
        <h2>Cadastro de Itens</h2>
        <form id="formCadastro">
            <input type="text" id="itemNome" placeholder="Nome do Item" required>
            <input type="text" id="itemDescricao" placeholder="Descrição do Item" required>
            <button type="submit">Cadastrar</button>
        </form>
    `;
    main.appendChild(telaCadastro);

    
    const telaListagem = document.createElement("section");
    telaListagem.id = "telaListagem";
    telaListagem.style.display = "none";
    telaListagem.innerHTML = `
        <h2>Listagem de Itens</h2>
        <ul id="listaItens"></ul>
    `;
    main.appendChild(telaListagem);

    body.appendChild(main);

    
    const scripts = ["/src/navegacao.js", "/src/cadastro.js", "/src/listagem.js"];
    scripts.forEach(src => {
        const script = document.createElement("script");
        script.src = src;
        script.defer = true;
        document.body.appendChild(script);
    });
});
