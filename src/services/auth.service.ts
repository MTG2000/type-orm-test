const jwt = require("jsonwebtoken");
const { promisify } = require("util");

const JWT_SECRET = process.env.JWT_SECRET || "123";

const generateAccessToken = async (dataToInclude) => {
  //You can also use normal promises if you want
  return await promisify(jwt.sign)({ ...dataToInclude }, JWT_SECRET, {
    expiresIn: "30d",
  });
};

const generateRefreshToken = async (username) => {
  return await promisify(jwt.sign)({ username }, JWT_SECRET, {
    expiresIn: "30d",
  });
};

const validateToken = async (token) => {
  return new Promise((res, rej) => {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        if (err.name === "TokenExpiredError") {
          const data = jwt.decode(token);
          res({ valid: true, expired: true, data });
        }
        rej({ valid: false });
      }

      res({ valid: true, data: decoded });
    });
  });
};
export default { generateAccessToken, validateToken, generateRefreshToken };
