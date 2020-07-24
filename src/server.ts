import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response, NextFunction } from "express";
import Routes from "./routes/index";
import handleError from "./middlewares/handleError";
const path = require("path");

// create express app
const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

const publicPath = path.join(__dirname, "../public");

app.use(express.static(publicPath));

// register express routes from defined application routes
Routes.forEach((route) => {
  (app as any)[route.method](
    route.route,
    ...(route.middlewares || [(req, res, next) => next()]),
    async (req: Request, res: Response, next: NextFunction) => {
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

export default require("http").createServer(app);
