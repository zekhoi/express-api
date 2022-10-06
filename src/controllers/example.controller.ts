import { Request, Response } from "express";

const ExampleController = {
  create: async (req: Request, res: Response) => {
    res.status(200).json({
      code: 200,
      status: "OK",
      message: "Test route is working",
    });
  },
  show: async (req: Request, res: Response) => {
    res.status(200).json({
      code: 200,
      status: "OK",
      message: "Test route is working",
    });
  },
  update: async (req: Request, res: Response) => {
    res.status(200).json({
      code: 200,
      status: "OK",
      message: "Test route is working",
    });
  },
  delete: async (req: Request, res: Response) => {
    res.status(200).json({
      code: 200,
      status: "OK",
      message: "Test route is working",
    });
  },
  detail: async (req: Request, res: Response) => {
    res.status(200).json({
      code: 200,
      status: "OK",
      message: "Test route is working",
    });
  },
};

export default ExampleController;
