class CustomAPIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }

  createCustomError = (message, statusCode) => {
    // console.log(message);
    return new CustomAPIError(message, statusCode);
  };
}

module.exports = { CustomAPIError, createCustomError };
