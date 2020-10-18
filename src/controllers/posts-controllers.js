const postsModels = require("../models/posts-models");
const helper = require("../helpers/helper");

const getAllPosts = (req, res) => {
    res.status(200).json(postsModels);
}

const createPost = (req, res) => {
    const { title, content, tags } = req.body;

    let newPost = {
        id: helper.getNewId(postsModels),
        dataCreation: helper.newDate(postsModels),
        title: title,
        content: content,
        tags: tags,
    }

    if (newPost.tags == postsModels.tags) {
        console.log('A devida postagem já existe!')
    } else {
        postsModels.push(newPost);
    }

    res.status(201).json(newPost);
}


const updatePost = (req, res) => {
    const id = req.params.id;
    const selectPost = postsModels.find(post => post.id == id);
    const index = postsModels.indexOf(selectPost);
    const getKeys = Object.keys(req.body);

    getKeys.forEach(key => {
        selectPost[key] = req.body[key];
    })

    postsModels[index] = selectPost;

    res.status(200).json(postsModels[index]);
}


const updateFieldPost = (req, res) => {
    const { id } = req.params;
    let { newTitle } = req.body;
    const post = postsModels.find(post => post.id == id);

    if (post.title == postsModels.title) {
        console.log('O devido titulo já existe!')
    } else {
        post.newTitle = newTitle;
    }


    res.status(204).json({ message: `O titulo ${newTitle} foi atualizado com sucesso!`})

}

const deletePost = (req, res) => {
    const { id } = req.params;

    postsModels.filter(post => post.id != id);

    res.json({ mensagem: `Post de id:${id} deletado com sucesso`});
}

module.exports = {
    getAllPosts,
    createPost,
    updatePost,
    updateFieldPost,
    deletePost
}