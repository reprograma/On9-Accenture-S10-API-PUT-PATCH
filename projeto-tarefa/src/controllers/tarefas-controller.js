let tarefaModel = require('../models/tarefas-models');
const helper = require('../helpers/helper');
const tarefa = require('../models/tarefas-models');

const obterTarefas = (requisicao, resposta) =>{
  resposta.status(200).json(tarefaModel);
}

// podem utilizar o getById
//www.reprograma.com.br/perfil/:id
const obterIdTarefa =  (requisicao, resposta) =>{
  const { id } = requisicao.params;
  const tarefa = tarefaModel.find(tarefa => tarefa.id == id);

  resposta.json(tarefa);

}

// getByTitle
// resquest, response
//req, res
//www.reprograma.com.br/titulo?titulo=Ler
const obterTituloTarefa =  (requisicao, resposta) => {
  const { titulo } = requisicao.query;
  const tarefa = tarefaModel.find(tarefa => tarefa.titulo == titulo);

  resposta.json(tarefa);

}

const criarTarefa = (requisicao, resposta) =>{
   const { titulo, descricao, prazo, responsavel } = requisicao.body;
   
   const novaTarefa ={
     id:  helper.obterNovoValor(tarefaModel),
     titulo: titulo,
     descricao: descricao,
     prazo: prazo, 
     responsavel: responsavel, 
     dataCriacao: helper.novaData(tarefaModel)
   }

   tarefaModel.push(novaTarefa);

   resposta.status(201).json(novaTarefa);
 }

//updateTarefa
//req, res
//request, response

 const atualizarTarefa = (requisicao, resposta) =>{
  const { id } = requisicao.params;
  const filtrarTarefaAtualizada = tarefaModel.filter(tarefa => {
    return tarefa.id == id;
  })[0];

  const indice =  tarefaModel.indexOf(filtrarTarefaAtualizada);

  const obterChaves = Object.keys(requisicao.body);

  obterChaves.forEach(chave => {
    filtrarTarefaAtualizada[chave] = requisicao.body[chave];
  });

  tarefaModel[indice] = filtrarTarefaAtualizada;

  resposta.status(200).json(tarefaModel[indice]);

 }

 const atualizarCamposTarefa = (requisicao, resposta) => {
  const { id } = requisicao.params;
  const { titulo } = requisicao.body;
  const tarefa = tarefaModel.find(tarefa => tarefa.id == id);

  tarefa.titulo = titulo;

  resposta.status(204).json({ mensagem: `O título foi atualizado com sucesso!`})

 }
 

 const deletarTarefa = (requisicao, resposta) =>{
   const { id } = requisicao.params;
    const filtrarTarefa = tarefaModel.filter(tarefa => {
    return tarefa.id == id;
    })[0];

    const index = tarefaModel.indexOf(filtrarTarefa);

    tarefaModel.splice(index, 1)

    resposta.json(tarefaModel)
 }


module.exports ={
  obterTarefas,
  obterIdTarefa,
  obterTituloTarefa, 
  criarTarefa,
  atualizarTarefa,
  atualizarCamposTarefa,
  deletarTarefa
}