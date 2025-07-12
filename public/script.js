let perguntas = [];
let perguntaAtual = 0;
let pontuacao = 0;
let tempo = 10;
let intervaloId = null;

async function carregarDados() {
    try {
        const response = await fetch('/perguntas');
        perguntas = await response.json();
        carregarPergunta();
    } catch (err) {
        alert("Erro ao carregar perguntas!");
        console.error(err);
    }
}

function carregarPergunta() {
    clearInterval(intervaloId); // Corrigido o nome da variável
    tempo = 10;

    const pergunta = perguntas[perguntaAtual];
    document.querySelector('h2').textContent = `Questão ${perguntaAtual + 1}`;
    document.querySelector('.question-container p').textContent = pergunta.pergunta;

    const opcoesContainer = document.querySelector('.question-container .options');
    opcoesContainer.innerHTML = '';

    pergunta.opcoes.forEach((opcao, index) => {
        const div = document.createElement('div');
        div.classList.add('options');
        div.innerHTML = `
            <input id="${index}" type="radio" name="resposta" value="${index}">
            <label for="${index}">${opcao}</label>
        `;
        opcoesContainer.appendChild(div);
    });

    const progresso = ((perguntaAtual + 1) / perguntas.length) * 100;
    document.getElementById('progresso').style.width = `${progresso}%`;

    document.getElementById('verificar').disabled = false;
    document.getElementById('verificar').style.display = 'block';
    document.getElementById('proxima').style.display = 'none';
    document.getElementById('resultado').style.display = 'none';

    iniciarCronometro(); // Apenas um chamado aqui
}

function iniciarCronometro() {
    const cronometroEl = document.getElementById('cronometro');
    cronometroEl.textContent = `⏱️ Tempo restante: ${tempo}s`;

    intervaloId = setInterval(() => {
        tempo--;
        cronometroEl.textContent = `⏱️ Tempo restante: ${tempo}s`;

        if (tempo === 0) {
            clearInterval(intervaloId);
            document.getElementById('verificar').disabled = true;

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

    clearInterval(intervaloId);

    const pergunta = perguntas[perguntaAtual];
    const acertou = parseInt(opcaoSelecionada.value) === pergunta.correta;

    const divResultado = document.getElementById('resultado');
    if (acertou) {
        pontuacao++;
        divResultado.textContent = "Correto! 🎉";
        divResultado.className = 'correto';
    } else {
        divResultado.textContent = `Incorreto! A resposta certa era: ${pergunta.opcoes[pergunta.correta]}`;
        divResultado.className = 'incorreto';
    }
    divResultado.style.display = 'block';

    document.getElementById('proxima').style.display = 'block';
    document.getElementById('verificar').style.display = 'none';
}

document.getElementById('proxima').addEventListener('click', () => {
    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
        carregarPergunta();
    } else {
        document.querySelector('.question-container').innerHTML = `
            <h2>Quiz finalizado! 🎉</h2>
            <p>Sua pontuação: <strong>${pontuacao}</strong> de <strong>${perguntas.length}</strong></p>
            <button onclick="location.reload()">Recomeçar</button>
        `;
    }
});

document.addEventListener('DOMContentLoaded', carregarDados);

document.getElementById('verificar').addEventListener('click', verificarResposta);