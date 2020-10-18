const express = require('express');
const router = express.Router();
const postagemController = require('../controllers/postagens-controller');

/**
@route GET postagens
@desc Retornar todas as postagens
@access Public 
@endpoint http://localhost:porta/postagens/
**/
router.get('/postagens', postagemController.obterPostagens);

/**
@route GET postagens/titulo
@desc Retornar apenas títulos
@access Public 
@endpoint http://localhost:porta/postagens/titulo
**/
router.get('/postagens/titulo', postagemController.obterTituloPostagem);
/**
@route GET postagem/:id
@desc Retornar apenas uma única postagem pelo seu id: identificador
@access Public 
@endpoint http://localhost:porta/postagens/:id
**/
router.get('/postagens/:id', postagemController.obterIdPostagem);

/**
@route POST postagem
@desc Criar uma postagem
@access Public 
@endpoint http://localhost:porta/postagens
**/
router.post('/postagens', postagemController.criarPostagem);

/**
@route PUT postagens
@desc Atualizar postagens
@access Public 
@endpoint http://localhost:porta/postagens/:id
 **/
router.put('/postagens/:id', postagemController.atualizarPostagem);

/**
 @route PATCH postagens
 @desc Atualizar somente o título
 @access Public
 @endpoint http://localhost:porta/postagens/:id
 */
 router.patch('/postagens/:id', postagemController.atualizarCamposPostagem);

/**
@route DELETE postagens
@desc Deletar uma postagem pelo seu identificador
@access Public 
@endpoint http://localhost:porta/postagens/:id
**/
router.delete('/postagens/:id', postagemController.deletarPostagem);



module.exports = router;