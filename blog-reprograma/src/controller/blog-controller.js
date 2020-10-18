const blogModel = require('../models/blog-models');
const helper = require('../helpers/blog-helpers');


//GET para verificar se as postagens foram inseridas
const checkPosts = (request, response)=>{
    response.status(200).json(blogModel)
    
};

//POST para adicionar nova postagem no blog
const createPost = (request, response)=>{
    let { titulo, conteudo, tags } = request.body;
    
    if(helper.checkTags(blogModel)){
        response.status(400).json({mensagem: `Tag existente. Favor inserir outra!`})
    }
    else { 

    let newPost = {
        id: helper.newId(blogModel),
        dataCriacao: helper.dateCreate(blogModel),
        titulo: titulo,
        conteudo: conteudo,
        tags: helper.checkTags(blogModel)
    }

    blogModel.push(newPost);

    response.status(201).json(newPost);
}
};


//PUT para atualizar postagem inteira
const updatePosts = (request, response)=>{
    const { id } = request.params;

    const filtrarPostAtualizado = blogModel.find(post=>(post.id == id));

    const indice = blogModel.indexOf(filtrarPostAtualizado);

    //esse indíce é o id passado começando a contar do 0
    const obterChaves = Object.keys(request.body);

    obterChaves.forEach(chave=>{
        filtrarPostAtualizado[chave] = request.body[chave];
    })
    blogModel[indice] = filtrarPostAtualizado;

    response.status(200).json(blogModel[indice]);
}

//PATCH para atualizar apenas o título da postagem
const updateTitlePost = (request, response)=>{
    const {id} = request.params;
    const {titulo} = request.body;
    const post = blogModel.find(post => post.id = id);

    post.titulo = titulo;

    response.status(204).json({mensagem: `O titulo foi atualizado com sucesso!`})
    
}

//PATCH para atualizar apenas as tags
const updateTags = (request, response)=>{
    const {id} = request.params;
    const{tags} = request.body;
    const postagem = blogModel.find(postagem=> postagem.id = id);

    postagem.tags = tags;

    response.status(204).json;
} 


//DELETE para remover uma postagem feita através do método POST
const removePost = (request, response)=>{
    const {id} = request.params;

    let filteredPosts = blogModel.filter(post =>{
        return post.id == id;
    })[0];
    
    const index = blogModel.indexOf(filteredPosts);

    blogModel.splice(index, 1)

    response.json(blogModel)
}

module.exports = {
    checkPosts,
    createPost,
    updatePosts,
    updateTitlePost,
    updateTags,
    removePost
}