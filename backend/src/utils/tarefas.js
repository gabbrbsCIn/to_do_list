const ValidationError = require("../errors/validationError");

const validateTarefaDataRequest = (req) => {
  if (!req.body.nome) {
    throw new ValidationError("Campos inválidos e/ou não preenchidos");
  }
  if (!req.body.prioridade) {
    req.body.prioridade = "baixa";
  }
  if (!req.body.descricao) {
    req.body.descricao = "";
  }
  req.body.prioridade = req.body.prioridade.toLowerCase();

  return req.body;
};

const validateTarefaIdFromRequest = (req) => {
  const tarefaId = req.body.id;
  if (!tarefaId) {
    throw new ValidationError("ID da tarefa não preenchido ou inválido");
  }
  return tarefaId;
};

module.exports = {
  validateTarefaDataRequest,
  validateTarefaIdFromRequest,
};
