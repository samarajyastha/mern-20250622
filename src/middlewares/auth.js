import { verifyJWT } from "../utils/jwt.js";

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  let authToken;

  if (authHeader && authHeader.startsWith("Bearer ")) {
    authToken = authHeader.split(" ")[1];
  } else {
    const cookie = req.headers.cookie;

    if (!cookie) return res.status(401).send("User not authenticated.");

    authToken = cookie.split("=")[1];
  }

  try {
    const data = await verifyJWT(authToken);

    req.user = data;

    next();
  } catch (error) {
    res.status(401).send("Invalid auth token.");
  }
};

export default auth;
