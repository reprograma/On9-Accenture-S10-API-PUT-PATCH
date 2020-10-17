let postsModels = require('../models/posts-models');
const helper = require('../helpers/posts-helpers');

let statusCode = 200;
let message;

/*=======PUT=======*/

const updatePost = function (request, response) {

    const id = request.params.id;
    const selectedPost = postsModels.find(post => post.id == id)
    const index = postsModels.indexOf(selectedPost);
    const atributos = Object.keys(request.body);

    atributos.forEach(atributo => {

        if (helper.isAnArray(selectedPost[atributo])) {

            const tagRepetida = helper.findTheTag(selectedPost[atributo], request.body[atributo])

            if (tagRepetida) {
                statusCode = 401;
                message = `Tag já existente! Não foi possível atualizar a postagem.`
            } else {
                selectedPost[atributo].push(request.body[atributo]);
                message = postsModels
            }

        } else {
            selectedPost[atributo] = request.body[atributo];
            message = postsModels
        }
    });

    postsModels[index] = selectedPost
    response.status(statusCode).json({ mensagem: message })
}

/*=======PATCH=======*/

const partialUpdate = function (request, response) {
    const { id } = request.params;
    let newTitle = request.body.titulo;
    const selectedPost = postsModels.find(post => post.id == id);
    const index = postsModels.indexOf(selectedPost);
    const sameTitle = helper.checkTitle(selectedPost.titulo, newTitle);


    if (!sameTitle) {
        selectedPost.titulo = newTitle;
        message = selectedPost;
    } else {
        statusCode = 401;
        message = `O título é igual ao anterior. Não foi possível atualizar a postagem`;
    }
    response.status(statusCode).json({ mensagem: message })

}

module.exports = {
    updatePost,
    partialUpdate    
}