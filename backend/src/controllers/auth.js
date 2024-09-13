const { validateDataRequest } = require("../utils/auth");
const {
  createMembro,
  checkMembroExistsByEmail,
  membroAuthenticate,
} = require("../services/auth");
const { sendSuccessResponse, sendErrorResponse } = require("../utils/utils");

const { generateJWTToken } = require("../utils/auth");

const register = async (req, res) => {
  try {
    const data = validateDataRequest(req, "register");
    await checkMembroExistsByEmail(data.email);
    const membro = await createMembro(data);
    sendSuccessResponse(res, "Membro Registrado com sucesso!", membro.email);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const login = async (req, res) => {
  try {
    const data = validateDataRequest(req, "login");
    const membro = await membroAuthenticate(data);
    const token = await generateJWTToken(membro);
    sendSuccessResponse(res, "Usuário logado!", token);
  } catch (error) {
    console.log(error);
    sendErrorResponse(res, error);
  }
};

module.exports = {
  register,
  login,
};
