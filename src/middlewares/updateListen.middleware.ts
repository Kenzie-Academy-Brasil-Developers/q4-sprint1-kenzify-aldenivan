import { NextFunction, Request, Response } from "express";
import { Users } from "../configs";
import { transformTitle } from "../services";

const updateListenMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  const artist = req.query.artist ?? null;
  const title = (req.query.song as string) ?? null;
  const username = req.username;
  const user = Users.find((user) => user.username === username);

  if (user) {
    const playlist = user.playlist;

    for (let i = 0; i < playlist.length; i++) {
      let currentlySong: any = playlist[i];

      for (let key in currentlySong) {
        if (key === artist && title) {
          if (currentlySong[key][0].title === transformTitle(title)) {
          }
        } else {
          return res.status(400).json({ error: "Artist or song not found" });
        }
      }
    }
  }

  return next();
};

export default updateListenMiddleware;
