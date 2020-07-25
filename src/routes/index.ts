import usersRoutes from "./users";
import contactsRoutes from "./contacts";
import messagesRoutes from "./messages";

export default [
  ...usersRoutes.map((r) => ({
    ...r,
    route: "/api/users" + r.route,
  })),
  ...contactsRoutes.map((r) => ({
    ...r,
    route: "/api/contacts" + r.route,
  })),
  ...messagesRoutes.map((r) => ({
    ...r,
    route: "/api/messages" + r.route,
  })),
];
