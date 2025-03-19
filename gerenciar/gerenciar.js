document.addEventListener("DOMContentLoaded", function () {
    const tabela = document.getElementById("tbalimentar");
    const btnBuscar = document.querySelector("button.btn-success");
    const inputBuscar = document.querySelector(".input-group input");
    const btnAdicionar = document.getElementById("btnAdicionar");
    const inputNome = document.getElementById("inputNome");
    const inputPerfil = document.getElementById("inputPerfil");
    
    let usuarios = [
        { id: 1, nome: "Carlos Silva", perfil: "Admin" },
        { id: 2, nome: "Maria Souza", perfil: "Usuário" },
        { id: 3, nome: "João Pedro", perfil: "Usuário" }
    ];

    function renderTabela(filtro = "") {
        tabela.innerHTML = "";
        usuarios
            .filter(usuario => usuario.nome.toLowerCase().includes(filtro.toLowerCase()))
            .forEach(usuario => {
                let row = document.createElement("tr");
                row.innerHTML = `
                    <td>${usuario.id}</td>
                    <td>${usuario.nome}</td>
                    <td>${usuario.perfil}</td>
                    <td>
                        <button class="btn btn-warning btn-editar" data-id="${usuario.id}">Editar</button>
                        <button class="btn btn-danger btn-excluir" data-id="${usuario.id}">Excluir</button>
                    </td>
                `;
                tabela.appendChild(row);
            });
    }

    function adicionarUsuario(nome, perfil) {
        if (!nome || !perfil) {
            alert("Preencha todos os campos!");
            return;
        }
        const novoId = usuarios.length ? usuarios[usuarios.length - 1].id + 1 : 1;
        usuarios.push({ id: novoId, nome, perfil });
        inputNome.value = "";
        inputPerfil.value = "";
        renderTabela();
    }

    function editarUsuario(id) {
        const usuario = usuarios.find(u => u.id == id);
        inputNome.value = usuario.nome;
        inputPerfil.value = usuario.perfil;
        btnAdicionar.textContent = "Salvar";
        btnAdicionar.onclick = function () {
            usuario.nome = inputNome.value;
            usuario.perfil = inputPerfil.value;
            btnAdicionar.textContent = "Adicionar";
            btnAdicionar.onclick = () => adicionarUsuario(inputNome.value, inputPerfil.value);
            inputNome.value = "";
            inputPerfil.value = "";
            renderTabela();
        };
    }

    function excluirUsuario(id) {
        usuarios = usuarios.filter(u => u.id != id);
        renderTabela();
    }

    document.body.addEventListener("click", function (e) {
        if (e.target.classList.contains("btn-editar")) {
            editarUsuario(e.target.getAttribute("data-id"));
        }
        if (e.target.classList.contains("btn-excluir")) {
            if (confirm("Tem certeza que deseja excluir este usuário?")) {
                excluirUsuario(e.target.getAttribute("data-id"));
            }
        }
    });

    btnAdicionar.addEventListener("click", function () {
        adicionarUsuario(inputNome.value, inputPerfil.value);
    });

    btnBuscar.addEventListener("click", function () {
        renderTabela(inputBuscar.value);
    });

    inputBuscar.addEventListener("input", function () {
        renderTabela(inputBuscar.value);
    });

    renderTabela();
});