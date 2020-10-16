const postagemBlog =  require("../models/blog-models");
const helpers = require("../helpers/helpers")


const getBlog = (req,res) =>{
    res.status(200).json(postagemBlog)
}

const atualizarBlog = (req,res) =>{
    const {id} = req.params
    const filtrarBlogAtualizada = postagemBlog.find(postagens => postagens.id == id)

const indice = postagemBlog.indexOf(filtrarBlogAtualizada);

const obterChaves = Object.keys(req.body);

obterChaves.forEach(chave=>{
    filtrarBlogAtualizada[chave]= req.body[chave]
    
});

postagemBlog[indice] = filtrarBlogAtualizada;

res.status(200).json(postagemBlog[indice]);

}

const atualizarTituloBlog = (req,res) => {
    const id = req.params.id
    const titulo = req.body.titulo 

    const postagens = postagemBlog.find(postagens => postagens.id == id);

    postagens.titulo = titulo;

    res.status(200).json({mensagem:"Titulo atualizado com sucesso"})


}

const atualizarTagsBlog = (req,res) => {
    const id = req.params.id
    const etiquetas = req.body.etiquetas 

    const postagens = postagemBlog.find(postagens => postagens.id == id);

    const index = postagemBlog.indexOf(postagens);

    postagens.etiquetas = [etiquetas];

    postagemBlog[index] = postagens;

    res.status(200).json({mensagem:"Tag atualizado com sucesso"})


}





module.exports = {
    getBlog,
    atualizarBlog,
    atualizarTituloBlog,
    atualizarTagsBlog
}