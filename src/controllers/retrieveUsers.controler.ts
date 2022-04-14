import { Request, Response } from "express";
import { Users } from "../configs";

const retrieveusersController = (_: Request, res: Response) => {
  res.status(200).json(Users);
};

export default retrieveusersController;
