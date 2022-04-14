import dotenv from "dotenv";
import { JWTConfig, UsersDB, IUser, IArtist, IPlaylist } from "./interfaces";

dotenv.config();

const configs: JWTConfig = {
  secretKey: process.env.SECRET_KEY,
  expiresIn: process.env.EXPIRES_IN ?? "1h",
};

const Users: UsersDB = [];

export { configs, Users, JWTConfig, UsersDB, IUser, IArtist, IPlaylist };
