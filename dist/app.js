import express from "express";
import globalErrorHandler from "./globalErrorHandler";
import notFound from "./notFound";
import router from "./route";
const app = express();
app.use("/api/payments/confirm", express.raw({ type: "application/json" }));
app.use(express.json());
app.get("/", (req, res) => {
    res.send("RentNest API is running...");
});
app.use("/api", router);
app.use(notFound);
app.use(globalErrorHandler);
export default app;
//# sourceMappingURL=app.js.map