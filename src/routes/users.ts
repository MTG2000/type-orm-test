import { UserController } from "../controller/UserController";
import logMiddelware from "../middlewares/log";

export default [
  {
    method: "get",
    route: "/",
    middlewares: [logMiddelware],
    action: new UserController().all,
  },
  {
    method: "get",
    route: "/search",
    action: new UserController().findByName,
  },
  {
    method: "get",
    route: "/:id",
    action: new UserController().one,
  },

  {
    method: "delete",
    route: "/:id",
    action: new UserController().remove,
  },
  {
    method: "post",
    route: "/login",
    action: new UserController().login,
  },
  {
    method: "post",
    route: "/register",
    action: new UserController().register,
  },
];
