let postagemModel = require('../models/postagens-models');
const helper = require('../helpers/helper');
const postagem = require('../models/postagens-models');

const obterPostagens = (requisicao, resposta) =>{
  resposta.status(200).json(postagemModel);
}


/* -----------------------POST--------------------------- */

// podem utilizar o getById
//www.reprograma.com.br/perfil/:id
const obterIdPostagem =  (requisicao, resposta) =>{
  const { id } = requisicao.params;
  const postagem = postagemModel.find(postagem => postagem.id == id);

  resposta.json(postagem);

}

// getByTitle
// resquest, response
//req, res
//www.reprograma.com.br/titulo?titulo=Ler
const obterTituloPostagem =  (requisicao, resposta) => {
  const { titulo } = requisicao.query;
  const postagem = postagemModel.find(postagem => postagem.titulo == titulo);

  resposta.json(postagem);

}

const criarPostagem = (requisicao, resposta) =>{
   const { titulo, descricao, prazo, responsavel } = requisicao.body;
   
   const novaPostagem ={
     id:  helper.obterNovoValor(postagemModel),
     titulo: titulo,
     descricao: descricao,
     prazo: prazo, 
     responsavel: responsavel, 
     dataCriacao: helper.novaData(postagemModel)
   }

   postagemModel.push(novaPostagem);

   resposta.status(201).json(novaPostagem);
 }

/* ----------------------------PUT------------------------------ */

//updatePostagem
//req, res
//request, response

 const atualizarPostagem = (requisicao, resposta) =>{
  const { id } = requisicao.params;
  const filtrarPostagemAtualizada = postagemModel.filter(postagem => {
    return postagem.id == id;
  })[0];

  const indice =  postagemModel.indexOf(filtrarPostagemAtualizada);

  const obterChaves = Object.keys(requisicao.body);

  obterChaves.forEach(chave => {
    filtrarPostagemAtualizada[chave] = requisicao.body[chave];
  });

  postagemModel[indice] = filtrarPostagemAtualizada;

  resposta.status(200).json(postagemModel[indice]);

 }

 /* -----------------------------PATCH--------------------------- */

 const atualizarCamposPostagem = (requisicao, resposta) => {
  const { id } = requisicao.params;
  const { titulo } = requisicao.body;
  const postagem = postagemModel.find(postagem => postagem.id == id);

  postagem.titulo = titulo;

  resposta.status(204).json({ mensagem: `O título foi atualizado com sucesso!`})

 }
 
/* --------------------------DELETE--------------------------------------- */

 const deletarPostagem = (requisicao, resposta) =>{
   const { id } = requisicao.params;
    const filtrarPostagem = postagemModel.filter(postagem => {
    return postagem.id == id;
    })[0];

    const index = postagemModel.indexOf(filtrarPostagem);

    postagemModel.splice(index, 1)

    resposta.json(postagemModel)
 }


module.exports ={
  obterPostagens,
  obterIdPostagem,
  obterTituloPostagem, 
  criarPostagem,
  atualizarPostagem,
  atualizarCamposPostagem,
  deletarPostagem
}