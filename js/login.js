document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); 

    const nome = document.getElementById('name').value;
    const telefone = document.getElementById('phone').value;

    // Salva no localStorage
    localStorage.setItem('nomeUsuario', nome);
    localStorage.setItem('telefoneUsuario', telefone);

    window.location.href = "perfil.html"; 
});