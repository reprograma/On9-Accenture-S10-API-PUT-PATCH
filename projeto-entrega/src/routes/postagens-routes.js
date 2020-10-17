const express = require('express');
const router = express.Router();

const postagemController = require('../controllers/postagens-controllers.js');

//@route GET postagens
//@desc Trazer todas as postagens do blog Reprograma
//@access Public
//@endpoint http://localhost:porta/postagens
router.get('/postagens', postagemController.getPostagens);


//@route POST postagens
//@desc Realizar postagens no blog Reprograma
//@access Public 
//@endpoint http://localhost:porta/tarefas
router.post('/postagens', postagemController.inserirPostagem);


//@route DELETE postagens
//@desc Deletar postagens no blog Reprograma
//@access Public
//@endpoint http://localhost:porta/postagens
router.delete('/postagens', postagemController.deletarPostagem);

//@route PATCH postagens
//@desc Atualizar postagens no blog Reprograma
//@access Public
//@endpoint http://localhost:porta/postagens
router.put('/postagens', postagemController.atualizarPostagem);

//@route PUT postagens
//@desc Atualizar titulo postagem no blog Reprograma
//@access Public
//@endpoint http://localhost:porta/postagens
router.patch('/postagens', postagemController.atualizarTituloPostagem);

//@route PUT postagens
//@desc Atualizar titulo postagem no blog Reprograma
//@access Public
//@endpoint http://localhost:porta/postagens
router.patch('/postagens', postagemController.atualizarTagPostagem);

module.exports = router; 
