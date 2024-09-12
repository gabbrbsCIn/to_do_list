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
  const [foundTarefas] = await Tarefa.update(
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
  if (foundTarefas === 0) {
    throw new NotFoundError("ID da tarefa inválido");
  }
  return foundTarefas;
};

module.exports = {
  createTarefa,
  updateTarefa,
};
