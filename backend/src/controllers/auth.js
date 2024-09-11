const AppError = require("../errors/AppError");
const { validateDataRequest } = require("../utils/auth");
const { createMembro } = require("../services/auth");

const register = async (req, res) => {
  try {
    const data = validateDataRequest(req);
    const membro = await createMembro(data);
    return res
      .json({ message: "Membro registrado!", data: membro.email })
      .status(200);
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.httpCode).json({ message: error.message });
    } else {
      console.log(error);
      return res.send(error).status(500);
    }
  }
};

module.exports = {
  register,
};
