document.getElementById('cadastro-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;
    
    try {
        const response = await fetch('http://localhost:8443/usuario/cadastrar', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ usuario, senha })
        });

        const data = await response.json();
        if (response.ok) {
            alert(data.msg);
            window.location.href = "index.html";  // Redireciona para login após cadastro
        } else {
            alert(data.msg);
        }
    } catch (error) {
        console.error("Erro:", error);
        alert("Erro ao cadastrar usuário.");
    }
});
