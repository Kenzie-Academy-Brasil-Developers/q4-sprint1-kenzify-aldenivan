import { NextFunction, Request, Response } from "express";
import { AnySchema } from "yup";
import Lazy from "yup/lib/Lazy";

const validate =
  (schema: AnySchema | Lazy<any>) =>
  async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    const resource = req.body;
    try {
      await schema.validate(resource);
      next();
    } catch (err: any) {
      res.status(400).json({ error: err.errors.join(", ") });
    }
  };

export default validate;
