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
  const { id } = requisicao.params; // {id} desestruturar o obj, pegando somente o valor de uma chave

  //const filtrarTarefaAtualizada = tarefaModel.filter(tarefa => {return tarefa.id == id;})[0];

  const filtrarTarefaAtualizada = tarefaModel.find(tarefa => (tarefa.id == id)) //procura dentro do Model um id q seja igual ao id digitado

  const indice =  tarefaModel.indexOf(filtrarTarefaAtualizada); //pega a posição que a tarefa filtrada está dentro do Model

  const obterChaves = Object.keys(requisicao.body);//pegando as chaves e valores do body q nosso usuario digita

  obterChaves.forEach(chave => {
    console.log(chave)
    filtrarTarefaAtualizada[chave] = requisicao.body[chave];
  }); //atribui a cada chave já existente na nossa Model o que o usuário digitou

  tarefaModel[indice] = filtrarTarefaAtualizada; //atualiza de fato o nosso Model

  resposta.status(200).json(tarefaModel[indice]); //enviando o nosso novo Model

 }

 const atualizarCamposTarefa = (requisicao, resposta) => {
  const { id } = requisicao.params; //id que está na URL que o usuario digitou
  const { titulo } = requisicao.body; //titulo que o usuario digitou
  const tarefa = tarefaModel.find(tarefa => tarefa.id == id); //encontra a tarefa referente ao id

  tarefa.titulo = titulo;//atualiza o titulo da nossa Model de acordo com o digitado pelo usuário

  resposta.status(200).json({ mensagem: `O título foi atualizado com sucesso!`})

 }
 

 const deletarTarefa = (requisicao, resposta) =>{
   const { id } = requisicao.params;
    const filtrarTarefa = tarefaModel.filter(tarefa => {
    return tarefa.id == id;
    })[0];

    const index = tarefaModel.indexOf(filtrarTarefa);

    tarefaModel.splice(index, 1)

    resposta.json({mensagem: `Foi deletado dado com o id: ${id}`})
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