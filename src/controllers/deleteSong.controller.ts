import { Request, Response } from "express";
import { deleteSongService } from "../services";

const deleteSongController = (req: Request, res: Response) => {
  let user = deleteSongService(req);

  if (!user) {
    return res.status(400).json({ error: "Artist or song not found" });
  }

  res.status(204).json();
};

export default deleteSongController;
