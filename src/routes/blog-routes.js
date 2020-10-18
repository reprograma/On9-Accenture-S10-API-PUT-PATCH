const blogController = require('../controllers/blog-controlles');
const express = require('express');
const router = express.Router();


//route POST tarefas
//desc Criar uma tarefa
//access Public 
//endpoint http://localhost:porta/blog
router.get('/todas', blogController.obterTarefaBlog);

//route POST postagens
//desc Criar uma nova postagem no blog
//access Public 
//endpoint http://localhost:porta/todas/criar
router.post('/blog', blogController.criarBlog);

//route PUT tarefas
//desc Atualizar tarefas
//access Public 
//endpoint http://localhost:porta/tarefas/:id
router.put('/blog/:id', blogController.atualizarBlog)

//router PATCH atualizar 
//desc atualiza "nova postagem"
//acess Public
//endpointhttp://localhost:porta/agenda/:id
router.patch('/blog/:id', blogController.atualizarCamposBlog);

//route DELETE tarefas
//desc Deletar uma tarefa pelo seu identificador
//access Public 
//endpoint http://localhost:porta/blog/:id
router.delete('/blog/:id', blogController.deletarBlog);


module.exports = router;
