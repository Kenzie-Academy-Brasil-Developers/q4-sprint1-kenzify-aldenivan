import express from "express";
import router from "./routes";

let app = express();
app.use(express.json());
app.use(router);

export default app;
