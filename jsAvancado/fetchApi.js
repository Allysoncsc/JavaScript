

fetch('array_basico.html').then(resposta =>{
    if(resposta.status !==200) throw new Error('Error 404');
    return resposta.text();
})
.then(html => console.log(html))
.catch(e=> console.error(e));



async function carregaPagina(el){
    try {
        const href = el.getAttribute('href');
        const response = await fetch(href);

        if(response.status !==200) throw new Error('ERRO 404!');

        const html = await response.text();
        carregaResultaddo(html);
    }catch(e){
        console.log(e);
    }
}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}







