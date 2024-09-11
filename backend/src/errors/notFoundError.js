const AppError = require('./AppError');

class NotFoundError extends AppError {
  constructor(message) {
    super(message, 403);
  }
}

module.exports = NotFoundError;
