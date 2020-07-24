import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import Routes from "./routes/index";
import handleError from "./middlewares/handleError";

// create express app
const app = express();
app.use(bodyParser.json());

// register express routes from defined application routes
Routes.forEach((route) => {
  (app as any)[route.method](
    route.route,
    ...(route.middlewares || []),
    async (req: Request, res: Response, next: Function) => {
      try {
        const result = await route.action(req, res, next);
        if (result) res.send(result);
      } catch (error) {
        //let the middleware handle the error
        next(error);
      }
    }
  );
});

app.use(handleError);

export default app;
