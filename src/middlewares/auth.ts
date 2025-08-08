import { verifyJWT } from "../utils/jwt.js";

const auth = async (req: Request, res: Response, next) => {
  const cookie = req.headers.cookie;

  if (!cookie) return res.status(401).send("User not authenticated.");

  const authToken = cookie.split("=")[1];

  try {
    const data = await verifyJWT(authToken);

    req.user = data;

    next();
  } catch (error) {
    res.status(401).send("Invalid auth token.");
  }
};

export default auth;
