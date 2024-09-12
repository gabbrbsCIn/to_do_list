const { SequelizeScopeError } = require("sequelize");
const { createTarefa } = require("../services/tarefas");
const { validateTarefaDataRequest } = require("../utils/tarefas");
const { sendErrorResponse, sendSuccessResponse } = require("../utils/utils");

const create = async (req, res) => {
  try {
    membroId = req.membro.id;
    const tarefa = validateTarefaDataRequest(req);
    const createdTarefa = await createTarefa(tarefa, membroId);
    sendSuccessResponse(res, "Tarefa criada com sucesso", createdTarefa);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

module.exports = {
  create,
};
