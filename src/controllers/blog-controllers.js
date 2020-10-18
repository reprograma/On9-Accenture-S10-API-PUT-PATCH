const blogModel = require('../models/blog-models');
const helper = require('../helpers/helper');

const obterPost = (requisicao, resposta) => {
  resposta.status(200).json(blogModel);
}

const obterIdPost = (requisicao, resposta) => {
  const { id } = requisicao.params;
  const post = blogModel.find(post => post.id == id);

  resposta.json(post);

}

const obterTituloPost = (requisicao, resposta) => {
  const { titulo } = requisicao.query;
  const baseDeDados = blogModel.find(post => post.titulo == titulo);

  resposta.json(baseDeDados);

}

const criarPost = (requisicao, resposta) => {
  //  const tarefaId = blogModel.map(tarefa => tarefa.id);
  //  let ordermCriacaoNum = blogModel.map(tarefa => tarefa.ordem_criacao);

  //  const novoId = tarefaId.length > 0 ? Math.max.apply(Math, tarefaId) + 1 : 1;

  const { titulo, conteudo, tag } = requisicao.body;



  if (helper.verificarTitulo(blogModel, titulo)) {
    resposta.status(400).json({ mensagem: "Esse título já existe" });
  } else {
    const novoPost = {
      id: helper.obterNovoValor(blogModel),//utilizando o helper
      dataCriacao: helper.novaData(blogModel),//utilizando o helper
      titulo: titulo,
      conteudo: conteudo,
      tag: [tag]
    }

    blogModel.push(novoPost);

    resposta.status(201).json(novoPost);
  }
}

const deletarPost = (requisicao, resposta) => {
  const { id } = requisicao.params;

  let postFiltrado = blogModel.filter(postagem => {
    return postagem.id == id;
  })[0];

  const index = blogModel.indexOf(postFiltrado);

  blogModel.splice(index, 1)

  resposta.json(blogModel)
}

const atualizarPost = (requisicao, resposta) => {
  const { id } = requisicao.params;
  const filtrarPostAtualizado = blogModel.filter(post => {
    return post.id == id;
  })[0];

  //index
  const indice = blogModel.indexOf(filtrarPostAtualizado);

  // keys, getKeys
  const obterChaves = Object.keys(requisicao.body);
  //['titulo', 'descricao']

  obterChaves.forEach(chave => {
    filtrarPostAtualizado[chave] = requisicao.body[chave];
  })

  blogModel[indice] = filtrarPostAtualizado;

  resposta.status(200).json(blogModel[indice]);

}

const atualizarCamposPost = (requisicao, resposta) => {
  const { id } = requisicao.params;
  const { titulo, tags } = requisicao.body;

  const postTitulo = blogModel.find(post => post.id == id);

  postTitulo.titulo = titulo;
  postTitulo.tags = tags;


  resposta.status(200).json({ mensagem: "os campos foram atualizados com sucesso" })


}

module.exports = {
  obterPost,
  obterIdPost,
  obterTituloPost,
  criarPost,
  deletarPost,
  atualizarPost,
  atualizarCamposPost
}