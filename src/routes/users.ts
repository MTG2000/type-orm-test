import { UserController } from "../controller/UserController";
import logMiddelware from "../middlerwares/log";

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
    method: "post",
    route: "/",
    action: new UserController().save,
  },
  {
    method: "delete",
    route: "/:id",
    action: new UserController().remove,
  },
];
