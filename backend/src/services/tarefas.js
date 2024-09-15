const { Tarefa } = require("../models");
const NotFoundError = require("../errors/notFoundError");
const AuthorizationError = require("../errors/authorizationError");
const { where } = require("sequelize");

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
        finalizada: false
      },
    }
  );
  if (tarefasFound === 0) {
    throw new NotFoundError("ID da tarefa inválido e/ou não pode ser editado");
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
    throw new AuthorizationError(
      "Você não tem autorização para fazer alterações ou deletar essa tarefa"
    );
  }
  return tarefa;
};

const deleteTarefaById = async (tarefaId) => {
  const tarefa = await Tarefa.destroy({
    where: {
      id: tarefaId,
    },
  });
  return tarefa;
};

const finishTarefa = async (tarefaId) => {
  const tarefa = await Tarefa.update(
    {
      finalizada: true,
      terminadaEm: new Date(),
    },
    {
      where: {
        id: tarefaId,
      },
    }
  );

  return tarefa;
};

const findTarefaById = async (tarefaId) => {
  const tarefa = await Tarefa.findByPk(tarefaId);
  if (!tarefa) {
    throw new NotFoundError("Tarefa não encontrada");
  }
  return tarefa;
}

module.exports = {
  createTarefa,
  updateTarefa,
  findTarefasByMembroId,
  findAllTarefas,
  checkMembroTarefaOwner,
  deleteTarefaById,
  finishTarefa,
  findTarefaById
};
