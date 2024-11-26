import { Router, Request, Response } from "express";
import { create } from "../../controllers/post/postController";

const postRouter = Router();

postRouter.post("/create/:id", create);

export default postRouter;
