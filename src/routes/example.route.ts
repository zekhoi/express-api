import { Router } from "express";

import ExampleController from "@controllers/example.controller";

const ExampleRouter = Router();

ExampleRouter.post("/example", ExampleController.create);
ExampleRouter.get("/example", ExampleController.show);
ExampleRouter.put("/example", ExampleController.update);
ExampleRouter.delete("/example", ExampleController.delete);
ExampleRouter.get("/example:id", ExampleController.detail);

export default ExampleRouter;
