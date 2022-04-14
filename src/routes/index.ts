import { Router } from "express";
import { userSchemaShape } from "../shapes";
import {
  authenticateUser,
  validate,
  verifyDuplicateUsername,
} from "../middlewares";
import {
  createUserController,
  deleteSongController,
  loginUserController,
  retrieveusersController,
  updatePlaylistController,
} from "../controllers";

const router = Router();

router.post(
  "/users/register",
  validate(userSchemaShape),
  verifyDuplicateUsername,
  createUserController
);

router.get("/users", retrieveusersController);

router.post("/users/login", loginUserController);

router.put("/users/playlist", authenticateUser, updatePlaylistController);

router.delete("/users/playlist", authenticateUser, deleteSongController);

export default router;
