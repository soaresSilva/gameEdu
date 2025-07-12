# 🧠 Quiz de Programação

Um projeto web interativo que testa conhecimentos em programação com perguntas de múltipla escolha, tempo limitado e pontuação. Criado com Node.js + Express no back-end e HTML/CSS/JavaScript puro no front-end.

---

## 📌 Descrição

O **Quiz de Programação** é uma aplicação educacional e divertida que apresenta perguntas de múltipla escolha, cronômetro para cada questão, pontuação ao final e outras funcionalidades interativas. Ideal para quem está estudando programação e quer testar os conhecimentos de forma dinâmica.

---

## 🚀 Link do Projeto Online

🌐 Acesse o quiz em produção aqui:  
👉 [gameedu.onrender.com](https://gameedu.onrender.com)

> O projeto está hospedado no [Render](https://render.com), com o front-end servido por arquivos estáticos e o back-end em Node.js.

---

## ⚙️ Funcionalidades Implementadas

- [x] Listagem de perguntas via API (`/perguntas`)
- [x] Interface com perguntas e alternativas dinâmicas
- [x] Verificação de resposta com feedback (acerto ou erro)
- [x] Cronômetro regressivo para cada pergunta
- [x] Controle de pontuação ao final do quiz
- [x] Barra de progresso entre as perguntas
- [x] Validação para evitar respostas sem seleção

---

## 📅 Funcionalidades Futuras

- [ ] Sistema de ranking com histórico de pontuação
- [ ] Cadastro de novos quizzes com temas variados
- [ ] Responsividade total para mobile
- [ ] Animações com feedback visual mais atrativo
- [ ] Timer customizável por pergunta
- [ ] Áudio e sons para reforçar feedback
- [ ] Modo noturno

---

## 🧰 Tecnologias Utilizadas

| Ferramenta | Função |
|------------|--------|
| **Node.js** | Back-end (servidor e API REST) |
| **Express** | Framework leve para rotas e requisições |
| **HTML5 / CSS3** | Estrutura e estilo da interface |
| **JavaScript Vanilla** | Interações no front-end |
| **Render** | Hospedagem fullstack (backend + frontend) |
| **Postman** | Testes de rotas locais da API |
| **Git + GitHub** | Versionamento e colaboração |

---

## 📁 Estrutura do Projeto

gameEdu/
├── public/ # Front-end
│ ├── index.html
│ ├── style.css
│ └── script.js
├── perguntas.json # Base de dados (mock)
├── server.js # Servidor Express
├── package.json
└── README.md

---

## 🛠️ Como Rodar o Projeto Localmente

### 1. Clone o repositório
git clone [gameEdu](https://github.com/soaresSilva/gameEdu)
cd seu-repositorio
### 2. Instale as dependências
npm install
### 3. Inicie o servidor
node server.js
### 4. Acesse o navegador
http://localhost:3000


# 🙋‍♂️ Autor
Desenvolvido por Alisson Silva

### 📄 Licença
Este projeto está licenciado sob a MIT License – veja o arquivo LICENSE para mais detalhes.