const { Membro } = require("../models");

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

module.exports = {
  getAllMembros,
  deleteMembroById,
};
