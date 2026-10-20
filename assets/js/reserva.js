// Conexão com o Supabase usando a configuração global
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Captura e envio do formulário de agendamento de espaço
document.getElementById('formReserva').addEventListener('submit', function (event) {
    event.preventDefault();

    // Dados preenchidos pelo usuário
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const data_inicial = document.getElementById('horario_inicial').value;
    const data_final = document.getElementById('horario_final').value;
    const numero_de_pessoas = document.getElementById('num_pessoas').value;
    const mensagem = document.getElementById('mensagem').value;
    const espacoSelecionado = document.getElementById('espaco').value;

    // Relaciona a opção escolhida no select com a chave primária da tabela de espaços
    let id_espaco;
    if (espacoSelecionado === 'Espaço 1') {
        id_espaco = 1; // Quadra I
    } else if (espacoSelecionado === 'Espaço 2') {
        id_espaco = 2; // Quadra II
    } else if (espacoSelecionado === 'Espaço 3') {
        id_espaco = 3; // Estúdio
    } else if (espacoSelecionado === 'Espaço 4') {
        id_espaco = 4; // Centro profissionalizante
    } else {
        alert('Por favor, selecione um espaço válido.');
        return;
    }

    // Objeto formatado de acordo com as colunas da tabela 'reservas'
    const reserva = {
        id_espaco,
        data_inicial,
        data_final,
        nome,
        telefone,
        numero_de_pessoas,
        mensagem,
    };

    // Insere o registro na tabela 'reservas'
    async function enviarReserva() {
        const { data, error } = await _supabase
            .from('reservas')
            .insert([reserva]);

        if (error) {
            console.error('Erro ao enviar reserva:', error);
            alert('Erro ao enviar a reserva. Tente novamente.');
        } else {
            console.log('Reserva enviada com sucesso:', data);
            window.location.href = '../pages/sucesso.html';
        }
    }

    enviarReserva();
});
