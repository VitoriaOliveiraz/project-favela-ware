// Cliente do Supabase para operações de autenticação
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Fluxo de login com e-mail e senha
const formLogin = document.getElementById('form-login');
if (formLogin) {
    formLogin.addEventListener('submit', async (event) => {
        event.preventDefault();

        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        try {
            const { data, error } = await _supabase.auth.signInWithPassword({ email, password });
            if (error) throw error;

            alert('Login bem-sucedido!');
            window.location.href = '../pages/agendamento.html';
        } catch (error) {
            console.error('Erro ao fazer login:', error.message);
            alert('Erro ao fazer login: ' + error.message);
        }
    });
}

// Fluxo de cadastro de novos usuários
const formSignup = document.getElementById('form-signup');
if (formSignup) {
    formSignup.addEventListener('submit', async (event) => {
        event.preventDefault();

        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;

        try {
            const { data, error } = await _supabase.auth.signUp({ email, password });
            if (error) throw error;

            alert('Cadastro realizado com sucesso!');
            window.location.href = '../pages/agendamento.html';
        } catch (error) {
            console.error('Erro ao fazer cadastro:', error.message);
            alert('Erro ao fazer cadastro: ' + error.message);
        }
    });
}
