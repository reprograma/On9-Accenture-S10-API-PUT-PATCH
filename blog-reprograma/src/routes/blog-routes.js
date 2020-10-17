const express = require('express')
const router = express.Router()

const postController = require('../controllers/blog-controller');

/** 
@route GET posts
@desc Retornar todos posts
@access Public
@endpoint http://localhost:porta/posts
**/
router.get('/posts', postController.obterPost);

/**
@route GET posts/:id
@desc Retornar apenas um post pelo seu id
@access Public
@endpoint http://localhost:porta/posts/:id
 **/
router.get('/posts/:id', postController.obterIdPost)

/** 
@route POST posts
@desc Criar uma postagem 
@access Public
@endpoint http://localhost:porta/posts
**/
router.post('/posts', postController.criarPost)

/**
@route PUT posts
@desc Atualizar tags posts
@access Public 
@endpoint http://localhost:porta/posts/:id
 **/
router.put('/posts/:id', postController.atualizarPost);

/**
 @route PATCH posts
 @desc Atualizar somente o título
 @access Public
 @endpoint http://localhost:porta/posts/:id
 */
 router.patch('/posts/:id', postController.atualizarTituloPost);


/**
@route DELETE postagens
@desc Deletar uma postagem pelo seu identificador
@access Public 
@endpoint http://localhost:porta/posts/:id
**/
router.delete('/posts/:id', postController.deletarPost)

module.exports = router