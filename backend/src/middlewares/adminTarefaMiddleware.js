const { checkMembroTarefaOwner } = require("../services/tarefas");
const { validateTarefaIdFromRequest } = require("../utils/tarefas");
const { sendErrorResponse } = require("../utils/utils");

const adminTarefa = async (req, res, next) => {
  try {
    const tarefaId = validateTarefaIdFromRequest(req);
    await checkMembroTarefaOwner(tarefaId, req.membro.id);
    next();
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

module.exports = { adminTarefa };
