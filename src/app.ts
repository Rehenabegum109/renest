import express, { Request, Response } from "express";
import { AuthRoutes } from "./auth/auth.route";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("RentNest API is running...");
});
app.use(
 "/api/auth",
 AuthRoutes
);
export default app;