// Este arquivo contém o código JavaScript que adiciona interatividade à página. 

document.addEventListener('DOMContentLoaded', function() {
    const botaoFerrari = document.getElementById('botao-ferrari');
    const botaoPorsche = document.getElementById('botao-porsche');
    const botaoLamborghini = document.getElementById('botao-lamborghini');

    botaoFerrari.addEventListener('click', function() {
        window.location.href = 'componentes/ferrari.html';
    });

    botaoPorsche.addEventListener('click', function() {
        window.location.href = 'componentes/porsche.html';
    });

    botaoLamborghini.addEventListener('click', function() {
        window.location.href = 'componentes/lamborghini.html';
    });
});