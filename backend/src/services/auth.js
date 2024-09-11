const { Membro } = require("../models");

const createMembro = async (data) => {
  console.log(Membro);
  console.log(data);
  const membro = await Membro.create(
    {
      nome: data.nome,
      email: data.email,
      senha: data.senha,
    },
  );

  return membro
};

module.exports = {
  createMembro,
};
