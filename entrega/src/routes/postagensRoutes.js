const controller = require('../controllers/postagensController.js');
const express = require('express');
const router = express.Router();

/*
@route GET postagens
@desc Retornar todas as postagens
@access Public 
@endpoint http://localhost:porta/postagens
*/

router.get('/', controller.getAll);

/*
@route GET titulo
@desc Retornar postagens por título
@access Public 
@endpoint http://localhost:porta/postagens/titulo?titulo=
*/

router.get('/titulo', controller.getByTitulo);

/*
@route GET postagens/:id
@desc Retornar apenas uma única postagem pelo seu id: identificador
@access Public 
@endpoint http://localhost:porta/postagens/:id
*/

router.get('/:id', controller.getById);

/*
@route POST postagens
@desc Criar uma nova postagem
@acess Public
@endpoint http://localhost:porta/postagens/criar
*/

router.post('/criar', controller.criarPostagem);

/*
@route PUT postagens
@desc Atualizar uma postagem pelo id
@acess Public
@endpoint http://localhost:porta/postagens/atualizar
*/

router.put('/atualizar/:id', controller.atualizarPostagem);

/*
@route PACH postagens
@desc Atualizar um campo de uma postagem pelo id
@acess Public
@endpoint http://localhost:porta/postagens/atualizarcampo:id
*/

router.patch('/atualizarcampo/:id', controller.atualizarCampoPostagem);

/*
@route DELETE postagens
@desc deleta uma postagem pelo id
@acess Public
@http://localhost:porta/postagens/:id
*/

router.delete('/deletar/:id', controller.deletarPostagem);

module.exports = router;