import jwt from "jsonwebtoken";
import config from "../config/config.json";
import { resp } from "../../utils/response";

export const verifyToken = (req, res, next) => {
  const token = req.headers.token || req.get("Authorization");

  if (!token) {
    res.status(404);
    return res.send(resp("Not Found", "No access token."));
  }

  jwt.verify(token, config.jwtCredentials.secret, function(error, decoded) {
    if (error) {
      res.status(404);
      return res.send(resp("Not Found", "Invalid access token"));
    }
    const { email, password } = decoded;
    // const { email:CONFIG_EMAIL,password:CONFIG_PASSWORD } = config.userCredentials;
    if (email !== CONFIG_EMAIL || password !== CONFIG_PASSWORD) {
      res.status(403);
      return res.send(resp("Forbidden", "Invalid access token"));
    }
    next();
  });
};
