import { Router } from "express";

import TestController from "@controllers/test.controller";

const TestRouter = Router();

TestRouter.get("/test", TestController.test);

export default TestRouter;
