import jwt from "jsonwebtoken";
import config from "../config/config.json";
import { privatekey } from "../config/data/secure";
import model from "../model";

const { Users } = model;

const login = async (email, password) => {
  console.info("Verify:Login");
  try {
    const userobj = await Users.findOne({ 'email': email, 'password': password });
    return (!userobj)?false:true
  } catch (e) {
    console.error("Verify:Login:Failed");
    return false;
  }
}

export const verifyToken = (req, res, next) => {
  try {
    const token = req.headers.token || req.get("Authorization");
    if (!token) {
      return res.status(401).send({ "status": false, "message": "Token not avilable" });
    }

    jwt.verify(token, privatekey, function (error, decoded) {

      if (error) {
        return res.status(401).send({ "status": false, "message": "Invalid Token" });
      }

      const { email, password } = decoded;
      //verify login
      login(email, password).then(isValidUser => {
        if (isValidUser) {
          next();
        }else{
          res.status(401).send({ "status": false, "message": "Token not avilable" });
        }
      });

    });
  } catch (e) {
    console.error("Verify token failed");
  }
};
