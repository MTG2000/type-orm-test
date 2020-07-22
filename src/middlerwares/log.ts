import { NextFunction, Request, Response } from "express";

export default function all(
  request: Request,
  response: Response,
  next: NextFunction
) {
  console.log("Hello From Middleware");
  next();
}
