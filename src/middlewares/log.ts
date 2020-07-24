import { NextFunction, Request, Response } from "express";

export default function (
  request: Request,
  response: Response,
  next: NextFunction
) {
  console.log("Hello From Middleware");
  next();
}
