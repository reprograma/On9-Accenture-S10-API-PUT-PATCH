const express = require('express');
const router = express.Router();

const desafioController = require("../controllers/desafio-controller")

/*
@route GET postagens
@desc Retornar todas as postagens cadastrados em models
@acess Public
@endpoint http://localhost:porta/postagens
*/

router.get('/postagens', desafioController.getAllPosts);

/*
@route POST postagens
@desc Criar uma nova postagem 
@acess Public
@endpoint http://localhost:porta/postagens
*/
router.post('/postagens', desafioController.createNewPost);

//@route PATCH Postagens
//@desc Atualizar título de uma postagem
//@access Public
//@endpoint http://localhost:porta/postagens/id
router.patch('/postagens/:id', desafioController.updateTitle);

//@route PUT Postagens
//@desc Atualizar uma postagem
//@access Public
//@endpoint http://localhost:porta/postagens/id
router.put('/postagens/:id', desafioController.updatePost);

/*
@route DELETE postagens
@desc Deletar alguma postagem usando o ID
@acess Public
@endpoint http://localhost:porta/postagens
*/
router.delete('/postagens/:id', desafioController.deleteByID);



module.exports = router; 