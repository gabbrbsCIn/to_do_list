const { sendSuccessResponse, sendErrorResponse } = require("../utils/utils");
const { getAllMembros } = require("../services/membros");

const getMembros = async (req, res) => {
  try {
    const membros = await getAllMembros();
    sendSuccessResponse(res, "Membros coletados", membros);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

module.exports = {
  getMembros,
};
