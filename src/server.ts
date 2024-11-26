import express, { Express } from "express";
import cors from "cors";
import "dotenv/config";

// imported routes
import userRouter from "./routes/user/userRoute";
import postRouter from "./routes/post/postRoute";

const app: Express = express();

//Middlewares
app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/post", postRouter);

export default app;
