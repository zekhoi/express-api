import { Request, Response } from "express";

const TestController = {
  test: async (req: Request, res: Response) => {
    res.status(200).json({
      code: 200,
      status: "OK",
      message: "Test route is working",
    });
  },
};

export default TestController;
