const linkApi = 'http://localhost:3000/videos';
const query = '?q='

async function listaVideos(){
    const conexao = await fetch(linkApi);
    const dadosConvertidos = await conexao.json();
    return dadosConvertidos;
}

async function criaVideo(titulo, descricao, url, imagem){
    const conexao = await fetch(linkApi, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body:JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });
    if(!conexao.ok){
        throw new Error ('Não foi possível carregar o vídeo.')
    }
    const dadosConvertidos = await conexao.json();

    return dadosConvertidos;
}

async function buscaVideo(termoDeBusca){
    const conexao = await fetch(`${linkApi}${query}${termoDeBusca}`);
    const dadosConvertidos = await conexao.json();
    
    return dadosConvertidos;
}

export const conexaoApi = {
    listaVideos,
    criaVideo,
    buscaVideo
}