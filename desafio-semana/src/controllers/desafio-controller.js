let desafioModel = require("../models/desafio-models");
const { response } = require('../app');
const helper = require('../helpers/helper');


const getAllPosts = (request, response) => {
    response.status(200).json(desafioModel)
}

///Cria uma postagem verificando se a tag já existe
const createNewPost = (request, response) => {
    const {titulo, conteudo, tags} = request.body;

    const newPost = {
        id: helper.getNewID(desafioModel),
        dataCriacao: new Date().toString(),
        titulo: titulo,
        conteudo: conteudo,
        tags: tags,
    }

    if(desafioModel.filter(post => post.tags != tags)){
        desafioModel.push(newPost);
        response.status(201).json(desafioModel)
    } else {
        response.status(404).send({ mensagem: `Tag já existe` });
}}

//atualiza titulo
const updateTitle = (requisicao, resposta) =>{
    const {id} = requisicao.params;
    const {titulo} = requisicao.params;
    let postagem = desafioModel.find(post => post.id == id);
        
    for (let i = 0; i < desafioModel.length; i++){
        if((desafioModel[i].titulo).indexOf(titulo) === -1){
            postagem.titulo = requisicao.body.titulo
            resposta.status(200).json({mensagem: `O título foi atualizado com sucesso!`})
        }else{
            resposta.status(400).json({mensagem: `O título já existe! `})
        }}}

// Atualizar postagens se a tag já existir, não atualizar
const updatePost = (requisicao, resposta) =>{
    const {id} = requisicao.params;
    let {Tags} = requisicao.body;
    const postUpdate = desafioModel.find(postagem => postagem.id == id);
    let tags = []
    let propriedades = Object.keys(requisicao.body)

    for(let i = 0; i < Tags.length; i++){
        if(tags.indexOf(Tags[i]) === -1){
            tags.push(Tags[i])
            propriedades.forEach (propriedade =>{
            postUpdate[propriedade] = requisicao.body[propriedade]
            })
            postUpdate.Tags = tags            
            resposta.status(201).json({mensagem: `Postagem atualizada!`})
        }else{
            resposta.status(400).json({mensagem: `erro!`})
        }
    }
}



//deletar postagem
const deleteByID = (request, response) =>{
    const { id } = request.params;

    let filteredList = desafioModel.filter(postagem => postagem.id != id);
    desafioModel = filteredList;
    response.json({mensagem:`O item ${id} foi excluído`})

}


module.exports = {
    getAllPosts,
    createNewPost,
    deleteByID,
    updateTitle,
    updatePost
}
