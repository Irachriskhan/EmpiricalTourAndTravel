const asyncWrapper = (callback) => {
  return async (req, res, next) => {
    try {
      callback(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

module.exports = asyncWrapper;
