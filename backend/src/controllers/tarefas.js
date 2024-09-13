const { createTarefa, updateTarefa, findTarefasByMembroId } = require("../services/tarefas");
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

const getMembroTarefas = async (req, res) => {
  const membroId = req.membro.id;
  const tarefas = await findTarefasByMembroId(membroId);

  sendSuccessResponse(res, "Tarefas coletadas", tarefas);
};

module.exports = {
  create,
  update,
  getMembroTarefas,
};
