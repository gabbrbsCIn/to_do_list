const { Membro } = require("../models");
const ConflictError = require("../errors/conflictError");
const NotFoundError = require("../errors/notFoundError");
const { generateHashedPassword, verifyPassword } = require("../utils/auth");

const createMembro = async (data) => {
  const hashedPassword = await generateHashedPassword(data.senha);
  const membro = await Membro.create({
    nome: data.nome,
    email: data.email,
    senha: hashedPassword,
  });

  return membro;
};

const findMembroByEmail = async (email) => {
  const membro = await Membro.findOne({
    where: {
      email: email,
    }
  });
  return membro;
};

const checkMembroExistsByEmail = async (email) => {
  const membro = await findMembroByEmail(email);

  if (membro) {
    throw new ConflictError("Membro já cadastrado!");
  }
  return membro;
};

const membroAuthenticate = async (data) => {
  const membro = await findMembroByEmail(data.email);
  if (!membro) {
    throw new NotFoundError("Usúario não é registrado");
  }
  await verifyPassword(data.senha, membro.senha);
  return membro;
};

module.exports = {
  createMembro,
  checkMembroExistsByEmail,
  membroAuthenticate,
};
