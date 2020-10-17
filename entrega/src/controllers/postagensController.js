const { request } = require('express');
const helper = require('../helpers/helper.js');
const postagens = require('../models/postagens.js');

const getAll = (req, res) => {
    res.send(postagens);
};

const getById = (req, res) => {
    const {id} = req.params;
    findId = postagens.find(postagem => postagem.id == id);
    console.log(findId);
    res.send(findId);
};

const getByTitulo = (req, res) => {
    const titulo = req.query.titulo;
    findTitulo = postagens.find(postagem => postagem.titulo == titulo);
    console.log(findTitulo);
    res.send(findTitulo);
};

const criarPostagem = (req, res) => {
    const {titulo, conteudo, tags} = req.body;

    let novaPostagem = {
        id: helper.autoIncremento(postagens),
        dataCriacao: helper.dataAtual(),
        titulo: titulo,
        conteudo: conteudo,
        tags: tags
    };

    postagens.push(novaPostagem);

    res.send(postagens)
};

const atualizarPostagem = (req, res) => {
    const {id} = req.params;
    const postagemParaAtualizar = postagens.find(postagens => postagens.id == id);
    const indice = postagens.indexOf(postagemParaAtualizar);
    const propriedades = Object.keys(req.body);

    propriedades.forEach(propriedades => {
        postagemParaAtualizar[propriedades] = req.body[propriedades];
    });

    postagens[indice] = postagemParaAtualizar;

    res.json(postagens);
};

const atualizarCampoPostagem = (req, res) => {
    const {id} = req.params;
    const {titulo, tags} = req.body;
    const camposParaAtualizar = postagens.find(postagens => postagens.id == id);

    camposParaAtualizar.titulo = titulo;
    camposParaAtualizar.tags = tags;

    res.json({ mensagem: `Campos atualizados!`});
};

const deletarPostagem = (req, res) => {
    const { id } = req.params;
    const filtrarPostagem = postagens.find(postagens => postagens.id == id);
    const indice = postagens.indexOf(filtrarPostagem);
    postagens.splice(indice, 1);

    res.send({mensagem: 'Postagem deletada com sucesso!'});
};

module.exports = {
    getAll,
    getById,
    getByTitulo,
    criarPostagem,
    atualizarPostagem,
    atualizarCampoPostagem,
    deletarPostagem
};