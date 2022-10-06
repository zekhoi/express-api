import { Router } from "express";

import ExampleRouter from "@routes/example.route";
import TestRouter from "@routes/test.route";

const routes = Router();

const routers = [TestRouter, ExampleRouter];

routers.forEach((router) => {
  routes.use("/v1", router);
});

export default routes;
