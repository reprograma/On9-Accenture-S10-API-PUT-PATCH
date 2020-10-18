const helper = require('../../../projeto-tarefa/src/helpers/helper');
const postModel = require('../models/posts-models');

const getPosts = (req, res) =>{
    res.status(200).json(postModel);
}

const getPostById = (req, res) =>{
    const { id } = req.params;
    const post = postModel.find(post => post.id == id);
    res.json(post);
}

const getPostByTitle =  (req, res) => {
    const { titulo } = req.query;
    const baseDeDados = postModel.find(post => post.titulo == titulo);
  
    res.json(baseDeDados);
  
  }

  const criarPost = (req, res) => {
      let { titulo, conteudo, etiquetas } = req.body;
      
      let novoPost ={
          id: helper.obterNovoValor(postModel),
          dataCriacao: helper.novaData(postModel),
          titulo: titulo,
          conteudo: conteudo,
          etiquetas: [],
      }

      postModel.push(novoPost);

      res.status(201).send(novoPost);
  }

const atualizarPost = (req, res) =>{
 const { id } = req.params;
 const filtrarPostAtualizado = postModel.find(post => (post.id == id)
);
 const indice =  postModel.indexOf(filtrarPostAtualizado);
  
 const obterChaves = Object.keys(req.body); // pegando as chaves e valores do body q o nosso usuario digita
  
 obterChaves.forEach(chave => {
    filtrarPostAtualizado[chave] = req.body[chave];
 }); 
  
 postModel[indice] = filtrarPostAtualizado;
  
 res.status(200).json(postModel[indice]);
  
}
  

const atualizarTitulo = (req, res) => {
    const { id } = req.params;
    const { titulo } = req.body;
    const post = postModel.find(post => post.id == id);
  
    post.titulo = titulo;
  
    res.status(204).json({ mensagem: `O título foi atualizado com sucesso!`})
  
   }

  const deletePost = (req, res) =>{
    const { id } = req.params;

    postModel.filter(post => post.id != id);
 
     res.json({ mensagem: "Postagem deletada com sucesso!"})
  }


module.exports = {
    getPosts,
    getPostById,
    getPostByTitle,
    criarPost,
    atualizarPost,
    atualizarTitulo,
    deletePost,
}
   


