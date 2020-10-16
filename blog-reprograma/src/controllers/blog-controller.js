const postModel = require('../models/blog-models');
const helper = require('../helpers/helper');

// get de todas postagens
const obterPost = (req, res) =>{
    res.status(200).json(postModel);
}

// Obter post pelo id
// /:id
const obterIdPost = (req, res) =>{
    const { id } = req.params;
    const postagem = postModel.find(post => post.id == id);

    res.json(postagem)
}

//Criando postagens
const criarPost = (req, res) =>{
    let {dataCriacao, titulo, conteudo, tags} = req.body;

    let novoPost = {
        id: helper.obterNovoValor(postModel),
        dataCriacao: helper.novaData(postModel),
        titulo: titulo,
        conteudo: conteudo,
        tags: []
    }
    postModel.push(novoPost);

    res.status(201).json(novoPost)
}

const atualizarPost = (requisicao, resposta) =>{
    const { id } = requisicao.params;
    const filtrarPostAtualizado = postModel.filter(postagem => {
      return postagem.id == id;
    })[0];
  
    const indice =  postModel.indexOf(filtrarPostAtualizado);
  
    const obterChaves = Object.keys(requisicao.body);
  
    obterChaves.forEach(chave => {
      filtrarPostAtualizado[chave] = requisicao.body[chave];
    });
  
    postModel[indice] = filtrarPostAtualizado;
  
    resposta.status(200).json(postModel[indice]);
  
   }
  
   const atualizarTituloPost = (requisicao, resposta) => {
    const { id } = requisicao.params;
    const { titulo } = requisicao.body;
    const postagem = postModel.find(postagem => postagem.id == id);
  
    postagem.titulo = titulo;
  
    resposta.status(204).json({ mensagem: `O título foi atualizado com sucesso!`})
  
   }

const deletarPost = (req, res) =>{
    const { id } = req.params;
 
   postModel.filter(post => post.id != id);
 
    res.json({ mensagem: "Postagem deletada com sucesso!"})
  }


module.exports={
    obterPost,
    obterIdPost,
    criarPost,
    atualizarPost,
    atualizarTituloPost,
    deletarPost
}