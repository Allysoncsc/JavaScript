function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    //modo antigo
    //form.onsubmit = function(evento){
      //  evento.preventDefault();  };

      const pessoas = [];

    function recebeEvento (evento){
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        //adicionando objeo no array
        pessoas.push({
          nome: nome.value,
          sobrenome: sobrenome.value,
          peso: peso.value,
          altura: altura.value
        });

        console.log(pessoas);
        
        // mostrando na div resultado
        resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}`
    }

    form.addEventListener('submit', recebeEvento);

}

//função criada para nao entrar em conflito com outrar variaveis golobais 
meuEscopo();

