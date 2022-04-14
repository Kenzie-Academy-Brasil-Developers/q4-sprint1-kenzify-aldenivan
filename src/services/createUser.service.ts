import { Request } from "express";
import { IUser, Users } from "../configs";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";

const createUserService = async (req: Request): Promise<IUser> => {
  const hashedPassword: string = await bcrypt.hash(req.body.password, 10);

  let user = {
    ...req.body,
    id: uuidv4(),
    playlist: [],
    password: hashedPassword,
  };

  let showUser = { ...user };
  delete showUser.password;

  Users.push(user);

  return showUser;
};

export default createUserService;
