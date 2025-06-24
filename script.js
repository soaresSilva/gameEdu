<script>
        // EXPLICAÇÃO: Vamos criar nossa primeira função!
        // Esta função será chamada quando o usuário clicar no botão
        
        function verificarResposta() {
            // DESAFIO JS 1: Capture qual opção foi selecionada
            // Dica: Use document.querySelector('input[name="resposta"]:checked')
            // E armazene em uma variável chamada 'opcaoSelecionada'
            
            
            // DESAFIO JS 2: Verifique se alguma opção foi selecionada
            // Se não foi selecionada nada, mostre um alert pedindo para selecionar
            // Dica: use if(!opcaoSelecionada) { alert("..."); return; }
            
            
            // Aqui eu vou te ajudar: a resposta correta é 'A'
            const respostaCorreta = 'A';
            
            // DESAFIO JS 3: Compare se a resposta está certa
            // Pegue o valor da opcaoSelecionada e compare com respostaCorreta
            // Armazene o resultado em uma variável 'acertou' (true ou false)
            
            
            // DESAFIO JS 4: Mostre o resultado na div #resultado
            // 1. Pegue a div resultado: const divResultado = document.getElementById('resultado');
            // 2. Se acertou: divResultado.textContent = "Correto! HTML significa HyperText Markup Language"
            //    e adicione a classe 'correto': divResultado.className = 'correto';
            // 3. Se errou: divResultado.textContent = "Incorreto! A resposta certa é..."
            //    e adicione a classe 'incorreto': divResultado.className = 'incorreto';
            // 4. Mostre a div: divResultado.style.display = 'block';
            
        }
        
        // DESAFIO JS 5: Conecte a função ao botão
        // Dica: document.getElementById('verificar').addEventListener('click', verificarResposta);
        
    </script>