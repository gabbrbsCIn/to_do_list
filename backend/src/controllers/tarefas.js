const { createTarefa, updateTarefa } = require("../services/tarefas");
const {
  validateTarefaDataRequest,
  validateTarefaIdFromRequest,
} = require("../utils/tarefas");
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

const update = async (req, res) => {
  try {
    const tarefaId = validateTarefaIdFromRequest(req);
    const tarefa = validateTarefaDataRequest(req);
    await updateTarefa(tarefa, tarefaId);
    sendSuccessResponse(res, "Tarefa atualizada", tarefa);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

module.exports = {
  create,
  update,
};
