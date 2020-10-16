const { request, response } = require('express');
const helpers = require('../helpers/helpers');
const { keys } = require('../models/blog-models');
const blog = require('../models/blog-models');
let blogModel = require('../models/blog-models');

const getBlog = (request, response) => {
    response.status(200).json(blogModel);
}

const getById = (request, response) => {
    const { id } = request.params;

    const blog = blogModel.find(blog => blog.id == id);

    response.status(200).json(blog);
}

const getByTitle= (request, response) => {
    const { titulo } = request.query;

    const blog = blogModel.find(blog => blog.titulo == titulo);

    response.status(200).json(blog);
}

//post
const createPost = (request, response) => {
    const { titulo, conteudo, tags } = request.body;

    const novoPost = {
        id: helpers.obterNovoValor(blogModel),
        titulo: titulo,
        conteudo: conteudo,
        tags: tags,
        dataCriacao: helpers.novaData(blogModel)
    }
    blogModel.push(novoPost);

    response.status(201).json(novoPost);
}

//delete
const deletePost = (request, response) => {
    const { id } = request.params;

    blogModel.filter(blog => blog.id != id);
    
    response.json({ mensagem: "Post deletado com sucesso!"});
}

//put
const updatePost = (request, response) => {
    const { id } = request.params;

    const filtrarPostAtualizado = blogModel.find(blog => blog.id == id);

    const index = blogModel. indexOf(filtrarPostAtualizado);

    const obtainKeys = Object.keys(request.body);

    obtainKeys.forEach(key => {
        filtrarPostAtualizado[key] = request.body[key];
    });

    blogModel[index] = filtrarPostAtualizado;
    response.status(200).json(blogModel[index]);
}




module.exports = {
    getBlog,
    getById,
    getByTitle,
    createPost,
    deletePost,
    updatePost
}