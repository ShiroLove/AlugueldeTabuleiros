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
    var jogos = document.querySelectorAll('.dashboard__item__img--rented').length;
    alert(`Você tem ${jogos} jogos alugados`);
}

function palindromo(palavra){
    var palavraInvertida = palavra.split('').reverse().join('');
    if (palavraInvertida === palavra) {
        console.log('É um palíndromo');
    } else {
        console.log('Não é um palíndromo');
    }
}


function ordenarNumeros(a, b, c){
    var numeros = [a, b, c];
    numeros.sort(function(a, b){
        return a - b;
    });
    console.log(numeros);
}