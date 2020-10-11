let tarefaModel = require('../models/tarefas-models');
const helper = require('../helpers/helper');

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
  const baseDeDados = tarefaModel.find(tarefa => tarefa.titulo == titulo);

  resposta.json(baseDeDados);

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

 const deletarTarefa = (requisicao, resposta) =>{
   const { id } = requisicao.params;

    const tarefasFiltradas = tarefaModel.filter(tarefa => {
    return tarefa.id == id;
    })[0];

    const index = tarefaModel.indexOf(tarefasFiltradas);
  
    tarefaModel.splice(index, 1)

    resposta.json(tarefaModel)
 }

module.exports ={
  obterTarefas,
  obterIdTarefa,
  obterTituloTarefa, 
  criarTarefa,
  deletarTarefa
}