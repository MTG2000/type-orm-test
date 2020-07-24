import ApiError from "../helpers/error";
import { NextFunction, Request, Response } from "express";

// Here we can handle all errors
export default (err, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ApiError) {
    return res
      .status(err.statusCode)
      .json({ title: err.title, message: err.message });
  }

  return res.status(400).json({
    title: "Invalid Data",
    message: "Please try again",
  });
};
