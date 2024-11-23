import express, { Express } from "express";
import cors from "cors";
import "dotenv/config";

const app: Express = express();

//Middlewares
app.use(cors());

export default app;
