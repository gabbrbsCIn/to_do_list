const { Membro } = require("../models");
const { generateHashedPassword } = require("../utils/auth");

const getAllMembros = async () => {
  const membros = await Membro.findAll({
    attributes: ["id", "nome", "email"],
  });
  return membros;
};

const deleteMembroById = async (membroId) => {
  const membro = await Membro.destroy({
    where: {
      id: membroId,
    },
    attributes: ["id", "nome", "email"],
  });

  return membro;
};

const updateDataMembro = async (membroData) => {
  const hashedPassword = await generateHashedPassword(membroData.senha);
  const membro = await Membro.update(
    {
      nome: membroData.nome,
      email: membroData.email,
      senha: hashedPassword,
    },
    {
      where: {
        id: membroData.id,
      },
    },
    {
      attributes: ["id", "nome", "email"],
    }
  );

  return membro;
};

module.exports = {
  getAllMembros,
  deleteMembroById,
  updateDataMembro,
};
