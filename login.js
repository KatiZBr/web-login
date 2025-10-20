

// Garanto que o código só vai rodar depois que a página HTML inteira for carregada.
document.addEventListener('DOMContentLoaded', function() {
    
    // Pego o formulário e o espaço da mensagem de erro do HTML.
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    // Crio um "ouvinte" que fica esperando o formulário ser enviado.
    loginForm.addEventListener('submit', function(event) {
        // Isso impede que a página recarregue sozinha quando eu clico em 'Login'.
        event.preventDefault();

        // Pego os valores que foram digitados nos campos.
        const usuario = document.getElementById('usuario').value.trim();
        const senha = document.getElementById('senha').value.trim();

        // Verifico se o usuário é 'admin' E a senha é '12345'.
        if (usuario === 'admin' && senha === '12345') {
            // Se estiver tudo certo, mando o usuário para a página de agendamento.
            window.location.href = 'agendamento.html';
        } else {
            // Se algo estiver errado, mostro a mensagem de erro.
            errorMessage.textContent = 'Usuário ou senha inválidos';
        }
    });
});

