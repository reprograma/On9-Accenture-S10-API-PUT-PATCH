const { request } = require('express');
const express = require('express');
const router = express.Router();

const blogController = require('../controllers/blog-controllers');

//@route GET Blog
//@desc Retornar todo o blog
//@acces Public
router.get('/blog', blogController.getBlog);

//@route GET Blog
//@query Titulo
//@desc Retornar apenas títulos
//@acces Public
router.get('/blog/titulo', blogController.getByTitle);

//@route GET Blog
//@params :id
//@desc Retornar apenas uma única tarefa pelo seu id: identificador
//@acces Public
router.get('/blog/:id', blogController.getById);

//@route POST Blog
//@desc Criar um post no blog
//@access Public
//@endpoint http://localhost:porta/blog
router.post('/blog', blogController.createPost);

//@route DELETE Blog
//@desc Deletar um post no blog
//@access Public
//@endpoint http://localhost:porta/:id
router.delete('/blog/:id', blogController.deletePost);

//@route PUT tarefas
//@desc atualizar uma tarefa pelo seu identificador
//@access Public 
//@endpoint http://localhost:porta/tarefas/:id
router.put('/blog/:id', blogController.updatePost);

module.exports = router;
