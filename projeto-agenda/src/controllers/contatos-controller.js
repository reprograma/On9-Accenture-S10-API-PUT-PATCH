const contatosModel = require("../models/contatos-models");
const helper = require("../helpers/helper");

//GET
const obterContatos = (requisicao, resposta) => {
  resposta.status(200).json(contatosModel);
};

//GET
const obterIdContato = (requisicao, resposta) => {
  const { id } = requisicao.params;
  const contato = contatosModel.find((contato) => contato.id == id);

  resposta.json(contato);
};

//GET
const obterNome = (requisicao, resposta) => {
  const { nome } = requisicao.query;
  const baseDeDados = contatosModel.find((contato) => contato.nome == nome);

  resposta.json(baseDeDados);
};

//GET
const obterTelefone = (requisicao, resposta) => {
  const { telefone } = requisicao.query;

  const baseDeDados = contatosModel.find(
    (contato) => contato.telefone == telefone
  );

  resposta.json(baseDeDados);
};

//POST
const criarContato = (requisicao, resposta) => {
  let { nome, telefone, email, outrosTelefones } = requisicao.body;

  let novoContato = {
    //utilizando o helper
    id: helper.obterNovoValor(contatosModel),
    nome: nome,
    telefone: telefone,
    email: email,
    outrosTelefones: outrosTelefones,
  };

  contatosModel.push(novoContato);

  resposta.status(201).json(novoContato);
};

//PUT
const atualizarContato = (requisicao, resposta) => {
  const { id } = requisicao.params;
  const filtrarContatoAtualizado = contatosModel.filter((contato) => {
    return contato.id == id;
  })[0];

  const index = contatosModel.indexOf(filtrarContatoAtualizado);

  const obterChaves = Object.keys(requisicao.body); //pega as chaves do body

  obterChaves.forEach((chave) => {
    filtrarContatoAtualizado[chave] = requisicao.body[chave];
  });

  contatosModel[index] = filtrarContatoAtualizado;
  resposta.status(200).json(contatosModel[index]);
};

//PATCH
const atualizarCampo = (requisicao, resposta) => {
  const { id } = requisicao.params;
  const { nome } = requisicao.body;

  const contato = contatosModel.find((contato) => contato.id == id);

  contato.nome = nome;

  resposta.status(200).json(contato);
};

//DELETE
const deletarContato = (requisicao, resposta) => {
  const { id } = requisicao.params;

  const contatoFiltrado = contatosModel.filter((contato) => {
    return contato.id == id;
  })[0];

  const index = contatosModel.indexOf(contatoFiltrado);

  contatosModel.splice(index, 1);

  resposta.json(contatosModel);
};

module.exports = {
  obterContatos,
  obterIdContato,
  obterNome,
  obterTelefone,
  criarContato,
  atualizarContato,
  atualizarCampo,
  deletarContato,
};
