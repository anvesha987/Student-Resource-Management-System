const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Not authorized" });
  }

  const token = authHeader.split(" ")[1]; 

  if (!token) {
    return res.status(401).json({ message: "Token missing" });
  }

  try {
    const decoded = jwt.verify(token, "mySecretKey"); 
    req.user = { id: decoded.id };
    next();
  } catch (err) {
    console.error("JWT error:", err.message);
    res.status(401).json({ message: "Token invalid or expired" });
  }
};
