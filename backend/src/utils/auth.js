const ValidationError = require("../errors/validationError")
const bcrypt = require("bcrypt");

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

const generateHashedPassword = async (senha) => {
  hashedPassword = await bcrypt.hash(senha, 10);
  return hashedPassword;
}

module.exports = {
  validateDataRequest,
  generateHashedPassword
}
