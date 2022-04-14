import { Request } from "express";
import { Users, configs } from "../configs";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const loginUserService = async (req: Request): Promise<string | undefined> => {
  const { username, password } = req.body;

  let user = Users.find((user) => user.username === username);

  if (!user) {
    return undefined;
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    return undefined;
  }

  let token = jwt.sign({ username: username }, configs.secretKey as string, {
    expiresIn: configs.expiresIn,
  });

  return token;
};

export default loginUserService;
