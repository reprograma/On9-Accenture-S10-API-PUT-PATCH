const postModel = require("../models/posts-models");
const helper = require("../helpers/helper");

// GET: Return all posts
const getAll = (req, res) => {
  res.status(200).json(postModel); // Retorna todas as postagens presentes no models
};

// GET: Return a post by id
const getById = (req, res) => {
  const { id } = req.params; // Pega o id passado pelo usuário na rota
  res.status(200).json(postModel.find((post) => post.id == id)); // Pega a postagem pelo seu id e retorna ela
};

// POST: Create a post INCOMPLETO (Na hora da criação da postagem, não podem existir etiquetas (tags) iguais.)
const createPost = (req, res) => {
  let { title, content, tag } = req.body; // Pegando o que é passado pelo usuário no body

  postModel.forEach((post) => {
    let tagList = post.tag;

    for (item of tagList) {
      const searchByTag = helper.checkTag(postModel, req.body["tag"]);
      if (item.includes(searchByTag) == post.tag.includes(item)) {
        res.status(400).json({ mensagem: `Essa tag já existe! Por favor, digite uma tag diferente para criar a postagem.` });
      } else {
        let newPost = {
          //using helper
          id: helper.getNewValue(postModel),
          creationDate: helper.newDate(postModel),
          title: title,
          content: content,
          tag: tag,
        };

        postModel.push(newPost); // Adicionando a nova postagem
        res.status(201).json(newPost); // Retornando a nova postagem
      }
    }
  });
};

// PUT: Update a post INCOMPLETO (Ao atualizar a postagem, se a etiqueta já existir, não atualizar.)
const updatePost = (req, res) => {
  const { id } = req.params; // Pega o id passado pelo usuário na rota
  const getKeys = Object.keys(req.body); // Pega as chaves que serão inseridas pelo usuário no postman

  // Pega a postagem que será atualizada
  const findPostUpdate = postModel.find((post) => post.id == id);

  // Verifica se tem alguma postagem com a tag digitada e seleciona ela
  const searchByTag = helper.checkTag(postModel, req.body["tag"]);
  if (searchByTag && findPostUpdate.id != searchByTag.id) {
    res.status(400).json({ mensagem: `Essa tag já existe! Não será possível atualizar a postagem.` });
  } else {
    const index = postModel.indexOf(findPostUpdate);

    // Para cada chave da postagem que será atualizada é atribuída a chave passada no body
    getKeys.forEach((key) => {
      findPostUpdate[key] = req.body[key];
    });

    // Atribuindo a postagem que foi atualizada ao índice da postagem do model
    postModel[index] = findPostUpdate;
    res.status(200).json(postModel[index]); // Retorna a postagem que foi atualizada
  }
};

// PATCH: Update post's title (Ao atualizar o título, não pode existir outro título igual.)
const updateTitle = (req, res) => {
  const { id } = req.params; // Pega o id passado pelo usuário na rota
  const getKeys = Object.keys(req.body); // Pega as chaves passadas pelo usuário no body da requisição, nesse caso o título
  const findPost = postModel.find((post) => post.id == id); // Pega a postagem que será atualizada pelo seu id

  // Pesquisa se existe alguma postagem com o título digitado e seleciona ela
  const searchByTitle = helper.checkTitle(postModel, req.body["title"]);

  // console.log(searchByTitle) // Quando coloco um título que já existe ele me retorna no terminal o objeto que contém o título digitado, se eu colocar um título diferente ele me retorna undefined
  if (searchByTitle && findPost.id != searchByTitle.id) {
    res.status(400).json({ mensagem: `Esse título já existe!` });
  } else {
    const index = postModel.indexOf(findPost); // Retorna o índice da postagem filtrada dentro do models
    // console.log(index)

    // Para cada chave da postagem que será atualizada é atribuída a chave passada no body
    getKeys.forEach((key) => {
      findPost[key] = req.body[key];
    });

    // Atribuindo a postagem que foi atualizada ao índice da postagem do model
    postModel[index] = findPost;
    // console.log(postModel[index])
    res.status(200).json(postModel[index]); // Retorna a postagem que teve seu título atualizado
  }
};

// PATCH: Update post's tag
const updateTag = (req, res) => {
  const { id } = req.params; // Pega o id passado pelo usuário na rota
  const getKeys = Object.keys(req.body); // Pega as chaves passadas pelo usuário no body da requisição, nesse caso a tag
  const findPost = postModel.find((post) => post.id == id); // Pega a postagem que terá sua tag atualizada pelo seu id

  const index = postModel.indexOf(findPost); // Retorna o índice da postagem filtrada dentro do models

  // Para cada chave da postagem que terá sua tag atualizada é atribuída a chave (alteração) passada no body pelo usuário
  getKeys.forEach((key) => {
    findPost[key] = req.body[key];
  });

  // Atribuindo a postagem que teve sua tag atualizada ao índice da postagem do model
  postModel[index] = findPost;
  res.status(200).json(postModel[index]); // Retorna a postagem que foi teve sua tag atualizada
};

// DELETE: Delete a post
const deletePost = (req, res) => {
  const { id } = req.params; // Pega o id passado pelo usuário na rota
  const postIndex = postModel.findIndex((post) => post.id == id); // Retorna o índice no array do primeiro elemento que satisfizer a função

  postModel.splice(postIndex, 1); // Remove do models o índice (postagem) encontrado
  res.status(200).json(postModel); // Retorna o models já sem a postagem deletada
};

module.exports = {
  getAll,
  getById,
  createPost,
  updatePost,
  updateTitle,
  updateTag,
  deletePost,
};
