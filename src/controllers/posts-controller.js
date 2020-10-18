const postModel = require("../models/posts-models");
const helper = require("../helpers/helper");

const obterPosts = (requisicao, resposta) => {
  resposta.status(200).json(postModel);
};

const obterIdPost = (requisicao, resposta) => {
  const { id } = requisicao.params;
  const post = postModel.find((post) => post.id == id);

  resposta.json(post);
};

// getByTitle
// resquest, response
//req, res
//www.reprograma.com.br/titulo?titulo=Ler
const obterTituloPost = (requisicao, resposta) => {
  const { titulo } = requisicao.query;
  const baseDeDados = postModel.find((post) => post.titulo == titulo);

  resposta.json(baseDeDados);
};

//método post
const criarPost = (requisicao, resposta) => {
  const { titulo, conteudo, etiqueta } = requisicao.body;

  if (helper.verificarTituloExiste(postModel, titulo)) {
    resposta
      .status(400)
      .json({ mensagem: "Esse título já existe! Por favor digite outro." });
  } else {
    const novoPost = {
      //utilizando o helper
      id: helper.obterNovoValor(postModel),
      //utilizando o helper
      titulo: helper.verificarTituloExiste(postModel),
      conteudo: conteudo,
      //utilizando o helper
      etiqueta: etiqueta,
      //utilizando o helper
      dataCriacao: helper.novaData(postModel),
    };

    postModel.push(novoPost);
    resposta.status(201).json(novoPost);
  }
};

const atualizarPost = (requisicao, resposta) => {
  const { id } = requisicao.params;
  const filtrarPostAtualizado = postModel.filter((post) => {
    return post.id == id;
  })[0];

  //index
  const indice = postModel.indexOf(filtrarPostAtualizado);
  //['titulo', 'descricao']

  obterChave.array.forEach((chave) => {
    filtrarPostAtualizado[chave] = requisicao.body[chave];
  });
  postModel[indice] = filtrarPostAtualizado;

  resposta.status(200).json(postModel[indice]);
};

const atualizarTitulo = (requisicao, resposta) => {
  const { id } = requisicao.params;
  const obterChaves = Object.keys(requisicao.body); //pega as chaves do body

  //pega o post que vai ser atualizado
  const filtrarPostAtualizado = postModel.filter((post) => {
    return post.id == id;
  })[0];

  //verifica se tem algum post com o número digitado e seleciona ele
  const buscarPorTitulo = helper.verificarTituloExiste(
    postsModel,
    requisicao.body["titulo"]
  );
  if (buscarPorTitulo && filtrarPostAtualizado.id != buscarPorTitulo.id) {
    resposta
      .status(400)
      .json({ mensagem: "Esse título já existe! Por favor adicione outro." });
  } else {
    const index = postsModel.indexOf(filtrarPostAtualizado);

    obterChaves.forEach((chave) => {
      filtrarPostAtualizado[chave] = requisicao.body[chave];
    });

    postsModel[index] = filtrarPostAtualizado;
  }
  resposta.status(200).json(postsModel[index]);
};

const atualizarEtiquetaPost = (requisicao, resposta) => {
  const { id } = requisicao.params;
  const { etiqueta } = requisicao.body;
  if (helper.verificarEtiquetaExiste(postModel, etiqueta)) {
    resposta.status(400).json({ mensagem: "Essa etiqueta já existe!" });
  } else {
    const post = postsModel.find((post) => post.id == id);

    post.etiqueta = etiqueta;
  }
  resposta.status(200).json(post);
};

const deletarPost = (requisicao, resposta) => {
  const { id } = requisicao.params;

  let postsFiltrados = postModel.filter((post) => {
    return post.id == id;
  })[0];

  const index = postModel.indexOf(postsFiltrados);

  postModel.splice(index, 1);

  resposta.json(postModel);
};

module.exports = {
  obterPosts,
  obterIdPost,
  obterTituloPost,
  criarPost,
  atualizarPost,
  atualizarTitulo,
  atualizarEtiquetaPost,
  deletarPost,
};
