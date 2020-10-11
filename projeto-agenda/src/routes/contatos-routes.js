const express = require("express");
const router = express.Router();

const contatosController = require("../controllers/contatos-controller");

/**
@route GET contatos
@desc Retornar todos os contatos
@access Public 
@endpoint http://localhost:porta/contatos
**/
router.get("/contatos", contatosController.obterContatos);

/**
@route GET contatos/nome
@desc Retornar apenas nomes
@access Public 
@endpoint http://localhost:porta/contatos/nome ====== http://localhost:5000/contatos/nome?nome=Ana Beatriz
**/
router.get("/contatos/nome", contatosController.obterNome);

/**
@route GET contatos/telefone
@desc Retornar apenas telefones
@access Public 
@endpoint http://localhost:porta/contatos/telefone ====== http://localhost:5000/contatos/telefone?telefone=81996521558
**/
router.get("/contatos/telefone", contatosController.obterTelefone);

/**
@route GET contatos/:id
@desc Retornar apenas um único contato pelo seu id: identificador
@access Public 
@endpoint http://localhost:porta/contatos/:id
**/
router.get("/contatos/:id", contatosController.obterIdContato);

/**
@route POST contatos
@desc Criar um contato
@access Public 
@endpoint http://localhost:porta/contatos
**/
router.post("/contatos", contatosController.criarContato); //lembrar de editar o body no insomnia

/**
@route PUT contatos
@desc Atualizar um contato
@access Public 
@endpoint http://localhost:porta/contatos/:id
**/
router.put("/contatos/:id", contatosController.atualizarContato); //lembrar de editar o body no insomnia

/**
@route PATCH contatos
@desc Atualizar o nome do contato
@access Public 
@endpoint http://localhost:porta/contatos/:id
**/
router.patch("/contatos/:id", contatosController.atualizarCampo); //lembrar de editar somente o nome no body

/**
@route DELETE contatos
@desc Deletar um contato pelo seu identificador
@access Public 
@endpoint http://localhost:porta/contatos/:id
**/
router.delete("/contatos/:id", contatosController.deletarContato);

module.exports = router;
