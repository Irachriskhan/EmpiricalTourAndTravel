const bcrypt = require("bcryptjs");

const hashPassword = async (password) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    return hashedPassword;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { hashPassword };
