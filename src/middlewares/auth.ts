import AuthService from "../services/auth.service";

const isAuth = (allowedRoles = []) => {
  return async (req, res, next) => {
    const accessToken = req.cookies.authToken;

    try {
      if (!accessToken) {
        return res.status(401).json("You need to Login");
      }

      const result: any = await AuthService.validateToken(accessToken);

      if (!result.valid) throw Error("invalid Token");

      if (result.expired) {
        return res.status(401).send("Token Expired");
      }

      if (
        allowedRoles.length > 0 &&
        allowedRoles.filter((r) => r === result.data.role).length === 0
      )
        return res.status(403).json("You are not authorized");

      //set user
      req.user = { ...result.data };
      next();
    } catch (err) {
      return res.status(403).json(err.toString());
    }
  };
};

export default isAuth;
