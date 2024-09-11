const AppError = require("./AppError");

class ConflictError extends AppError {
  constructor(message) {
    super(message, 403);
  }
}

module.exports = ConflictError;
