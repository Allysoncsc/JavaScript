

fetch('array_basico.html').then(resposta =>{
    if(resposta.status !==200) throw new Error('Error 404');
    return resposta.text();
})
.then(html => console.log(html))
.catch(e=> console.error(e));













