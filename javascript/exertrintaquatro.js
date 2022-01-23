function meuEscopo () {
    const form = document.querySelector('.form');

    form.onsubmit = function(evento){
        alert(1);

    };
}

//função criada para nao entrar em conflito com outrar variaveis golobais 
meuEscopo();

