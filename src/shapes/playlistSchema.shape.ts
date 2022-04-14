import * as yup from "yup";

const playlistSchemaShape = yup.object().shape({
  title: yup.string().required(),
  duration: yup.string().required(),
  releasedDate: yup.string().required(),
  genres: yup.array().required(),
});

export default playlistSchemaShape;
