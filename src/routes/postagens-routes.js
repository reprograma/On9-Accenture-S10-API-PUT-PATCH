const express = require("express");
const router = express.Router();
const postagemController = require("../controllers/postagens-controllers");

/** 
@route GET postagens
@desc Retornar todas as postagens
@access Public 
@endpoint http://localhost:porta/postagens
**/
router.get("/postagens", postagemController.todasPostagens);

/**
@route GET postagens/titulo
@desc Retornar apenas postagens pelo titulo
@access Public 
@endpoint http://localhost:porta/postagens/titulo
**/
router.get("/postagens/titulo", postagemController.getByTitle);

/**
@route POST postagens
@desc Criar uma postagem
@access Public 
@endpoint http://localhost:porta/postagens
**/
router.post("/postagens", postagemController.criarPostagem);

/**
@route PUT postagens
@desc Atualizar uma postagem
@access Public
@endpoint http://localhost:porta/postagens/:id
**/
router.put("/postagens/:id", postagemController.atualizarPostagem);

/**
 @route PATCH postagens
 @desc Atualizar somente o titulo
 @access Public
 @endpoint http://localhost:porta/postagens/:id
 **/
router.patch('/postagens/:id', postagemController.atualizarTituloPostagem);

/**
 @route PATCH postagens
 @desc Atualizar somente a tag
 @access Public
 @endpoint http://localhost:porta/postagens/:id
 **/
router.patch('/postagens/:id', postagemController.atualizarTagPostagem);

/**
@route DELETE postagens
@desc Deletar uma postagem pelo seu id
@access Public 
@endpoint http://localhost:porta/postagens/:id
**/
router.delete('/postagens/:id', postagemController.deletarPostagem);

module.exports = router;