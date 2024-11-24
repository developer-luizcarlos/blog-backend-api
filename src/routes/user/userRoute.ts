import { Router, Request, Response } from "express";
import { createUser, login } from "../../controllers/user/userController";

const userRouter = Router();

userRouter.post("/create", createUser);

userRouter.post("/login", login);

export default userRouter;
