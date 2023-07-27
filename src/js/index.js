// passo 1: dar um jeito de pegar o elemento HTML da seta avançar
const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
let cartaoAtual = 0;
const cartoes = document.querySelectorAll('.cartao');

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}

function mostrarCartaoSelecionado(indiceCartao){
    cartoes[indiceCartao].classList.add('selecionado');
}

btnAvancar.addEventListener('click', function(){
    if(cartaoAtual === cartoes.length - 1){
        cartaoAtual = -1;
    };
    // passo 3: fazer aparecer o proximo cartao
    esconderCartaoSelecionado();
    
    cartaoAtual++;
    mostrarCartaoSelecionado(cartaoAtual);
    
})

btnVoltar.addEventListener('click', function(){
    if(cartaoAtual === 0){
        cartaoAtual = cartoes.length;
    };

    esconderCartaoSelecionado();

    cartaoAtual--;
    mostrarCartaoSelecionado(cartaoAtual);
})
