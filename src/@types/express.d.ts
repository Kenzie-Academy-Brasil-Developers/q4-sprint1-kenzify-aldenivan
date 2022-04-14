import { User } from "../configs";

declare global {
  namespace Express {
    interface Request {
      validated: User;
      decode: JwtPayload;
      username: string;
    }
  }
}
