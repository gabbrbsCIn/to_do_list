class AppError extends Error {
    constructor(message, httpCode) {
      super(message);
      this.name = this.constructor.name;
      this.httpCode = httpCode;
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  module.exports = AppError;
  