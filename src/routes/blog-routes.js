const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blog-controllers');

/**
@route GET posts
@desc Retornar todas as posts
@access Public 
@endpoint http://localhost:porta/posts
**/
router.get('/posts', blogController.obterPost);

/**
@route GET posts/titulo
@desc Retornar apenas títulos
@access Public 
@endpoint http://localhost:8080/posts/titulo?titulo=
**/
router.get('/posts/titulo', blogController.obterTituloPost);
/**
@route GET posts/:id
@desc Retornar apenas uma única tarefa pelo seu id: identificador
@access Public 
@endpoint http://localhost:porta/posts/:id
**/
router.get('/posts/:id', blogController.obterIdPost);

/**
@route POST posts
@desc Criar uma tarefa
@access Public 
@endpoint http://localhost:porta/posts
**/
router.post('/posts', blogController.criarPost);
/**

@route PUT atrefas
@desc Atualizar posts (por completo)
@acess Public
@endpoint http://localhost:porta/posts/:id
**/
router.put("/posts/:id", blogController.atualizarPost)

/**
@route PATCH posts
@desc Atualizar somente o titulo
@access Public
@endpoint 
**/
router.patch('/posts/:id', blogController.atualizarCamposPost)

/**
@route DELETE posts
@desc Deletar uma tarefa pelo seu identificador
@access Public 
@endpoint http://localhost:porta/posts/:id
**/
router.delete('/posts/:id', blogController.deletarPost)

module.exports = router;

