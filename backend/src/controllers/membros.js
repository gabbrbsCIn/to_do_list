const { sendSuccessResponse, sendErrorResponse } = require("../utils/utils");
const { validateDataRequest, updateTokenSign } = require("../utils/auth");
const {
  getAllMembros,
  deleteMembroById,
  updateDataMembro,
} = require("../services/membros");

const getAll = async (req, res) => {
  try {
    const membros = await getAllMembros();
    sendSuccessResponse(res, "Membros coletados", membros);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const deleteMembro = async (req, res) => {
  try {
    const membroId = req.membro.id;
    await deleteMembroById(membroId);
    sendSuccessResponse(res, "Membro deletado", membroId);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const updateMembro = async (req, res) => {
  try {
    const membro = validateDataRequest(req, "register");
    membro.id = req.membro.id;

    await updateDataMembro(membro);
    sendSuccessResponse(res, "Membro atualizado", membro.email);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

module.exports = {
  getAll,
  deleteMembro,
  updateMembro,
};
