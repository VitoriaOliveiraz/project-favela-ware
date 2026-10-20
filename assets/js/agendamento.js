// Conexão com o cliente Supabase utilizando as constantes globais do config.js
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Gerencia o botão de logout na interface
document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.getElementById('logout-button');
    if (logoutButton) {
        logoutButton.addEventListener('click', async () => {
            try {
                const { error } = await _supabase.auth.signOut();
                if (error) throw error;

                alert('Deslogado com sucesso!');
                window.location.href = '../index.html';
            } catch (error) {
                console.error('Erro ao deslogar:', error.message);
                alert('Erro ao deslogar: ' + error.message);
            }
        });
    }
});

// Verificação de autenticação: se não houver usuário logado, manda para o login
async function checkAuth() {
    const { data: { session }, error } = await _supabase.auth.getSession();
    if (error) {
        console.error("Erro ao verificar a sessão:", error);
        alert("Erro ao verificar a sessão.");
        return;
    }
    if (!session) {
        window.location.href = '../pages/login.html';
    }
}

// Inicialização: primeiro valida a sessão e depois carrega os dados
window.addEventListener('load', async () => {
    await checkAuth();
    espacos();
});

// Faz a requisição na tabela 'espaco' do Supabase
async function espacos() {
    console.log('Buscando espaços do banco de dados...');

    const { data: listaEspacos, error } = await _supabase
        .from('espaco')
        .select('*');

    if (error) {
        console.error('Erro ao buscar espaços:', error);
        return;
    }

    if (listaEspacos.length === 0) {
        console.warn('Nenhum espaço foi encontrado no banco de dados.');
    } else {
        console.log('Espaços encontrados:', listaEspacos);
    }

    mostrarespacos(listaEspacos);
}

// Manipulação do DOM: itera sobre os dados e cria os cards dinamicamente
function mostrarespacos(listaEspacos) {
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = ''; // Limpa antes de renderizar para não duplicar

    listaEspacos.forEach(espaco => {
        console.log('Renderizando espaço:', espaco);

        // Container individual do card
        const card = document.createElement('div');
        card.className = 'card';

        // Título com o nome do espaço
        const titulo = document.createElement('h2');
        titulo.textContent = espaco.nome;
        card.appendChild(titulo);

        // Parágrafo com a descrição
        const descricao = document.createElement('p');
        descricao.textContent = espaco.descricao;
        card.appendChild(descricao);

        // Valor da hora
        const preco = document.createElement('p');
        preco.className = 'preco';
        preco.textContent = `Preço por hora: R$ ${espaco.preco_hora}`;
        card.appendChild(preco);

        // Imagem com fallback caso não venha URL do banco
        const img = document.createElement('img');
        img.src = espaco.image || 'https://via.placeholder.com/300';
        img.alt = `Foto do espaço ${espaco.nome}`;
        img.style.width = '100%';
        card.appendChild(img);

        // Botão que direciona para o formulário de reserva
        const link = document.createElement('a');
        link.href = '../pages/reserva.html';
        link.target = '_blank';

        const button = document.createElement('button');
        button.className = 'button';
        button.textContent = 'Saiba mais';

        link.appendChild(button);
        card.appendChild(link);

        cardContainer.appendChild(card);
    });
}
