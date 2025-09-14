const AuthMiddl = (req, res, next) => {
  const token = "xyuyyugz";
  const isAuthorized = token === "xyz";
  if (!isAuthorized) {
    res.status(401).send("Unauthorized");
  } else {
    next();
  }
};

module.exports = { AuthMiddl };
