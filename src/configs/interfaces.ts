type ExpiresIn = string | number;

interface JWTConfig {
  secretKey: string | undefined;
  expiresIn: ExpiresIn;
}

interface IUser {
  uuid: string;
  username: string;
  password: string;
  playlist: [];
}

interface IPlaylist {
  title: string;
  duration: string;
  releasedDate: Date;
  listenedByMe: number;
  genres: String[];
}

interface IArtist {
  [key: string]: Array<IPlaylist>;
}

type UsersDB = Array<IUser>;

export { JWTConfig, IUser, UsersDB, IPlaylist, IArtist };
