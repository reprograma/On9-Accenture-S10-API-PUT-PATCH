const postagemModel = require('../models/postagens-models');
const helper = require('../helpers/helper');
const { response } = require('../app');

/* Ver lista de postagens */
const getPostagens = (requisicao, resposta) =>{
    resposta.status(200).json(postagemModel)
}

/* Criar Postagens excluindo as repetições de tags */
const criarPostagens = (requisicao, resposta) =>{
    let {titulo, conteúdo, Tags} = requisicao.body;
    let tagsUnicas = []
    let len = Tags.length
    
    for(let i = 0; i < len; i++){
        if(tagsUnicas.indexOf(Tags[i]) === -1){
        tagsUnicas.push(Tags[i])
        }else{
            resposta.status(400).json({mensagem: `Não é possível repetir tag dentro de uma mesma publicação!`})
        }}
        
    const novaPostagem = {
        id : helper.novoId(postagemModel),
        dataCriacao : helper.novaData(postagemModel),
        titulo : titulo,
        conteúdo : conteúdo,
        Tags: tagsUnicas,
    }

    postagemModel.push(novaPostagem);
    resposta.status(201).json(novaPostagem)
}

/* Atualizar Postagens excluindo as repetições de tags */
const atualizarPostagens = (requisicao, resposta) =>{
    const {id} = requisicao.params;
    let {Tags} = requisicao.body;
    const postagemParaAtualizar = postagemModel.find(postagem => postagem.id == id);
    let tagsUnicas = []
    let len = Tags.length
    let propriedades = Object.keys(requisicao.body)
 
    for(let i = 0; i < len; i++){
        if(tagsUnicas.indexOf(Tags[i]) === -1){
            tagsUnicas.push(Tags[i])
            propriedades.forEach (propriedade =>{
            postagemParaAtualizar[propriedade] = requisicao.body[propriedade]
            })
            postagemParaAtualizar.Tags = tagsUnicas            
            resposta.status(201).json({mensagem: `Postagem atualizada, excluindo, caso necessário, as repetições de tags!`})
        }else{
            resposta.status(400).json({mensagem: `erro!`})
        }
    }
}


/* Atualizar por Título */
const atualizarTitulo = (requisicao, resposta) =>{
    const {id} = requisicao.params;
    const {titulo} = requisicao.params;
    const len = postagemModel.length
    let postagem = postagemModel.find(post => post.id == id);


    for (let i = 0; i < len; i++){
        if((postagemModel[i].titulo).indexOf(titulo) === -1){
            postagem.titulo = requisicao.body.titulo
            resposta.status(200).json({mensagem: `O título foi atualizado com sucesso! :D`})
        }else{
            resposta.status(400).json({mensagem: `Não é possível utilizar um título que já existe em outra publicação!`})
        }
    }
}

/* Deletar Postagens */
const deletarPostagens = (requisicao, resposta) =>{
    const {id} = requisicao.params;
    const postagemDesajada = postagemModel.find(post => post.id == id)
    let posicao = postagemModel.indexOf(postagemDesajada)
    resposta.send(postagemModel.splice(posicao, 1))
}


module.exports = {
    getPostagens,
    criarPostagens,
    atualizarPostagens,
    atualizarTitulo,
    deletarPostagens,    
}