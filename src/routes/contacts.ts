import { ContactsController } from "../controller/ContactsController";
import authMiddleware from "../middlewares/auth";

export default [
  {
    method: "get",
    route: "/",
    middlewares: [authMiddleware()],
    action: new ContactsController().all,
  },
  {
    method: "get",
    route: "/room",
    middlewares: [authMiddleware()],
    action: new ContactsController().one,
  },
  {
    method: "get",
    route: "/exist",
    middlewares: [authMiddleware()],
    action: new ContactsController().roomExist,
  },
  {
    method: "delete",
    route: "/:id",
    action: new ContactsController().remove,
  },
  {
    method: "post",
    route: "/create",
    middlewares: [authMiddleware()],
    action: new ContactsController().createContact,
  },
];
