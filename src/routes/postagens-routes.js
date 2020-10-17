const express = require('express');
const postagemController = require('../controllers/postagens-controllers');
const router = express.Router();

//@route GET postagens
//@des criar postagem
//@accs publico
router.get('/postagem', postagemController.visualizarPostagens)

//@route POST postagem
//@desc criar postagem
//@accs publico
router.post('/postagem', postagemController.criarPostagem);

//@route PUT 
//@desc atualizar uma postagem
//@accs publico
router.put('/postagem/:id',postagemController.atualizarPostagem);

//@route PATCH
//@desc atualizando o titulo da postagem
//@accs publico
router.patch('/postagem/:id', postagemController.atualizarTitulo)

//@route DELETE
//@desc deletar uma postagem 
//@accs publico
router.delete('/postagem/:id', postagemController.deletarPostagem);

module.exports = router;