import { Request, Response } from "express";
import { updatePlaylistService } from "../services";
import { playlistSchemaShape } from "../shapes";

const updatePlaylistController = async (req: Request, res: Response) => {
  let user = await updatePlaylistService(req, res, playlistSchemaShape);

  if (!user) {
    return res.status(401).json({ message: "Invalid Token." });
  } else if (Object.values(user).length === 0) {
    return res.status(401).json({ error: "Artist or song not found" });
  }

  res.status(200).json(user);
};

export default updatePlaylistController;
