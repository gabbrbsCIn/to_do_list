const { Tarefa } = require("../models");
const NotFoundError = require("../errors/notFoundError");
const AuthorizationError = require("../errors/authorizationError");

const createTarefa = async (tarefa, membroId) => {
  const createdTarefa = await Tarefa.create({
    nome: tarefa.nome,
    descricao: tarefa.descricao,
    finalizada: false,
    prioridade: tarefa.prioridade,
    membroId: membroId,
  });
  return createdTarefa;
};

const updateTarefa = async (tarefa, tarefaId) => {
  const [tarefasFound] = await Tarefa.update(
    {
      nome: tarefa.nome,
      descricao: tarefa.descricao,
      prioridade: tarefa.prioridade,
    },
    {
      where: {
        id: tarefaId,
      },
    }
  );
  if (tarefasFound === 0) {
    throw new NotFoundError("ID da tarefa inválido");
  }
  return tarefasFound;
};

const findTarefasByMembroId = async (membroId) => {
  const tarefas = await Tarefa.findAll({
    where: {
      membroId: membroId,
    },
  });

  return tarefas;
};

const findAllTarefas = async () => {
  const tarefas = await Tarefa.findAll();
  return tarefas;
};

const checkMembroTarefaOwner = async (tarefaId, membroId) => {
  const tarefa = await Tarefa.findOne({
    where: {
      id: tarefaId,
      membroId: membroId,
    },
  });
  if (!tarefa) {
    throw new AuthorizationError("Você não tem autorização para atualizar essa tarefa")
  }
  return tarefa;
};

module.exports = {
  createTarefa,
  updateTarefa,
  findTarefasByMembroId,
  findAllTarefas,
  checkMembroTarefaOwner,
};
