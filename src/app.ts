import express, { Request, Response } from "express";



import router from "./route";
import globalErrorHandler from "./error/globalErrorHandler";
import notFound from "./error/notFound";

const app = express();
app.use(
  "/api/payments/confirm",
  express.raw({ type: "application/json" })
);
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("RentNest API is running...");
});
app.use("/api", router);

app.use(notFound);



app.use(globalErrorHandler);
export default app;