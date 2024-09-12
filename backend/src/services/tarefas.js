const { Tarefa } = require("../models");
const membro = require("../models/membro");

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



module.exports = {
  createTarefa,
};
