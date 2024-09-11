const ValidationError = require("../errors/validationError");
const AuthenticationError = require("../errors/authenticationError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const validateDataRequest = (req, method) => {
  const membroData = {};
  membroData.nome = req.body.nome;
  membroData.email = req.body.email;
  membroData.senha = req.body.senha;

  if (method === "register") {
    if (!membroData.nome || !membroData.email || !membroData.senha) {
      throw new ValidationError("Campos inválidos e/ou não preenchidos");
    }
    return membroData;
  } else if (method === "login") {
    if (!membroData.email || !membroData.senha) {
      throw new ValidationError("Campos inválidos e/ou não preenchidos");
    }
    return membroData;
  }
};

const generateHashedPassword = async (senha) => {
  hashedPassword = await bcrypt.hash(senha, 10);
  return hashedPassword;
};

const verifyPassword = async (inputPassword, rightPassword) => {
  const passwordIsValid = await bcrypt.compare(inputPassword, rightPassword);
  if (!passwordIsValid) {
    throw new AuthenticationError("Senha inválida!");
  }
  return passwordIsValid;
};

const generateJWTToken = async (membro) => {
  const token = jwt.sign(
    {
      id: membro.id,
      nome: membro.nome,
      email: membro.email,
    },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: process.env.JWT_REFRESH_EXPIRATION,
    }
  );
  return token;
};

module.exports = {
  validateDataRequest,
  generateHashedPassword,
  verifyPassword,
  generateJWTToken,
};
