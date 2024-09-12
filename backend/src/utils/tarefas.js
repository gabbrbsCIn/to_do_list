const ValidationError = require("../errors/validationError");

const validateTarefaDataRequest = (req) => {
  if (!req.body.nome) {
    throw new ValidationError("Campos inválidos e/ou não preenchidos");
  }
  if (!req.body.prioridade) {
    req.body.prioridade = "baixa";
  }
  if (!req.body.descricao) {
    req.body.prioridade = "";
  }
  return req.body;
};

module.exports = {
  validateTarefaDataRequest,
};
