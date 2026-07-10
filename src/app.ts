import express, { Request, Response } from "express";


import globalErrorHandler from "./globalErrorHandler";
import notFound from "./notFound";
import router from "./route";

const app = express();
app.use(
  "/api/payments/webhook",
  express.raw({ type: "application/json" })
);
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("RentNest API is running...");
});
app.use("/api", router);

app.use(notFound);


// Global Error Handler
app.use(globalErrorHandler);
export default app;