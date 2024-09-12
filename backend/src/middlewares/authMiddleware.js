require("dotenv").config();

const { sendErrorResponse } = require("../utils/utils");
const { extractTokenFromHeader, verifyJWTToken } = require("../utils/auth");

const authenticateToken = (req, res, next) => {
  try {
    const token = extractTokenFromHeader(req.headers);
    const decodedToken = verifyJWTToken(token);
    req.membro = decodedToken;
    next();
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

module.exports = { authenticateToken };
