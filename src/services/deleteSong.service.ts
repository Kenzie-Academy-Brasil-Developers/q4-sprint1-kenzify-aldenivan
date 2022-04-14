import { Request } from "express";
import { transformTitle } from ".";
import { IUser, Users } from "../configs";

const deleteSongService = (req: Request<any>): IUser | undefined => {
  const { artist, song } = req.query;
  const { username } = req.decode;
  const user = Users.find((user) => user.username === username);
  const playlist = user?.playlist;

  if (playlist) {
    for (let i = 0; i < playlist.length; i++) {
      let currentlySong: any = playlist[i];

      for (let key in currentlySong) {
        if (key === artist) {
          if (currentlySong[key][0].title === transformTitle(song as string)) {
            playlist.splice(currentlySong, 1);
            return user;
          }
        } else {
          return undefined;
        }
      }
    }
  }
  return user;
};

export default deleteSongService;
