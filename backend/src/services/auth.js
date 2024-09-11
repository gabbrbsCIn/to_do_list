const { Membro } = require("../models");
const ConflictError = require("../errors/conflictError");

const createMembro = async (data) => {
  const membro = await Membro.create({
    nome: data.nome,
    email: data.email,
    senha: data.senha,
  });

  return membro;
};

const checkMembroExistsByEmail = async (email) => {
  const membro = await Membro.findOne({
    where: {
      email: email,
    },
    attributes: ["id", "nome", "email"],
  });

  if (membro) {
    throw new ConflictError("Membro já cadastrado!");
  }

  return membro;
};

module.exports = {
  createMembro,
  checkMembroExistsByEmail,
};
