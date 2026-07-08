import express, { Request, Response } from "express";

import router from "./route/indexo";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("RentNest API is running...");
});
app.use("/api", router);

export default app;