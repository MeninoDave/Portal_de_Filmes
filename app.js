const TMDB_ENDPOINT = 'https://api.themoviedb.org/3';
const APIKEY = 'dbb8a7d9c8f2c9beb030ee50a5226716';
const IMG_PREFIX = 'https://image.tmdb.org/t/p/w500';
let xhr;

function carregaFilmes () {
    xhr = new XMLHttpRequest ();

    xhr.open ('GET', TMDB_ENDPOINT + '/movie/popular' + '?api_key=' + APIKEY, true);
    xhr.onload = exibeFilmes;
    xhr.send();
}

function pesquisaFilmes () {
    xhr = new XMLHttpRequest ();

    query = document.getElementById('pesquisa').value;

    xhr.open ('GET', TMDB_ENDPOINT + '/search/movie' + '?api_key=' + APIKEY + '&query=' + query, true);
    xhr.onload = exibeFilmes;
    xhr.send();

}


function exibeFilmes () {
    
    let data = JSON.parse (xhr.responseText);
    let textoHTML = ''; 

    for (let i = 0; i < data.results.length; i++) {
        let nomeFilme = data.results[i].title;
        let sinopse = data.results[i].overview;
        let imagem = IMG_PREFIX + data.results[i].poster_path;
        let ano = data.results[i].release_date;
        let ident = data.results[i].id;
        let linkFilme = 'https://themoviedb.org/movie/'+ ident;
        
        textoHTML += `<div class="card col-md-4">
            <img src="${imagem}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${nomeFilme}</h5>
                <p class="card-text">${ano}</p>
                <p class="card-text">${sinopse}</p>
                <a href= ${linkFilme} class="btn btn-primary">Mais</a>
            </div>
        </div>`
    }

    document.getElementById('tela').innerHTML = textoHTML;
}

function carregaSeries () {
    xhr = new XMLHttpRequest ();

    xhr.open ('GET', TMDB_ENDPOINT + '/tv/popular' + '?api_key=' + APIKEY, true);
    xhr.onload = exibeSeries;
    xhr.send();
}

function pesquisaSeries () {
    xhr = new XMLHttpRequest ();

    query = document.getElementById('pesquisaS').value;

    xhr.open ('GET', TMDB_ENDPOINT + '/search/tv' + '?api_key=' + APIKEY + '&query=' + query, true);
    xhr.onload = exibeSeries;
    xhr.send();
}


function exibeSeries () {
    
    let data = JSON.parse (xhr.responseText);
    let textoHTML = '';

    for (let j = 0; j < data.results.length; j++) {
        let nomeSerie = data.results[j].name;
        let sinopse = data.results[j].overview;
        let imagem = IMG_PREFIX + data.results[j].poster_path;
        let anoserie = data.results[j].first_air_date;
        let idents = data.results[j].id;
        let linkSerie = 'https://themoviedb.org/tv/'+ idents;

        textoHTML += `<div class="card col-md-4">
            <img src="${imagem}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${nomeSerie}</h5>
                <p class="card-text">${anoserie}</p>
                <p class="card-text">${sinopse}</p>
                <a href= ${linkSerie} class="btn btn-primary">Mais</a>
            </div>
        </div>`
    }

    document.getElementById('telaS').innerHTML = textoHTML;
}
