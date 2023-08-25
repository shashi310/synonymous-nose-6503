const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];

  if (token) {
    jwt.verify(token, process.env.secrete, (err, decoded) => {
      if (decoded) {
        req.body.userID = decoded.userID;
        req.body.userName = decoded.userName;
        req.body.role = decoded.role;
        next();
      } else {
        res.json({ msg: "You are not authorized. Please Login again!!" });
      }
    });
  } else {
    res.json({ msg: "You are not authorized!" });
  }
}

module.exports = { auth };
