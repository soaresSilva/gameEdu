// EXPLICAÇÃO: Vamos criar um banco de dados de perguntas!
// Um array de objetos - cada objeto é uma pergunta
let perguntas = [];
let perguntaAtual = 0; // Controla qual pergunta estamos mostrando
let pontuacao = 0;     // Contador de acertos
let tempo = 10;               // tempo inicial
let intervalo;

async function carregarDados() {
    try {
        const response = await fetch('/perguntas');
        perguntas = await response.json();
        carregarPergunta();
    } catch (err) {
        alert("Erro ao carregar perguntas!");
        console.error(err);
    }
}// Variável para o intervalo do cronômetro

function carregarPergunta() {
    const pergunta = perguntas[perguntaAtual];
    document.querySelector('h2').textContent = `Questão ${perguntaAtual + 1}`;
    document.querySelector('.question-container p').textContent = pergunta.pergunta;

    const opcoesContainer = document.querySelector('.question-container .options');
    opcoesContainer.innerHTML = ''; // Limpa opções anteriores

    pergunta.opcoes.forEach((opcao, index) => {
        const div = document.createElement('div');
        div.classList.add('options');
        div.innerHTML = `
            <input id="${index}" type="radio" name="resposta" value="${index}">
            <label for="${index}">${opcao}</label>
        `;
        opcoesContainer.appendChild(div);
    });

    // Atualiza a barra de progresso
    const progresso = ((perguntaAtual + 1) / perguntas.length) * 100;
    document.getElementById('progresso').style.width = `${progresso}%`

    document.getElementById('verificar').disabled = false;
    document.getElementById('verificar').style.display = 'block';
    document.getElementById('proxima').style.display = 'none';
    document.getElementById('resultado').style.display = 'none';

    clearInterval(intervalo); // cancela cronômetro anterior
    iniciarCronometro();      // inicia um novo
}

function iniciarCronometro() {
    tempo = 10;
    const cronometroEl = document.getElementById('cronometro');
    cronometroEl.textContent = `⏱️ Tempo restante: ${tempo}s`;

    intervalo = setInterval(() => {
        tempo--;
        cronometroEl.textContent = `⏱️ Tempo restante: ${tempo}s`;

        if (tempo === 0) {
            clearInterval(intervalo);
            document.getElementById('verificar').disabled = true;

            // Mostrar feedback de tempo esgotado
            const pergunta = perguntas[perguntaAtual];
            const divResultado = document.getElementById('resultado');
            divResultado.textContent = `⏰ Tempo esgotado! A resposta certa era: ${pergunta.opcoes[pergunta.correta]}`;
            divResultado.className = 'incorreto';
            divResultado.style.display = 'block';

            document.getElementById('proxima').style.display = 'block';
            document.getElementById('verificar').style.display = 'none';
        }
    }, 1000);
}

function verificarResposta() {
    const opcaoSelecionada = document.querySelector('input[name="resposta"]:checked');

    if (!opcaoSelecionada) {
        alert("Por favor, selecione uma opção antes de verificar.");
        return;
    }

    // DESAFIO JS 8: Adapte esta parte para usar o array de perguntas
    // Dica: const pergunta = perguntas[perguntaAtual];
    // E compare: parseInt(opcaoSelecionada.value) === pergunta.correta
    const pergunta = perguntas[perguntaAtual];
    const acertou = parseInt(opcaoSelecionada.value) === pergunta.correta;

    if (acertou) {
        pontuacao++; // Aumenta a pontuação
    }

    const divResultado = document.getElementById('resultado');
    if (acertou) {
        divResultado.textContent = "Correto! 🎉";
        divResultado.className = 'correto';
    } else {
        divResultado.textContent = `Incorreto! A resposta certa era: ${pergunta.opcoes[pergunta.correta]}`;
        divResultado.className = 'incorreto';
    }
    divResultado.style.display = 'block';

    // DESAFIO JS 9: Esconda o botão "Verificar" e mostre botão "Próxima"
    // document.getElementById('verificar').style.display = 'none';
    // Você vai precisar criar um botão "Próxima Questão" no HTML também!
    document.getElementById('proxima').style.display = 'block';
    document.getElementById('verificar').style.display = 'none';
}

document.getElementById('proxima').addEventListener('click', () => {
    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {
        carregarPergunta();
        document.getElementById('resultado').style.display = 'none';
        document.getElementById('verificar').style.display = 'block';
        document.getElementById('proxima').style.display = 'none';
    } else {
        // Fim do quiz
        document.querySelector('.question-container').innerHTML = `
            <h2>Quiz finalizado! 🎉</h2>
            <p>Sua pontuação: <strong>${pontuacao}</strong> de <strong>${perguntas.length}</strong></p>
            <button onclick="location.reload()">Recomeçar</button>
        `;
    }
});

document.addEventListener('DOMContentLoaded', carregarDados);

document.getElementById('progresso').style.width = '100%';

// Conecta a função ao botão
document.getElementById('verificar').addEventListener('click', verificarResposta);


// DESAFIO JS 10: Chame carregarPergunta() aqui para carregar a primeira pergunta
carregarPergunta();