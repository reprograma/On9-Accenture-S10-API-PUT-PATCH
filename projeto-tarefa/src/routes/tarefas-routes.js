const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/tarefas-controller');

/**
@route GET tarefas
@desc Retornar todas as tarefas
@access Public 
@endpoint http://localhost:porta/tarefas
**/
router.get('/tarefas', tarefaController.obterTarefas);

/**
@route GET tarefas/titulo
@desc Retornar apenas títulos
@access Public 
@endpoint http://localhost:porta/tarefas/titulo
**/
router.get('/tarefas/titulo', tarefaController.obterTituloTarefa);
/**
@route GET tarefas/:id
@desc Retornar apenas uma única tarefa pelo seu id: identificador
@access Public 
@endpoint http://localhost:porta/tarefas/:id
**/
router.get('/tarefas/:id', tarefaController.obterIdTarefa);

/**
@route POST tarefas
@desc Criar uma tarefa
@access Public 
@endpoint http://localhost:porta/tarefas
**/
router.post('/tarefas', tarefaController.criarTarefa);

/**
@route DELETE tarefas
@desc Deletar uma tarefa pelo seu identificador
@access Public 
@endpoint http://localhost:porta/tarefas/:id
**/
router.delete('/tarefas/:id', tarefaController.deletarTarefa)

/**
@route PATCH tarefas
@desc Atualizar uma Postagem pelo seu id
@access Public 
@endpoint http://localhost:porta/tarefas/:id
**/
router.atualizar('/tarefas/:id', tarefaController.postagemAtualizada)

/**
@route PUT tarefas
@desc Atualizar um Titulo
@access Public 
@endpoint http://localhost:porta/tarefas/:id
**/
router.atualizar('/tarefas/:id', tarefaController.atualizarTitulo)

module.exports = router;