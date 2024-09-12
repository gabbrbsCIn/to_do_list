const { Membro } = require("../models");

const getAllMembros = async () => {
  const membros = await Membro.findAll({
    attributes: ["id", "nome", "email"],
  });
  return membros;
};

module.exports = {
  getAllMembros,
};
