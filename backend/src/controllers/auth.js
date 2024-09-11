const { validateDataRequest } = require("../utils/auth");
const { createMembro, checkMembroExistsByEmail } = require("../services/auth");
const { sendSuccessResponse, sendErrorResponse } = require("../utils/utils");

const register = async (req, res) => {
  try {
    const data = validateDataRequest(req);
    await checkMembroExistsByEmail(data.email);
    const membro = await createMembro(data);
    sendSuccessResponse(res, "Membro Registrado com sucesso!", membro.email);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

module.exports = {
  register,
};
