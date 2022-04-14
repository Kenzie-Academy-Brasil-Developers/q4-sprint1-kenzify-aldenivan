import { NextFunction, Request, Response } from "express";
import { Users } from "../configs";

const verifyDuplicateUsername = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  const { username } = req.body;

  let user = Users.find((user) => user.username === username);

  if (user) {
    return res.status(422).json({ message: "You can not use this username." });
  }

  return next();
};

export default verifyDuplicateUsername;
