const postagensModel = require("../moldels/postagens-models");
const helper = require("../helpers/helpers");
const { request, response } = require("express");

const todasPostagens = (request, response) => {
    response.status(200).json(postagensModel);
}

const getByTitle = (request, response) => {
    const {titulo} = request.query;
    const dataBase = postagensModel.find(postagem => postagem.titulo == titulo);

    response.json(dataBase);
}

const criarPostagem = (request, response) => {
    const {titulo, conteudo, etiquetas} = request.body;

    const novaPostagem = {
        id: helper.newValue(postagensModel), 
        dataCriacao: helper.newDate(postagensModel), 
        titulo: titulo, 
        conteudo: conteudo,
        etiquetas: etiquetas
    }

    postagensModel.push(novaPostagem);

    response.status(201).json(novaPostagem);
}

const atualizarPostagem = (request, response) => {
    const {id} = request.params;
    const filtrarPostagem = postagensModel.filter(postagem => {
        return postagem.id == id;
    }) [0];

    const index = postagensModel.indexOf(filtrarPostagem);

    const obterChaves = Object.keys(request.body);
    obterChaves.forEach( chave => {
        filtrarPostagem[chave] = request.body[chave];
    })
    postagensModel[index]  = filtrarPostagem;

    response.status(200).json(postagensModel[index]);
}

const atualizarTituloPostagem = (request, response) => {
    const {id} = request.params;
    const {titulo} = request.body;
    const postagem = postagensModel.find(postagem => postagem.id == id);

    postagem.titulo = titulo;

    response.status(204).json({mensagem: `O título foi atualizado com sucesso`});
}

const atualizarTagPostagem = (request, response) => {
    const {id} = request.params;
    const {tag} = request.body;
    const postagem = postagensModel.find(postagem => postagem.id == id);

    postagem.tag = tag;

    response.status(204).json({mensagem: `A tag foi atualizada com sucesso`});
}

const deletarPostagem = (request, response) => {
    const {id} = request.params;

    let postagensFiltradas = postagensModel.filter(postagem => {
        return postagem.id == id;
    }) [0];

    const index = postagensModel.indexOf(postagensFiltradas);

    postagensModel.splice(index, 1);

    response.json(postagensModel);
}

module.exports = {
    todasPostagens,
    getByTitle,
    criarPostagem,
    atualizarPostagem,
    atualizarTagPostagem,
    atualizarTituloPostagem,
    deletarPostagem
}