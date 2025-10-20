
// Espero todo o conteúdo da página ser carregado para começar a rodar meu script.
document.addEventListener('DOMContentLoaded', () => {

    // Pego o formulário e a data do HTML.
    const form = document.getElementById('agendamentoForm');
    const dataInput = document.getElementById('data');

    // Defino a data mínima para o campo de data como sendo hoje.
    // Isso impede que o usuário selecione uma data passada.
    const hoje = new Date().toISOString().split('T')[0];
    dataInput.setAttribute('min', hoje);

    // Fico "ouvindo" o evento de envio do formulário.
    form.addEventListener('submit', (event) => {
        // Impede o recarregamento padrão da página.
        event.preventDefault();

        // Crio um objeto para guardar todos os dados da consulta.
        const dadosConsulta = {
            nome: form.nome.value,
            email: form.email.value,
            telefone: form.telefone.value,
            idade: form.idade.value,
            data: form.data.value,
            hora: form.hora.value,
            especialidade: form.especialidade.value,
            conveniado: form.conveniado.value,
            // Para os checkboxes, preciso verificar quais foram marcados e pegar seus valores.
            servicos: Array.from(form.querySelectorAll('input[name="servico"]:checked')).map(cb => cb.value),
            sintomas: form.sintomas.value,
            medico: form.medico.value,
        };

        // Pego os agendamentos que já existem no localStorage.
        // Se não houver nenhum, começo com uma lista vazia.
        const agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];
        
        // Adiciono o novo agendamento na lista.
        agendamentos.push(dadosConsulta);

        // Salvo a lista atualizada de volta no localStorage.
        // O JSON.stringify transforma meu objeto em texto para poder ser salvo.
        localStorage.setItem('agendamentos', JSON.stringify(agendamentos));


        // 4. Limpar o formulário
        form.reset();
        document.getElementById('nome').focus(); // Coloco o foco de volta no primeiro campo
    
    });
});

