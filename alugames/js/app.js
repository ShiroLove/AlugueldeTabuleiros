function alterarStatus(id){
    var status = document.getElementById(`game-${id}`);
    var foto = status.querySelector('.dashboard__item__img');
    var botao = status.querySelector('.dashboard__item__button');

    if (foto.classList.contains('dashboard__item__img--rented')) {
        if (confirm('Você Tem certeza que deseja devolver o jogo?')) {
            foto.classList.remove('dashboard__item__img--rented');
        foto.classList.add('dashboard__item__img--available');
        botao.classList.remove('dashboard__item__button--return');
        botao.innerHTML = 'Alugar';

        } else{
            return false;
        }
    }
    else {
        foto.classList.add('dashboard__item__img--rented');
        botao.innerHTML = 'Devolver';
        botao.classList.add('dashboard__item__button--return');

    }
}

function jogosAlugados () {
    if (document.querySelectorAll('.dashboard__item__img--rented').length == 0) {
        document.getElementById('jogos-alugados').innerHTML = ('Você não alugou nenhum jogo');
    } else {
        var jogos = document.querySelectorAll('.dashboard__item__img--rented').length;
    let palavrajogos = jogos > 1 ? 'jogos' : 'jogo';
    let mensagem = document.getElementById('jogos-alugados').innerHTML = (`Você tem ${jogos} ${palavrajogos} alugados`);
    }

}
