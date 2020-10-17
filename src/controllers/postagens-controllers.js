const postagem = require('../models/postagens-models');
const helper = require('../helpers/postagens-helpers');


const visualizarPostagens = (req, res) =>{
    res.status(200).send(postagem)
}

const criarPostagem = (req, res) =>{
    let {titulo, conteudo, etiquetas} = req.body;
    const mySet = new Set (etiquetas);
    mySet.has("value1")
    let novaPostagem = {
        id: helper.obterNovoID(postagem),
        dataCriacao: helper.novaData(postagem),
        titulo: titulo,
        conteudo: conteudo,
        etiquetas: mySet
    }

    postagem.push(novaPostagem)
    res.status(200).send(novaPostagem)
}
const atualizarPostagem = (req,res) =>{
    const {id} = req.params;
    //pegando a postagem a ser atualizada através do id
    const filtrarPostagem = postagem.filter(tarefa =>{
        return tarefa.id ==id;
    })[0]; 
    //declarando a chave que será atualizada
    const chaves = postagem.indexOf(filtrarPostagem);
    //obtendo o corpo para o usuario utilizar
    const obterChaves = Object.keys(req.body);
    //vai pecorrer as chaves do nosso objeto
    obterChaves.forEach(chave => {
        filtrarPostagem[chave] = req.body[chave];
    });

    postagem[chaves] = filtrarPostagem;

    res.status(200).json(postagem[chaves]);
}

const atualizarTitulo = (req,res) =>{
    const {id} = req.params;
     //declarando a chave que será atualizada
     const {titulo} = req.body;
    //pegando a postagem a ser atualizada através do id
    const postagem = postagem.find(postagem => postagem.id ==id) 
    //atualizando o titulo
    postagem.titulo = titulo;
    
    res.status(200).send("Título atualizado");
}   

const deletarPostagem = (req,res) =>{
    const {id} = req.params;
    
    let postagensFiltradas = postagem.filter( postagem => {
        return postagem.id == id;
    })[0];
    const index = postagem.indexOf(postagensFiltradas);
    postagem.splice(index, 1)
    res.json(postagem)
}

module.exports = {
    visualizarPostagens,
    criarPostagem,
    deletarPostagem,
    atualizarPostagem, 
    atualizarTitulo
}
