const AppError = require("../errors/AppError");

const sendSuccessResponse = (res, message, data = null) => {
  return res.json({ message: message, data: data }).status(200);
};
const sendErrorResponse = (res, error) => {
  if (error instanceof AppError) {
    return res.status(error.httpCode).json({ message: error.message });
  } else {
    console.log(error);
    return res.json({ error: error }).status(500);
  }
};

module.exports = { sendSuccessResponse, sendErrorResponse };
