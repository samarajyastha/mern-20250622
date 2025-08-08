import jwt from "jsonwebtoken";
import config from "../config/config.js";

function createJWT(data: string) {
  const token = jwt.sign(data, config.jwtSecret, {
    expiresIn: "1d",
  });

  return token;
}

async function verifyJWT(authToken: string) {
  return await new Promise((resolve, reject) => {
    jwt.verify(authToken, config.jwtSecret, (error, data) => {
      if (error) return reject(error);

      return resolve(data);
    });
  });
}

export { createJWT, verifyJWT };
