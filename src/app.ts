import express, { Request, Response } from "express";
import globalErrorHandler from "./error/globalErrorHandler.js";
import notFound from "./error/notFound.js";
import router from "./route/index.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://renest-client.vercel.app",
    ],
    credentials: true,
  })
);
app.use(
  "/api/payments/confirm",
  express.raw({ type: "application/json" })
);
app.use(express.json());
app.use(cookieParser());

app.get("/", (req: Request, res: Response) => {
  res.send("RentNest API is running...");
});
app.use("/api", router);

app.use(notFound);



app.use(globalErrorHandler);
export default app;