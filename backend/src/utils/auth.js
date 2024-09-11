const ValidationError = require("../errors/validationError")

const validateDataRequest = (req) => {
  const membroData = {};
  membroData.nome = req.body.nome;
  membroData.email = req.body.email;
  membroData.senha = req.body.senha;

  if (!membroData.nome || !membroData.email || !membroData.senha) {
    throw new ValidationError("Campos inválidos e/ou não preenchidos");
  }
  return membroData;
};



module.exports = {
  validateDataRequest
}
