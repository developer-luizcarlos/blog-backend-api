import { Router, Request, Response } from "express";
import { createUser } from "../../controllers/user/userController";

const userRouter = Router();

userRouter.post("/create", createUser);

export default userRouter;
