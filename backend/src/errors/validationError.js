const AppError = require("./AppError");

class ValidationError extends AppError {
  constructor(message) {
    super(message, 403);
  }
}

module.exports = ValidationError;
