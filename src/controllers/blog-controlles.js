const blogModel = require('../models/blog-models');
const helper = require('../helpers/helpers');

//Get para verificar
const obterTarefaBlog = (requisicao, resposta) =>{
    resposta.status(200).json(blogModel);
}


//Post para atulizar e criar nova postagem
const criarBlog = (requisicao, resposta) =>{
    let { titulo, conteudo, etiquetas, } = requisicao.body;
    let novoPost ={
    // Utilizando o helper
    id: helper.blogId(blogModel),
    dataCriacao: helper.novaData(blogModel),
    titulo: titulo,
    conteudo: conteudo,
    etiquetas: etiquetas,

    }

    blogModel.push(novoPost);

    resposta.status(201).json(novoPost);

}
//
const atualizarBlog = (requisicao, resposta) =>{
    const { id } = requisicao.params;
    const filtrarAtualizacaoBlog = blogModel.filter(tarefa => {
        return tarefa.id == id;
    })[0];

    const indice = blogModel.indexOf(filtrarAtualizacaoBlog);

    const obterTarefaBlog = Object.keys(requisicao.body);

    obterTarefaBlog.forEach(chave => {
        filtrarAtualizacaoBlog[chave] = requisicao.body[chave];

    });

    blogModel[indice] = filtrarAtualizacaoBlog;
    resposta.status(200).json(blogModel[indice]);

}

//PATCH aplica uma atualização parcial
const atualizarCamposBlog = (requisicao, resposta) =>{
    const { id } = requisicao.params;
    const { titulo } = requisicao.body;
    const blog = blogModel.find(blog => blog.id == id);

    blog.titulo = titulo;


    resposta.status(200).json(blog)
}

//DELETE para remover uma postagem feita pelo POST
const deletarBlog = (requisicao, resposta) =>{
    const { id } = requisicao.params;

    blogModel.filter(tarefa => tarefa.id != id);

    resposta.json({mensagem: "Blog deletado com sucesso!"})
}


module.exports ={
    obterTarefaBlog,
    criarBlog,
    deletarBlog,
    atualizarBlog,
    atualizarCamposBlog,
}

