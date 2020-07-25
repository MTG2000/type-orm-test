import { MessagesController } from "../controller/MessagesController";
import authMiddleware from "../middlewares/auth";

export default [
  {
    method: "get",
    route: "/",
    middlewares: [authMiddleware()],
    action: new MessagesController().all,
  },

  {
    method: "post",
    route: "/",
    middlewares: [authMiddleware()],
    action: new MessagesController().save,
  },
];
