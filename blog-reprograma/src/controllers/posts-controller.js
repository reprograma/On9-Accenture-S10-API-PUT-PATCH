const postsModels = require("../models/posts-models");
const helper = require("../helpers/helper");
const posts = require("../models/posts-models");

//GET
const obterPosts = (requisicao, resposta) => {
  resposta.status(200).json(postsModels);
};

//GET
const obterIdPosts = (requisicao, resposta) => {
  const { id } = requisicao.params;
  const post = postsModels.find((post) => post.id == id);

  resposta.json(post);
};

//GET
const obterTituloPost = (requisicao, resposta) => {
  const { titulo } = requisicao.query;
  const baseDeDados = postsModels.find((post) => post.titulo == titulo);

  resposta.json(baseDeDados);
};

//POST
const criarPost = (requisicao, resposta) => {
  let { titulo, conteudo, etiquetas } = requisicao.body;

  let novasEtiquetas = [];
  let repetidas = false;

  //se a tag não existir, ele faz um push
  etiquetas.forEach((etiqueta) => {
    if (!novasEtiquetas.includes(etiqueta)) {
      novasEtiquetas.push(etiqueta);
    } else {
      //se não, ele muda o valor de repetidas para true
      repetidas = true;
    }
  });

  //se repetidas for true, manda uma bad request
  if (repetidas) {
    resposta
      .status(400)
      .json({ mensagem: "Não é possível inserir tags repetidas!" });
    return;
  }

  let novoPost = {
    id: helper.obterNovoValor(postsModels),
    dataCriacao: helper.novaData(postsModels),
    titulo: titulo,
    conteudo: conteudo,
    etiquetas: etiquetas,
  };

  postsModels.push(novoPost);

  resposta.status(201).json(novoPost);
};

//PUT
const atualizarPostagem = (requisicao, resposta) => {
  const { id } = requisicao.params;
  const { titulo, conteudo, etiquetas } = requisicao.body;
  const obterChaves = Object.keys(requisicao.body);

  //pegar a postagem que será atualizada
  const filtrarPostagem = postsModels.filter((post) => {
    return post.id == id;
  })[0];

  const index = postsModels.indexOf(filtrarPostagem);

  let novasEtiquetas = [];
  let repetidas = false;

  //se a tag não existir, ele faz um push
  etiquetas.forEach((etiqueta) => {
    if (!novasEtiquetas.includes(etiqueta)) {
      novasEtiquetas.push(etiqueta);
    } else {
      //se não, ele muda o valor de repetidas para true
      repetidas = true;
    }
  });

  //se repetidas for true, manda uma bad request
  if (repetidas) {
    resposta
      .status(400)
      .json({ mensagem: "Não é possível inserir tags repetidas!" });
    return;
  }

  //se repetidas for false, ele atribui os novos valores
  //inseridos no body
  filtrarPostagem.titulo = titulo;
  filtrarPostagem.conteudo = conteudo;
  filtrarPostagem.etiquetas = novasEtiquetas;

  postsModels[index] = filtrarPostagem;
  resposta.status(200).json(postsModels[index]);
};

//PATCH
const atualizarTitulo = (requisicao, resposta) => {
  const { id } = requisicao.params;
  const { titulo } = requisicao.body;

  const post = postsModels.find((post) => post.id == id);

  if (helper.verificarTitulo(postsModels, titulo) == undefined) {
    post.titulo = titulo;
    resposta.status(200).json(post);
  } else {
    resposta
      .status(400)
      .json({ mensagem: "Não é possível inserir títulos repetidos!" });
  }
};

//DELETE
const deletarPost = (requisicao, resposta) => {
  const { id } = requisicao.params;

  const resultadoDelete = postsModels.filter((post) => post.id != id);

  resposta.json(resultadoDelete);
};

module.exports = {
  obterPosts,
  obterIdPosts,
  obterTituloPost,
  criarPost,
  atualizarPostagem,
  atualizarTitulo,
  deletarPost,
};
