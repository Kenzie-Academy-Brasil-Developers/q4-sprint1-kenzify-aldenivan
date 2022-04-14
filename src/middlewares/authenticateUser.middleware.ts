import { NextFunction, Request, Response } from "express";
import { configs } from "../configs";
import jwt, { JwtPayload } from "jsonwebtoken";

const authenticateUser = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: "missing header authorization." });
  }

  let token = req.headers.authorization.split(" ")[1];

  jwt.verify(token, configs.secretKey as string, (err, decoded) => {
    if (err) {
      console.log(err);
      return res.status(401).json({ message: "Invalid Token." });
    } else {
      req.decode = decoded as JwtPayload;

      return next();
    }
  });
};

export default authenticateUser;
