const request = obj =>{
    return new Promise((resolve,reject) =>{
        const xhr = new XMLHttpRequest();
        //                      sync=true
        //xhr.open('GET','URL',true);
        xhw.open(obj.method,obj.url,true);
        xhr.send();
    
        xhr.addEventListener('load' , () =>{
            if(xhr.status > 200 && xhr.status < 300){
                resolve(xhr.response);
            }else{
                reject(xhr.statusText);
            }
        })



    })


}


codument.addEventListener('click', e=>{
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if ( tag === 'a'){
        carregaPagina(el);
    }
})


async function carregaPagina(el){
    const href = el.getAttribute('href');

    const objConfig = {
        method: 'GET',
        url:href
    };
    try{
        const response = await request(objConfig);
        carregaResultado(response);
    }catch(e){
        console.log(e);
    }
}

//CARREGA PAGINA COM FETCH
function carregaPaginaFetch(el){
    const href = el.getAttribute('href');

    fetch(href)
    .then(response =>{
        if(response.status !== 200) throw new Error('Error 404!')
        response.text();
    })
    .then(html => carregaResultado(html))
    .catch(e=> console.log(e));
}

function carregaResultaddo(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}



// function carregaPagina(el){
//     const href = el.getAttribute('href');
//     request({
//         method: 'GET',
//         url:href,
//         success(response){

//         },
//         error(errorText){
//             console.log(errorText);
//         }
//     });
// }