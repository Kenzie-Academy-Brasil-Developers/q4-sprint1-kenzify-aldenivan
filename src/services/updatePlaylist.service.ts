import { Request, Response } from "express";
import { Users } from "../configs";
import { transformTitle } from ".";
import { AnySchema } from "yup";

const updatePlaylistService = async (
  req: Request,
  res: Response,
  schema: AnySchema
) => {
  const artist = req.query.artist ?? null;
  const song = req.query.song ?? null;
  const { username } = req.decode;
  const user = Users.find((user) => user.username === username);
  const playlist: any = user?.playlist;

  if (!user) {
    return undefined;
  }

  if (!artist && !song && Object.values(req.body).length !== 0) {
    let artistMusic = {
      ...req.body,
    };

    for (let key in artistMusic) {
      try {
        await schema.validate(artistMusic[key][0], {
          abortEarly: false,
          stripUnknown: true,
        });

        artistMusic[key][0].listenedByMe = 0;
        artistMusic[key][0].title = transformTitle(artistMusic[key][0].title);

        playlist.push(artistMusic);

        return user;
      } catch (error: any) {
        return res.status(400).json({ error: error.errors });
      }
    }
  }

  if (artist && song && Object.values(req.body).length === 0) {
    for (let i = 0; i < user.playlist.length; i++) {
      let currentlySong: any = user.playlist[i];

      for (let key in currentlySong) {
        if (key === artist) {
          if (currentlySong[key][0].title === transformTitle(song as string)) {
            currentlySong[key][0].listenedByMe += 1;
            return currentlySong[key][0];
          } else {
            return {};
          }
        } else {
          return {};
        }
      }
    }
  }
};

export default updatePlaylistService;
