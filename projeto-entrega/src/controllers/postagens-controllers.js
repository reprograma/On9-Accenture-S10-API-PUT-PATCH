const postagemModel = require('../models/postagens-models');
const helper = require('../helpers/helper');

const getPostagens = (requisicao, resposta) =>{
  resposta.status(200).json(postagemModel);
}

const inserirPostagem = (requisicao, resposta) => {
  let { titulo, conteudo, etiquetas } = requisicao.body;

   let novaPostagem ={
     //utilizando o helper
     id:  helper.obterNovoValor(postagemModel),
     dataCriacao: helper.novaData(postagemModel),
     titulo: titulo,
     conteudo: conteudo,
     etiquetas: etiquetas, 
     //utilizando o helper    
   }

   postagemModel.push(novaPostagem);

   resposta.status(201).json(novaPostagem);
}

const deletarPostagem = (requisicao, resposta) =>{
  const { id } = requisicao.params;

 postagemModel.filter(postagem => postagem.id != id);

  resposta.json({ mensagem: "Post deletado com sucesso!"})
}

const atualizarPostagem = (requisicao, reposta) => {
  const { id } = requisicao.params;

  const filtrarPostagemAtualizada = postagemModel.filter(postagem => {
    return postagem.id == id; })[0];

    const indice = postagemModel.indexOf(filtrarPostagemAtualizada);

    const obterChaves = Object.keys(requisicao.body);
  
    obterChaves.forEach(chave => {
      filtrarPostagemAtualizada[chave] = requisicao.body[chave];
    });
  
    postagemModel[indice] = filtrarPostagemAtualizada;
  
    resposta.status(200).json(postagemModel[indice]);
  
   }

  const atualizarTituloPostagem = (requisicao, resposta) => {
  const { id } = requisicao.params;
  const { titulo } = requisicao.body;

  const buscaTitulo = postagemModel.find(postagem =>  (postagem.titulo == titulo) ? true: false , true)

  const postagem = postagemModel.find(postagem => postagem.id == id);

  resposta.status(204).json({ mensagem: `O título foi atualizado com sucesso!`})
  }

  const atualizarTagPostagem = (requisicao, resposta) => {
    const { id } = requisicao.params;
    const { tag } = requisicao.params;
    const postagem = postagemModel.find(postagem => postagem.id == id);
    // não consegui concluir, tentar novamente.
    
    resposta.status(204).json({ mensagem: `A tag foi atualizada com sucesso!`})
  }

  
module.exports = {
  getPostagens,
  inserirPostagem,
  deletarPostagem,
  atualizarPostagem,
  atualizarTituloPostagem,
  atualizarTagPostagem
}
 