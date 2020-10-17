const blogModel = require('../models/blogRepModels')
const helper = require('../helpers/blogRepHelpers');
const { response } = require('express');
const blogRepHelpers = require('../helpers/blogRepHelpers');


//const { response } = require('express')

const getAll = (require, response) => {
    response.status(200).json(blogModel);
}

const criarPost = (require, response) => {
    
    const {id, dataCriacao, titulo, conteudo, etiquetas,} = require.body

  const criarPost = {
      id: helper.criarId(blogModel),
      dataCriacao: helper.criarData(blogModel),
      titulo: titulo,
      conteudo: conteudo,
      etiquetas: etiquetas
  }

  blogModel.push(criarPost);

  response.status(201).json(blogModel);


}

const atualPut = (require, response) => {
    const {id} = require.params
    const filtraId = blogRepModels.filter(post => {
        return post.id == id 
    })[0]
    const indice = blogRepModels.indexOf(filtraId)
    const getChave = Object.keys(require.body)
    getChave.forEach(chave => {
        filtraId[chave] = require.body[chave]
    })
    blogRepModels[indice] = filtraId
    response.status(200).json(blogRepModels[indice])
}

const elementoPatch = (require, response) => {
    const {id} = require.params
    const {titulo} = require.body
    const post = blogRepModels.find(post => post.id == id)
    post.titulo = titulo
    response.status(200).json(blogRepModels)

}

const etiquetaPatch = (require, response) => {
    const {id} = require.params
    const {etiquetas} = require.body
    const post = blogRepModels.find(post => post.id == id)
    post.etiquetas = etiquetas
    response.status(200).json(blogRepModels)

}

const deletePost = (require, response) => {
    const {id}= require.params

    let filterPosts = blogModel.filter(post => {
        return post.id == id;
    })[0]

    const index = blogModel.indexOf(filterPosts)

    blogModel.splice(index, 1)

    response.json(blogModel);
}


module.exports = {
    getAll,
    criarPost,
    atualPut,
    elementoPatch,
    deletePost
}