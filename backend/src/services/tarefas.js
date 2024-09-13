const { Tarefa } = require("../models");
const NotFoundError = require("../errors/notFoundError");

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
module.exports = {
  createTarefa,
  updateTarefa,
  findTarefasByMembroId,
  findAllTarefas,
};
