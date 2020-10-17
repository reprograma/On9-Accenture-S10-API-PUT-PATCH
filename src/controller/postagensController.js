const helper = require('../helpers/helper.js');
let postagens = require('../model/postagens.js');

const getAll = (req, res) => {

    res.status(200).send(postagens);
}

const getById = (req, res) => {
    const { id } = req.params;
    findId = postagens.find(postagem => postagem.id == id);
    console.log(findId);
    res.status(200).send(findId);

}

const getByTitulo = (req, res) => {
    const titulo = req.query.titulo;
    findTitulo = postagens.find(postagem => postagem.titulo == titulo);
    res.status(200).send(findTitulo);
}
const criarPostagem = (req, res) => {
    const { titulo, conteudo, tags } = req.body;

    let novaPostagem = {
        id: helper.idIncremento(postagens),
        dataCriacao: helper.dataMomento(),
        titulo: titulo,
        conteudo: conteudo,
        tags: tags
    }


    if (helper.verificarTitulo(postagens, titulo)) {
        res.status(404).send({ mensagem: `Titulo  ja existe` });
    } else {
        postagens.push(novaPostagem);
        res.status(200).send(novaPostagem);
    }

}

const atualizarPostagem = (req, res) => {
    const { id } = req.params;
    const { titulo, conteudo, tags } = req.body;

    localizarPostagem = postagens.findIndex(postagem => postagem.id == id);

    if (localizarPostagem == -1) {
        res.status(404).send({ mensagem: `Postagem não encontrada` })
    } else {
        let novaPostagem = {
            id: parseInt(id),
            dataCriacao: helper.dataMomento(),
            titulo: titulo,
            conteudo: conteudo,
            tags: tags

        }

        if (helper.verificarTitulo(postagens, titulo)) {
            res.status(404).send({ mensagem: `Titulo ja existe, não foi possível atualizar a postagem` });
        } else {
            postagens[localizarPostagem] = novaPostagem;
            res.status(200).send(novaPostagem);

        }
    }


}

const atualizarTitulo = (req, res) => {
    const { id } = req.params;
    const { titulo } = req.body;

    const localizarPostagem = postagens.find(postagem => postagem.id == id);

    if (localizarPostagem == null) {
        res.status(404).send({ mensagem: `Postagem não encontrada` })
    } else {

        if (helper.verificarTitulo(postagens, titulo)) {
            res.status(400).send({ mensagem: `Já existe postagem com esse titulo` })
        } else {
            localizarPostagem.titulo = titulo
            res.status(200).send({ mensagem: `Titulo atualizado` });
        }
    }
}

const deletarPostagem = (req, res) => {
    const { id } = req.params;
    localizarPostagem = postagens.findIndex(postagem => postagem.id == id);

    if (localizarPostagem == -1) {
        res.status(404).send({ mensagem: `Postagem não encontrado` })
    } else {
        postagens.splice(localizarPostagem, 1)
        res.status(200).send({ mensagem: `Postagem deletada com sucesso` })
    }
}

module.exports = {
    getAll,
    getById,
    getByTitulo,
    criarPostagem,
    atualizarPostagem,
    atualizarTitulo,
    deletarPostagem
}