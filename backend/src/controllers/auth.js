const { validateDataRequest } = require("../utils/auth");
const { createMembro, checkMembroExistsByEmail } = require("../services/auth");
const { sendSuccessResponse, sendErrorResponse } = require("../utils/utils");

const register = async (req, res) => {
  try {
    const data = validateDataRequest(req);
    const membro = await checkMembroExistsByEmail(data.email);
    await createMembro(data);
    sendSuccessResponse(res, "Membro Registrado!", membro);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

module.exports = {
  register,
};
