import cors from "cors";
import { config } from "dotenv";
import express, { Express, json } from "express";

import morganMiddleware from "@middlewares/morgan.middleware";

import routes from "@routes/index";

config();

const app: Express = express();

app.use(cors());
app.use(morganMiddleware);
app.use(json());
app.use("/api", routes);

export default app;
