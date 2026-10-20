# 🚀 Project Favela-Ware

O **Favela-Ware** é um programa social gratuito que eu participei e desenvolvi esta aplicação. Uma aplicação web focada em fornecer soluções de agendamento, cadastro e gestão de serviços. O projeto oficial, por ser de iniciante, não seguia uma boa arquitetura e tinha más implementações. Em 2024 tentei criar uma interface moderna e responsiva. Este repositório é a versão refatorada, mas que ainda serve como base de consulta e aprendizado, por isso tantos comentários.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5** — Estruturação semântica das páginas
* **CSS3** — Estilização personalizada e design responsivo
* **JavaScript (ES6+)** — Lógica de autenticação, agendamentos e interatividade
* **Bootstrap 5** — Framework para componentes visuais e grid responsivo
* **Supabase** — Backend as a Service (autenticação e banco de dados)

---

## 📂 Estrutura do Projeto

```text
PROJECT-FAVELA-WARE/
├── assets/
│   ├── css/         # Estilos: global, Bootstrap e específicos por página
│   ├── js/          # Lógica: config, autenticação, agendamentos, reservas
│   └── image/       # Imagens e logos
├── pages/           # Páginas HTML do sistema
│   ├── agendamento.html
│   ├── cadastro.html
│   ├── contato.html
│   ├── login.html
│   ├── politica_de_privacidade.html
│   ├── reserva.html
│   ├── Sobrenos.html
│   └── sucesso.html
└── index.html       # Página principal (Home)
```

---

## ⚙️ Como rodar localmente

> [!IMPORTANT]
> Abra o projeto com um **servidor local** (ex: extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) no VS Code).
> Abrir o `index.html` diretamente pelo explorador de arquivos pode causar problemas com caminhos relativos e requisições ao Supabase.

1. Clone o repositório
2. Abra a pasta no VS Code
3. Clique com o botão direito em `index.html` → **Open with Live Server**

---

## 🔑 Configuração do Supabase

As credenciais estão centralizadas em [`assets/js/config.js`](assets/js/config.js).

> [!NOTE]
> A `anon key` do Supabase é projetada para uso público em frontends, sendo segura quando combinada com **Row Level Security (RLS)** ativado no painel do Supabase. Nunca exponha a `service_role key` em código frontend.

---

## 📄 Páginas do sistema

| Página | Descrição |
|--------|-----------|
| `index.html` | Home — carrossel, espaços e serviços |
| `pages/login.html` | Login com email e senha |
| `pages/cadastro.html` | Criação de conta |
| `pages/agendamento.html` | Lista de espaços disponíveis (requer login) |
| `pages/reserva.html` | Formulário de reserva de espaço |
| `pages/sucesso.html` | Confirmação de reserva enviada |
| `pages/Sobrenos.html` | Sobre a Província Pavoniana |
| `pages/contato.html` | Formulário de contato |
| `pages/politica_de_privacidade.html` | Política de privacidade |

---

*© 2024 first version by Vitória Oliveira. AOPA*
*© 2026 latest version by Vitória Oliveira. AOPA*
