import { Request, Response } from "express";
import { loginUserService } from "../services";

const loginUserController = async (req: Request, res: Response) => {
  const token = await loginUserService(req);

  if (!token) {
    return res.status(401).json({ message: "Wrong credentials. Try again!" });
  }

  res.status(200).json({ accessToken: token });
};

export default loginUserController;
