const { sendSuccessResponse, sendErrorResponse } = require("../utils/utils");
const { getAllMembros, deleteMembroById } = require("../services/membros");

const getAll = async (req, res) => {
  try {
    const membros = await getAllMembros();
    sendSuccessResponse(res, "Membros coletados", membros);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const deleteMembro = async (req, res) => {
  const membroId = req.membro.id;
  const membro = await deleteMembroById(membroId);
  sendSuccessResponse(res, "Membro deletado", membro);
};

module.exports = {
  getAll,
  deleteMembro
};
