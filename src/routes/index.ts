import usersRoutes from "./users";

export default [
  ...usersRoutes.map((r) => ({
    ...r,
    route: "/api/users" + r.route,
  })),
];
