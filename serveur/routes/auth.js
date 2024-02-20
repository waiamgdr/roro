
const authRouter = require("express").Router();
const { login, register, logout } = require("../controlles/auth");


authRouter.route("/login").post(login);
authRouter.route("/register").post(register);
// authRouter.route("/logout").get(logout);


module.exports = authRouter;