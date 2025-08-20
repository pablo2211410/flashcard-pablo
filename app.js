function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container');
    let cartao = document.createElement('div');
    cartao.className = 'cartao';

    // Criando o conteúdo do cartão
    cartao.innerHTML = `
    <div class="cartao__conteudo">
        <h3>${categoria}</h3>
        <div class="cartao__conteudo__pergunta">
            <p>${pergunta}</p>
        </div>
        <div class="cartao__conteudo__resposta">
            <p>${resposta}</p>
        </div>
    </div>
    `;

    // Adiciona o cartão ao container principal
    container.appendChild(cartao);
}

// Exemplo de flashcards com tema espacial
criaCartao(
    'Astronomia',
    'O que é um buraco negro?',
    'Um buraco negro é uma região do espaço com gravidade tão forte que nada pode escapar dele, nem mesmo a luz.'
);

criaCartao(
    'Galáxias',
    'Qual é a galáxia mais próxima da Via Láctea?',
    'A galáxia de Andrômeda.'
);

criaCartao(
    'Sistema Solar',
    'Qual planeta é conhecido como o "planeta vermelho"?',
    'Marte.'
);

criaCartao(
    'Exploração Espacial',
    'Quem foi o primeiro homem a pisar na Lua?',
    'Neil Armstrong, em 1969.'
);
