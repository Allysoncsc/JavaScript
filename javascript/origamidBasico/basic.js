

let i =0;
 
while(i<10){
    console.log(i);
    i++;
}


var videoGames = ['Switch','PS4','Xbox','3DS'];

for(var item =0;item < videoGames.length;item++){
    console.log(videoGames[item]);
    if(videoGames[i] === 'Xbox'){
        break;
    }
}

//percorre o array olhando cada elemento
videoGames.forEach(function(item){
    console.log(item)
})

var idade =19;

var permissao = idade >=18 ? true : false;