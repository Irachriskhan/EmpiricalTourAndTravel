const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "You're not authorized! Login to continue",
    });
  }

  // if token is exist then verify the token
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res
        .status(401)
        .json({ success: false, message: "Your token is invalid!" });
    }
    req.user = user;
    console.log(req.user);
    next(); // don't forget to call next
  });
};

const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id && req.user.role === "user") {
      next();
    } else {
      return res
        .status(401)
        .json({ success: false, message: "You're not authenticated" });
    }
  });
};

const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id && req.user.role === "admin") {
      next();
    } else {
      return res.status(401).json({
        success: false,
        message: "Not authorized, accessible for ADMINS only",
      });
    }
  });
};

module.exports = { verifyAdmin, verifyUser, verifyToken };
